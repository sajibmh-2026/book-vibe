import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const WishList = () => {

    const {
        wishList,
        handleRemoveWishList,
        handleMarkAsRead
    } = useContext(BookContext);

    return (

        <div className="space-y-6 mt-8">

            <h1 className="text-3xl font-bold mb-6">
                Wish List
            </h1>

            {
                wishList.map(book => (

                    <div
                        key={book.bookId}
                        className="border border-gray-200 rounded-2xl p-6 flex flex-col lg:flex-row gap-6 shadow-sm hover:shadow-lg transition-all duration-300"
                    >

                        {/* Image Section */}
                        <div className="bg-gray-100 rounded-xl p-5 flex justify-center items-center">

                            <img
                                src={book.image}
                                alt={book.bookName}
                                className="w-40 h-56 object-cover rounded-lg"
                            />

                        </div>

                        {/* Content Section */}
                        <div className="flex-1">

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mb-4">

                                {
                                    book.tags.map((tag, index) => (

                                        <button
                                            key={index}
                                            className="btn btn-sm rounded-full bg-green-100 text-green-600 border-none"
                                        >
                                            #{tag}
                                        </button>

                                    ))
                                }

                            </div>

                            {/* Title */}
                            <h2 className="text-3xl font-bold mb-2">
                                {book.bookName}
                            </h2>

                            {/* Author */}
                            <p className="text-gray-600 mb-4">
                                By : {book.author}
                            </p>

                            {/* Publisher + Year */}
                            <div className="flex flex-wrap gap-6 border-b border-dashed pb-4 mb-4 text-sm text-gray-500">

                                <p>
                                    Publisher: {book.publisher}
                                </p>

                                <p>
                                    Year: {book.yearOfPublishing}
                                </p>

                            </div>

                            {/* Category + Pages + Rating */}
                            <div className="flex flex-wrap gap-4 mb-5">

                                <button className="btn btn-sm rounded-full bg-blue-100 text-blue-600 border-none">
                                    Category: {book.category}
                                </button>

                                <button className="btn btn-sm rounded-full bg-orange-100 text-orange-600 border-none">
                                    Pages: {book.totalPages}
                                </button>

                                <button className="btn btn-sm rounded-full bg-yellow-100 text-yellow-700 border-none">
                                    Rating: {book.rating}
                                </button>

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">

                                <button
                                    onClick={() => handleMarkAsRead(book)}
                                    className="btn btn-success text-white rounded-full"
                                >
                                    Read Now
                                </button>

                                <button
                                    onClick={() =>
                                        handleRemoveWishList(book.bookId)
                                    }
                                    className="btn btn-error text-white rounded-full"
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

export default WishList;