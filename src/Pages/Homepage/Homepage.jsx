import { Suspense } from "react";

import Banner from "../../Components/Homepage/Banner";
import Allbooks from "./Allbooks";

const Homepage = () => {

    return (

        <div>

            {/* Banner */}
            <Banner />

            {/* Books Section */}
            <Suspense
                fallback={
                    <div className="flex justify-center items-center py-20">

                        <span className="loading loading-spinner loading-lg text-success"></span>

                    </div>
                }
            >

                <Allbooks />

            </Suspense>

        </div>

    );
};

export default Homepage;