import { Suspense, useContext } from "react";
import Banner from "../../Components/Homepage/Banner";
import Allbooks from "./Allbooks";
import { BookContext } from "../../Context/BookContext";

const Homepage = () => {

    const bookContext = useContext(BookContext)
        console.log(bookContext ,"BookContext")
    return (
        <div>
           <Banner/>
      <Suspense fallback={<div>Loading...</div>}>
           <Allbooks />
    </Suspense>
         
        </div>
    );
};

export default Homepage;