import { use } from "react";
import BookCard from "../../Components/Ui/BookCard";

const bookPromise = fetch('/booksData.json').then(res => res.json())


const Allbooks = () => {
    const books = use(bookPromise)
    // console.log(books)
    return (
        <div className="my-12 container mx-auto w-4/5">
            <h2 className="font-bold text-3xl text-center mb-6">Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {books.map((book,ind) => {
                    return (
                      <BookCard key={ind} book={book}/>
                    )
                })
                }
            </div>

        </div>
    );
};

export default Allbooks;