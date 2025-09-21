import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-sm h-[400px] my-20">
            <p className="font-semibold md:text-4xl text-3xl text-secondary mb-2">404</p>
            <h2 className="md:text-5xl text-3xl font-semibold text-primary">Page Not Found</h2>
            <p className="text-base mt-4 text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="flex items-center gap-4 mt-6">
                <Link to="/">
                    <button type="button" className="bg-secondary hover:bg-secondary-dark px-7 py-2.5 text-white rounded active:scale-95 transition-all cursor-pointer font-semibold">
                        Go back home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;