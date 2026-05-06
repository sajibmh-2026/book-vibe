import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const BookContext = createContext();

 const BookProvider = ({ children }) => {
    const [storeBooks, setStoreBooks] = useState([])

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
            toast.success(`${currentBook.bookName} is added to list`)
        }
        console.log(currentBook, storeBooks , "books")
    }
    
    
    const data = {
        storeBooks,
        setStoreBooks,
        handleMarkAsRead,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;