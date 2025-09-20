import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allProductsContent, stars } from "../assets/helper";
import { SearchContext } from "../context/SearchContext"; // ✅ import context

const Products: React.FC = () => {
    const { searchTerm } = useContext(SearchContext); // ✅ get searchTerm from context

    // ✅ filter products based on search
    const filteredProducts = allProductsContent.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="px-4 md:px-24">
            <div className="flex flex-col items-end w-fit gap-0.5 md:mb-10">
                <h1 className="text-xl md:text-3xl font-medium text-[#364152] mt-10 md:mt-20">
                    ALL PRODUCTS
                </h1>
                <div className="border-1 md:border-2 w-[40%] rounded-full border-[#feca65]"></div>
            </div>

            {/* ✅ render products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4.5 py-5 md:pb-10 md:py-0">
                {filteredProducts.map((data) => (
                    <Link key={data.id} to={`/products/${data.categoryName.toLowerCase()}/${data.id}`}>
                        <div className="border-1 border-[#e1e3e6] rounded-md">
                            <div className="px-4 md:px-4 py-2">
                                <div className="flex justify-center">
                                    <img
                                        src={data.imgPath}
                                        alt="items-img"
                                        className="max-w-28 md:max-w-38 h-30 md:h-fit cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-500/60 text-xs md:text-sm">{data.categoryName}</p>
                                    <p className="font-medium text-sm md:text-lg">{data.productName}</p>
                                    <div className="flex gap-0.5">
                                        {stars.map((src, index) => (
                                            <img key={index} src={src} alt="star-img" className="w-3" />
                                        ))}
                                        <p className="text-gray-500/60 text-xs">(4)</p>
                                    </div>

                                    <div className="flex justify-between items-baseline pt-3">
                                        <p className="text-sm md:text-xl lg:2xl font-semibold text-[#feca65]">
                                            ₹{data.actualPrice}
                                            <span className="text-xs md:text-sm text-gray-500/60 line-through px-1">
                                                ₹{data.oldPrice}
                                            </span>
                                        </p>
                                        <button className="flex gap-0.5 md:gap-2 border-1 text-xs md:text-lg border-[#feca65] px-1 md:px-3 py-0.5 rounded-xs md:rounded-sm bg-[#fff7e7] text-[#feca65] font-normal cursor-pointer">
                                            <img
                                                src="/images/updated-svg/cart_icon.svg"
                                                alt="cart-icon"
                                                className="w-2.5 md:w-4"
                                            />
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* ✅ show message if no product */}
            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500/60 mt-10 mb-30 font-medium text-xl md:text-2xl">No products found.</p>
            )}
        </section>
    );
};

export default Products;
