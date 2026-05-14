import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const WishList = () => {

    const { wishList, handleRemoveWishList, handleMarkAsRead } =
        useContext(BookContext);

    return (
        <div>

            <h1>Wish List</h1>

            {
                wishList.map(book => (
                    <div key={book.bookId} className="card">

                        <h2>{book.bookName}</h2>

                        <div className="flex gap-3">

                            <button
                                onClick={() => handleMarkAsRead(book)}
                                className="btn btn-success"
                            >
                                Read Now
                            </button>

                            <button
                                onClick={() => handleRemoveWishList(book.bookId)}
                                className="btn btn-error"
                            >
                                Remove
                            </button>

                        </div>

                    </div>
                ))
            }

        </div>
    );
};

export default WishList;