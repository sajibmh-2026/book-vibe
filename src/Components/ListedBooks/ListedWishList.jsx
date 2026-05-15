import { useContext, useMemo } from "react";
import { BookContext } from "../../Context/BookContext";

const ListedWishList = ({ sortingType }) => {

    const {
        wishList,
        handleRemoveWishList,
        handleMarkAsRead
    } = useContext(BookContext);

    // Sorting Logic
    const sortedList = useMemo(() => {

        if (!sortingType) return wishList;

        const sorted = [...wishList];

        if (sortingType === "Pages") {

            sorted.sort(
                (a, b) => b.totalPages - a.totalPages
            );

        }

        else if (sortingType === "Rating") {

            sorted.sort(
                (a, b) => b.rating - a.rating
            );

        }

        return sorted;

    }, [wishList, sortingType]);

    // Empty State
    if (sortedList.length === 0) {

        return (

            <div className="text-center py-20">

                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                    Your Wishlist is Empty 💖
                </h2>

                <p className="text-gray-500">
                    Add books to your wishlist to see them here.
                </p>

            </div>

        );
    }

    return (

        <div className="space-y-6 mt-8">

            <h1 className="text-2xl md:text-4xl font-bold mb-6">

                Wish List

            </h1>

            {
                sortedList.map(book => (

                    <div
                        key={book.bookId}
                        className="
                            border border-gray-200
                            rounded-2xl
                            p-4 md:p-6
                            flex flex-col lg:flex-row
                            gap-6
                            shadow-sm
                            hover:shadow-xl
                            transition-all duration-300
                        "
                    >

                        {/* Image */}
                        <div
                            className="
                                bg-gray-100
                                rounded-xl
                                p-4
                                flex
                                justify-center
                                items-center
                                w-full
                                lg:w-auto
                            "
                        >

                            <img
                                src={book.image}
                                alt={book.bookName}
                                className="
                                    w-32 md:w-40
                                    h-48 md:h-56
                                    object-cover
                                    rounded-lg
                                "
                            />

                        </div>

                        {/* Content */}
                        <div className="flex-1">

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 md:gap-3 mb-4">

                                {
                                    book.tags.map((tag, index) => (

                                        <button
                                            key={index}
                                            className="
                                                btn btn-sm
                                                rounded-full
                                                bg-green-100
                                                text-green-600
                                                border-none
                                            "
                                        >
                                            #{tag}
                                        </button>

                                    ))
                                }

                            </div>

                            {/* Title */}
                            <h2
                                className="
                                    text-2xl md:text-3xl
                                    font-bold
                                    mb-2
                                "
                            >
                                {book.bookName}
                            </h2>

                            {/* Author */}
                            <p
                                className="
                                    text-gray-600
                                    mb-4
                                    text-sm md:text-base
                                "
                            >
                                By : {book.author}
                            </p>

                            {/* Publisher + Year */}
                            <div
                                className="
                                    flex flex-wrap
                                    gap-3 md:gap-6
                                    border-b border-dashed
                                    pb-4 mb-4
                                    text-sm text-gray-500
                                "
                            >

                                <p>
                                    Publisher: {book.publisher}
                                </p>

                                <p>
                                    Year: {book.yearOfPublishing}
                                </p>

                            </div>

                            {/* Category + Pages + Rating */}
                            <div className="flex flex-wrap gap-3 mb-5">

                                <button
                                    className="
                                        btn btn-sm
                                        rounded-full
                                        bg-blue-100
                                        text-blue-600
                                        border-none
                                    "
                                >
                                    Category: {book.category}
                                </button>

                                <button
                                    className="
                                        btn btn-sm
                                        rounded-full
                                        bg-orange-100
                                        text-orange-600
                                        border-none
                                    "
                                >
                                    Pages: {book.totalPages}
                                </button>

                                <button
                                    className="
                                        btn btn-sm
                                        rounded-full
                                        bg-yellow-100
                                        text-yellow-700
                                        border-none
                                    "
                                >
                                    Rating: {book.rating}
                                </button>

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-3">

                                <button
                                    onClick={() =>
                                        handleMarkAsRead(book)
                                    }
                                    className="
                                        btn btn-success
                                        text-white
                                        rounded-full
                                        btn-sm md:btn-md
                                    "
                                >
                                    Read Now
                                </button>

                                <button
                                    className="
                                        btn btn-info
                                        text-white
                                        rounded-full
                                        btn-sm md:btn-md
                                    "
                                >
                                    View Details
                                </button>

                                <button
                                    onClick={() =>
                                        handleRemoveWishList(book.bookId)
                                    }
                                    className="
                                        btn btn-error
                                        text-white
                                        rounded-full
                                        btn-sm md:btn-md
                                    "
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>

    );
};

export default ListedWishList;