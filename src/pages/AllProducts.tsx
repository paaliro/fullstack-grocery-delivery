import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allProductsContent, stars } from "../assets/data";
import { SearchContext } from "../context/SearchContext";
import CartButton from "../components/CartButton";

const Products: React.FC = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext); // get searchTerm from context

    // filter products based on search
    const filteredProducts = allProductsContent.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // clear search on clicking "Browse All Categories"
    const handleBrowseAll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setSearchTerm(""); // this clears the input fields in Navbar automatically
    };

    return (
        <section className="px-4 md:px-24">
            <div className="flex flex-col items-end w-fit gap-0.5 md:mb-10">
                <h1 className="text-xl md:text-3xl font-medium text-[#364152] mt-10 md:mt-20">
                    ALL PRODUCTS
                </h1>
                <div className="border-1 md:border-2 w-[40%] rounded-full border-[#feca65]"></div>
            </div>

            {/* render products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4.5 py-5 md:pb-10 md:py-0">
                {filteredProducts.map((data) => (

                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">

                        {/* CLICKABLE AREA */}
                        <Link
                            to={`/products/${data.categoryName.toLowerCase()}/${data.id}`}
                            className="block p-3 sm:p-4"
                        >
                            <div className="flex justify-center items-center aspect-square">
                                <img
                                    src={data.imgPath}
                                    alt={data.productName}
                                    className="w-full max-w-[140px] object-contain"
                                />
                            </div>

                            <div className="mt-2 space-y-1">
                                <p className="text-gray-500 text-xs">{data.categoryName}</p>
                                <p className="font-medium text-sm line-clamp-2">
                                    {data.productName}
                                </p>

                                <div className="flex items-center gap-1">
                                    {stars.map((src, index) => (
                                        <img key={index} src={src} alt="star" className="w-3" />
                                    ))}
                                    <span className="text-gray-400 text-xs">(4)</span>
                                </div>
                            </div>
                        </Link>

                        {/* NON-NAVIGATING AREA */}
                        <div className="flex items-center justify-between px-3 pb-3">
                            <p className="text-base sm:text-lg md:text-xl font-bold text-[#feca65] leading-tight">
                                ₹{data.actualPrice}
                                <span className="block sm:inline text-xs sm:text-sm font-normal text-gray-400 line-through sm:ml-2">
                                    ₹{data.oldPrice}
                                </span>
                            </p>

                            <CartButton product={data} />
                        </div>
                    </div>

                ))}
            </div>

            {/* show message if no product */}
            {
                filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center mb-14 md:mb-20">
                        <img
                            src="/images/empty-state.jpg"
                            alt="No products"
                            className="w-24 md:w-40 mb-4 opacity-80"
                        />
                        <h2 className="text-lg md:text-2xl font-semibold text-[#364152]">
                            No products found in this category
                        </h2>
                        <p className="text-sm md:text-base text-gray-500 mt-2">
                            Please check other categories or come back later.
                        </p>
                        <a
                            href="/#"
                            onClick={handleBrowseAll}
                            className="mt-6 inline-block px-4 py-2 bg-[#feca65] text-white rounded-md shadow hover:bg-[#e5b755] transition-colors">Browse All Categories
                        </a>
                    </div>
                )
            }
        </section >
    );
};

export default Products;
