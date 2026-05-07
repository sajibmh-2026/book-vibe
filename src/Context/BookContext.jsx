import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storeBooks, setStoreBooks] = useState([])
    const [wishList, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book ID or storeBook 
        // step 2:where to store
        // step 3: array or collection
        // step 4: if the book already exist show a alert
        // step 5: if not than add the book in the array or collection
        const isExistBook = storeBooks.find((book) => book.bookId === currentBook.bookId)
        if (isExistBook) {
            toast.error('the book is already exist');
        }
        else {
            setStoreBooks([...storeBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to readlist`)
        }
        console.log(currentBook, storeBooks, "books")
    }

    const handleWishList = (currentBook) => {
        // step 1: store book ID or storeBook 
        // step 2:where to store
        // step 3: array or collection
        // step 4: if the book already exist show a alert
        // step 5: if not than add the book in the array or collection

        const isExistInReadList = storeBooks.find((book) => book.bookId === currentBook.bookId);

        if (isExistInReadList) {
            toast.error("This book is already in read list")
            return;
        }

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId)
        if (isExistBook) {
            toast.error('The book is Already exist');
        }
        else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wishlist`)
        }
        console.log(currentBook, storeBooks, "books")
    }


    const data = {
        storeBooks,
        setStoreBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;