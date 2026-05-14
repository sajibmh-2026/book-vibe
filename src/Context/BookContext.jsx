import { createContext, useState } from "react";
import { toast } from "react-toastify";

import {
    addReadListToLocalDB,
    addWishListToLocalDB,
    getAllReadListFromLocalDB,
    getAllWishListFromLocalDB,
    removeReadListFromLocalDB,
    removeWishListFromLocalDB
} from "../utils/localDB";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {

    const [readList, setReadList] = useState(
        () => getAllReadListFromLocalDB()
    );

    const [wishList, setWishList] = useState(
        () => getAllWishListFromLocalDB()
    );

    // ---------------- READ ----------------

    const handleMarkAsRead = (book) => {

        const exist = readList.find(
            b => b.bookId === book.bookId
        );

        if (exist) {
            toast.error("Already in Read List");
            return;
        }

        const updated = [...readList, book];
        setReadList(updated);
        addReadListToLocalDB(book);

        const updatedWish = wishList.filter(
            b => b.bookId !== book.bookId
        );

        setWishList(updatedWish);
        removeWishListFromLocalDB(book.bookId);

        toast.success("Added to Read List");
    };

    // ---------------- WISH ----------------

    const handleWishList = (book) => {

        const inRead = readList.find(
            b => b.bookId === book.bookId
        );

        if (inRead) {
            toast.error("Already in Read List");
            return;
        }

        const exist = wishList.find(
            b => b.bookId === book.bookId
        );

        if (exist) {
            toast.error("Already in Wish List");
            return;
        }

        const updated = [...wishList, book];
        setWishList(updated);
        addWishListToLocalDB(book);

        toast.success("Added to Wish List");
    };

    // ---------------- REMOVE ----------------

    const handleRemoveReadList = (id) => {

        const updated = readList.filter(
            b => b.bookId !== id
        );

        setReadList(updated);
        removeReadListFromLocalDB(id);

        toast.success("Removed from Read List");
    };

    const handleRemoveWishList = (id) => {

        const updated = wishList.filter(
            b => b.bookId !== id
        );

        setWishList(updated);
        removeWishListFromLocalDB(id);

        toast.success("Removed from Wish List");
    };

    const value = {
        readList,
        wishList,
        handleMarkAsRead,
        handleWishList,
        handleRemoveReadList,
        handleRemoveWishList
    };

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};