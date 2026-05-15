import { use, useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { useParams } from "react-router";

const bookPromise = fetch('/booksData.json')
    .then(res => res.json());

const BookDetails = () => {

    const { id } = useParams();

    const books = use(bookPromise);

    const expectedBook = books.find(
        book => book.bookId == id
    );

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = expectedBook;

    // Context
    const {
        handleMarkAsRead,
        handleWishList
    } = useContext(BookContext);

    return (

        <div className="max-w-7xl mx-auto px-4 py-10">

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                    bg-base-100
                    rounded-2xl
                "
            >

                {/* Image Section */}
                <div
                    className="
                        bg-gray-100
                        rounded-2xl
                        flex
                        justify-center
                        items-center
                        p-6 md:p-10
                    "
                >

                    <img
                        src={image}
                        alt={bookName}
                        className="
                            h-72
                            md:h-[500px]
                            object-cover
                            rounded-xl
                        "
                    />

                </div>

                {/* Content Section */}
                <div className="space-y-5">

                    {/* Title */}
                    <div>

                        <h2
                            className="
                                text-3xl
                                md:text-5xl
                                font-bold
                                mb-3
                            "
                        >
                            {bookName}
                        </h2>

                        <p
                            className="
                                text-lg
                                md:text-xl
                                text-gray-600
                            "
                        >
                            By : {author}
                        </p>

                    </div>

                    {/* Category */}
                    <div
                        className="
                            border-y
                            py-4
                            text-lg
                            font-medium
                            text-gray-700
                        "
                    >

                        {category}

                    </div>

                    {/* Review */}
                    <div>

                        <p className="leading-8 text-gray-700">

                            <span className="font-bold text-black">
                                Review :
                            </span>{" "}

                            {review}

                        </p>

                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">

                        <span className="font-bold">
                            Tags:
                        </span>

                        {
                            tags.map((tag, ind) => (

                                <div
                                    key={ind}
                                    className="
                                        badge
                                        bg-green-100
                                        text-green-600
                                        font-semibold
                                        border-none
                                        px-4
                                        py-4
                                    "
                                >
                                    #{tag}
                                </div>

                            ))
                        }

                    </div>

                    {/* Info Section */}
                    <div
                        className="
                            border-t
                            pt-6
                            space-y-4
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <span className="text-gray-500">
                                Number of Pages:
                            </span>

                            <span className="font-bold">
                                {totalPages}
                            </span>

                        </div>

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <span className="text-gray-500">
                                Publisher:
                            </span>

                            <span className="font-bold">
                                {publisher}
                            </span>

                        </div>

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <span className="text-gray-500">
                                Year of Publishing:
                            </span>

                            <span className="font-bold">
                                {yearOfPublishing}
                            </span>

                        </div>

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <span className="text-gray-500">
                                Rating:
                            </span>

                            <span className="font-bold">
                                {rating}
                            </span>

                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">

                        <button
                            className="
                                btn
                                btn-outline
                                rounded-full
                                btn-sm md:btn-md
                            "
                            onClick={() =>
                                handleMarkAsRead(expectedBook)
                            }
                        >
                            Mark as Read
                        </button>

                        <button
                            className="
                                btn
                                btn-primary
                                rounded-full
                                btn-sm md:btn-md
                            "
                            onClick={() =>
                                handleWishList(expectedBook)
                            }
                        >
                            Add to Wishlist
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default BookDetails;