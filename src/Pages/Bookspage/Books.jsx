import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";


const Books = () => {

  // use context
  const { storeBooks, wishList } = useContext(BookContext)
  console.log(storeBooks, wishList, "BookContext")
  return (
    <div className="container mx-auto w-4/5  my-8 ">
     Read List : {storeBooks.length} <br />
     Wish List : {wishList.length}
    </div>
  );
};

export default Books;