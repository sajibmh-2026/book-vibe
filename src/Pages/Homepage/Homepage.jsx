import { Suspense } from "react";
import Banner from "../../Components/Homepage/Banner";
import Allbooks from "./Allbooks";

const Homepage = () => {
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