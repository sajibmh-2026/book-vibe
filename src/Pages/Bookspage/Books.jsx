import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";


const Books = () => {

     // use context
    const {storeBooks} = useContext(BookContext)
    console.log(storeBooks , "BookContext")
    return (
        <div>
          listed books
        </div>
    );
};

export default Books;