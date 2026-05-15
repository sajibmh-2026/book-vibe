import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {

    return (

        <Link
            to={`/bookDetails/${book.bookId}`}
            className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl h-full"
        >

            {/* Image */}
            <figure className="p-5">

                <div className="bg-gray-100 rounded-2xl w-full flex justify-center items-center p-5">

                    <img
                        src={book.image}
                        alt={book.bookName}
                        className="h-60 md:h-72 object-cover rounded-xl"
                    />

                </div>

            </figure>

            {/* Card Body */}
            <div className="card-body pt-0">

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">

                    {
                        book.tags.map((tag, ind) => (

                            <div
                                key={ind}
                                className="badge bg-green-100 text-green-600 font-semibold border-none px-3 py-3"
                            >
                                #{tag}
                            </div>

                        ))
                    }

                </div>

                {/* Title */}
                <h2 className="card-title text-xl md:text-2xl font-bold mt-3">

                    {book.bookName}

                </h2>

                {/* Author */}
                <p className="font-medium text-gray-500 text-base md:text-lg">

                    By : {book.author}

                </p>

                {/* Footer */}
                <div className="card-actions justify-between items-center border-t border-dashed border-gray-300 pt-4 mt-4">

                    <div className="font-semibold text-gray-700">

                        {book.category}

                    </div>

                    <div className="flex gap-2 items-center font-semibold">

                        {book.rating}

                        <FaRegStar className="text-yellow-500" />

                    </div>

                </div>

            </div>

        </Link>

    );
};

export default BookCard;