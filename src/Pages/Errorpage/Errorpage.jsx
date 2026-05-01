

import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">

            {/* Error Code */}
            <h1 className="text-9xl font-extrabold tracking-widest">404</h1>

            {/* Divider */}
            <div className="bg-white px-4 py-2 text-black rounded rotate-12 absolute">
                Page Not Found
            </div>

            {/* Message */}
            <div className="mt-10 text-center">
                <h2 className="text-3xl font-semibold mb-2">
                    Oops! You’re lost.
                </h2>
                <p className="text-lg opacity-90">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                        Go Home
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Errorpage;