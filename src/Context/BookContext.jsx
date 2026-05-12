// BookProvider.jsx

import { createContext, useState } from "react";
import { toast } from "react-toastify";

import {
    addReadListToLocalDB,
    addWishListToLocalDB,
    getAllReadListFromLocalDB,
    getAllWishListFromLocalDB,
    removeWishListFromLocalDB
} from "../utils/localDB";


export const BookContext = createContext();


const BookProvider = ({ children }) => {

    const [readList, setReadList] = useState(
        () => getAllReadListFromLocalDB()
    );

    const [wishList, setWishList] = useState(
        () => getAllWishListFromLocalDB()
    );


    // ================= MARK AS READ =================

    const handleMarkAsRead = (currentBook) => {

        // already in read list?
        const isExistBook = readList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistBook) {

            toast.error("The book is already in Read List");

            return;
        }


        // add to read list state
        const updatedReadList = [...readList, currentBook];

        setReadList(updatedReadList);


        // add to local storage
        addReadListToLocalDB(currentBook);


        // remove from wishlist
        const remainingWishList = wishList.filter(
            (book) => book.bookId !== currentBook.bookId
        );

        setWishList(remainingWishList);

        removeWishListFromLocalDB(currentBook.bookId);


        toast.success(
            `${currentBook.bookName} added to Read List`
        );
    };



    // ================= ADD TO WISHLIST =================

    const handleWishList = (currentBook) => {

        // already in read list?
        const isExistInReadList = readList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistInReadList) {

            toast.error(
                "This book is already in Read List"
            );

            return;
        }


        // already in wishlist?
        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistBook) {

            toast.error(
                "The book is already in Wish List"
            );

            return;
        }


        // update state
        const updatedWishList = [...wishList, currentBook];

        setWishList(updatedWishList);


        // update local storage
        addWishListToLocalDB(currentBook);


        toast.success(
            `${currentBook.bookName} added to Wish List`
        );
    };



    const data = {
        readList,
        setReadList,
        handleMarkAsRead,

        wishList,
        setWishList,
        handleWishList
    };


    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};


export default BookProvider;