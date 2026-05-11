import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../Ui/BookCard";

const ListedWishList = ({ sortingType }) => {

    const { wishList } = useContext(BookContext)
    console.log(wishList, "BookContext")

    const [filterWishList, setfilterWishList] = useState(wishList)

    useEffect(() => {
        if (sortingType) {
            if (sortingType === "Pages") {
                const sortedData = [...wishList].sort(
                    (a, b) => a.totalPages - b.totalPages
                )
                console.log(sortedData);
                setfilterWishList(sortedData)

            } else if (sortingType === "Rating") {
                const sortedData = [...wishList].sort(
                    (a, b) => a.rating - b.rating
                )
                console.log(sortedData);
                setfilterWishList(sortedData)
            }


        }

    }, [sortingType, wishList ])


    if (filterWishList.length === 0) {
        return <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
            <h2 className="font-bold text-3xl">No wishlist data found</h2>
        </div>
    }



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    filterWishList.map((book, ind) =>
                        <BookCard key={ind} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedWishList;