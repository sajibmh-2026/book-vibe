import { FaRegStar } from "react-icons/fa";
const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="p-6">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="rounded-xl h-62.5"
                />

            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2">
                    {book.tags.map((tag, ind) => (
                        <div key={ind} className="badge text-green-500 bg-green-100 font-bold ">{tag}</div>
                    ))}
                </div>

                <h2 className="card-title font-bold text-lg">
                    {book.bookName}
                </h2>
                <p className="font-semibold text-lg">{book.author}</p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                    <div className="font-semibold">
                        {book.category}

                    </div>
                    <div className="flex gap-2 items-center">
                        {book.rating} <FaRegStar /></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;