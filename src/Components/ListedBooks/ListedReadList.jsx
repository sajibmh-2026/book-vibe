import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../Ui/BookCard";


const ListedReadList = ({ sortingType }) => {

    const { readList } = useContext(BookContext)
    console.log(readList, "BookContext")

    const [filterReadList, setfilterReadList] = useState(readList)

    useEffect(() => {
        if (sortingType) {
            if (sortingType === "Pages") {
                const sortedData = [...readList].sort(
                    (a, b) => a.totalPages - b.totalPages
                )
                console.log(sortedData);
                setfilterReadList(sortedData)

            } else if (sortingType === "Rating") {
                const sortedData = [...readList].sort(
                    (a, b) => a.rating - b.rating
                )
                console.log(sortedData);
                setfilterReadList(sortedData)
            }


        }

    }, [sortingType, readList])


    if (filterReadList.length === 0) {
        return <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
            <h2 className="font-bold text-3xl">No ReadList data found</h2>
        </div>
    }


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    filterReadList.map((book, ind) =>
                        <BookCard key={ind} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedReadList;