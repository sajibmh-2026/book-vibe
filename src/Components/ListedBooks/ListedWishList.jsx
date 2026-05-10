import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../Ui/BookCard";

const ListedWishList = () => {

    const { wishList } = useContext(BookContext)
    console.log(wishList, "BookContext")

    if (wishList.length === 0) {
        return <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
            <h2 className="font-bold text-3xl">No wishlist data found</h2>
        </div>
    }



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    wishList.map((book, ind) =>
                        <BookCard key={ind} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedWishList;