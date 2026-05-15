import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-semibold ${isActive
                            ? "text-green-500 border border-green-500"
                            : "text-gray-700 hover:text-green-500"
                        } px-3 py-2 rounded-lg`
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/books"
                    className={({ isActive }) =>
                        `font-semibold ${isActive
                            ? "text-green-500 border border-green-500"
                            : "text-gray-700 hover:text-green-500"
                        } px-3 py-2 rounded-lg`
                    }
                >
                    Listed Books
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/pages-to-read"
                    className={({ isActive }) =>
                        `font-semibold ${isActive
                            ? "text-green-500 border border-green-500"
                            : "text-gray-700 hover:text-green-500"
                        } px-3 py-2 rounded-lg`
                    }
                >
                    Pages to Read
                </NavLink>
            </li>
        </>
    );

    return (

        <nav className="bg-base-100 shadow-sm sticky top-0 z-50">

            <div className="navbar max-w-7xl mx-auto px-4">

                {/* Left */}
                <div className="navbar-start">

                    {/* Mobile Dropdown */}
                    <div className="dropdown">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links}
                        </ul>

                    </div>

                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-green-600">
                        Book Vibe
                    </h1>

                </div>

                {/* Center Menu */}
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>

                </div>

                {/* Right Buttons */}
                <div className="navbar-end gap-2">

                    <button className="btn btn-sm md:btn-md btn-success text-white rounded-full">
                        Sign In
                    </button>

                    <button className="btn btn-sm md:btn-md btn-accent text-white rounded-full">
                        Sign Up
                    </button>

                </div>

            </div>

        </nav>

    );
};

export default Navbar;