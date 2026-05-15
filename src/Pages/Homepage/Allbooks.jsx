import { use } from "react";
import BookCard from "../../Components/Ui/BookCard";

const bookPromise = fetch('/booksData.json')
    .then(res => res.json());

const Allbooks = () => {

    const books = use(bookPromise);

    return (

        <div className="max-w-7xl mx-auto px-4 py-12">

            {/* Heading */}
            <div className="text-center mb-10">

                <h2 className="text-3xl md:text-5xl font-bold">
                    Books
                </h2>

                <p className="text-gray-500 mt-3 text-sm md:text-base">
                    Explore your favorite books and build your reading journey.
                </p>

            </div>

            {/* Books Grid */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-6
                "
            >

                {
                    books.map((book) => (

                        <BookCard
                            key={book.bookId}
                            book={book}
                        />

                    ))
                }

            </div>

        </div>

    );
};

export default Allbooks;