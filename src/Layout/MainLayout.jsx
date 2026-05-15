import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {

    return (

        <div className="min-h-screen bg-base-100">

            <Navbar />

            <main>

                <Outlet />

            </main>

        </div>

    );
};

export default MainLayout;