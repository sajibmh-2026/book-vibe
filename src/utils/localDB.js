const getAllReadListFromLocalDB = () => {
    const data = localStorage.getItem("readList");
    return data ? JSON.parse(data) : [];
};

const getAllWishListFromLocalDB = () => {
    const data = localStorage.getItem("wishList");
    return data ? JSON.parse(data) : [];
};

// ---------------- ADD ----------------

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();

    const exist = allBooks.find(
        b => b.bookId === book.bookId
    );

    if (!exist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
};

const addWishListToLocalDB = (book) => {
    const allBooks = getAllWishListFromLocalDB();

    const exist = allBooks.find(
        b => b.bookId === book.bookId
    );

    if (!exist) {
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
};

// ---------------- REMOVE ----------------

const removeReadListFromLocalDB = (id) => {

    const allBooks = getAllReadListFromLocalDB();

    const updated = allBooks.filter(
        book => book.bookId !== id
    );

    localStorage.setItem(
        "readList",
        JSON.stringify(updated)
    );
};

const removeWishListFromLocalDB = (id) => {

    const allBooks = getAllWishListFromLocalDB();

    const updated = allBooks.filter(
        book => book.bookId !== id
    );

    localStorage.setItem(
        "wishList",
        JSON.stringify(updated)
    );
};

export {
    getAllReadListFromLocalDB,
    getAllWishListFromLocalDB,
    addReadListToLocalDB,
    addWishListToLocalDB,
    removeReadListFromLocalDB,
    removeWishListFromLocalDB
};