import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#fbf4e4] to-white px-4">
            <div className="flex flex-col items-center justify-center text-center bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10 max-w-xl w-full">
                {/* Error Code */}
                <p className="font-extrabold md:text-6xl text-4xl text-secondary mb-3">
                    404
                </p>

                {/* Title */}
                <h2 className="md:text-5xl text-3xl font-semibold text-primary">
                    Page Not Found
                </h2>

                {/* Subtext */}
                <p className="text-base mt-4 text-gray-600">
                    Oops! We couldn’t find the page you’re looking for.
                    It might have been moved, deleted, or never existed.
                </p>

                {/* Button */}
                <div className="flex items-center gap-4 mt-6">
                    <Link to="/">
                        <button
                            type="button"
                            className="bg-secondary hover:bg-secondary-dark px-7 py-2.5 text-white rounded-lg active:scale-95 transition-all duration-300 cursor-pointer font-semibold shadow-md"
                        >
                            Go back home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
