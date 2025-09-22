import { Link } from "react-router-dom";
import { Construction } from "lucide-react"; // Optional icon library (lucide-react)

const UnderDevelopment = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#fbf4e4] to-white text-center px-4">
            {/* Icon */}
            <div className="bg-secondary/10 p-6 rounded-full mb-6">
                <Construction className="w-16 h-16 text-secondary" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                This Page is <span className="text-secondary">Under Development</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 max-w-md mb-8">
                We’re working hard to bring this feature to you soon.
                Please check back later or return to the homepage.
            </p>

            {/* Button */}
            <Link
                to="/"
                className="px-6 py-2.5 bg-secondary text-white rounded-3xl font-semibold hover:bg-secondary/90 transition-all">
                Go Back Home
            </Link>
        </div>
    );
};

export default UnderDevelopment;
