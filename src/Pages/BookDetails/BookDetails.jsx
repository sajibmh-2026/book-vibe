import { use, useContext} from "react";
import { BookContext } from "../../Context/BookContext";
import { useParams } from "react-router";

const bookPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    const { id } = useParams();

    const books = use(bookPromise)

    const expectedBook = books.find(book => book.bookId == id)
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

    // use context
      const {handleMarkAsRead} = useContext(BookContext)

    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto w-4/5 
        my-8">
            <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
                <img
                    src={image}
                    alt="Album"
                    className="h-100"
                />

            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title ">By:{author}</h2>
                <p className="py-2 border-y">{category}</p>
                <p>Review: {review}</p>
                <div>
                    {tags.map((tag, ind) => (
                        <div key={ind} className="badge text-green-500 bg-green-100 font-bold ">{tag}</div>
                    ))}
                </div>
                <div className="border-t space-y-3">
                    <div className="flex justify-between items-center gap-2">
                        <span>Number of pages:</span> <span>{totalPages}</span>
                    </div>
                    <div>
                        <span>Publisher:</span> <span>{publisher}</span>
                    </div>
                    <div>
                        <span>Year of Publishing:</span> <span>{yearOfPublishing}</span>
                    </div>
                    <div>
                        <span>Rating:</span> <span>{rating}</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as read</button>
                        <button className="btn btn-primary">Add to wish list</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;