import { Link } from "react-router-dom";
import { allProductsContent, stars } from "../assets/data";
import { useMemo } from "react";
import CartButton from "./CartButton";

const BestSellers = () => {

    // Randomly shuffle the products and select the first 5 for display
    const firstFiveProducts = useMemo(() => {
        return allProductsContent.slice(0, 5);
    }, [allProductsContent]);

    return (
        <section className="px-6 md:px-24 mt-14 md:mt-16 mb-4 md:mb-5">
            <div>
                <h1 className="text-2xl md:text-3xl font-medium text-[#364152] mb-6 md:mb-8">Best Sellers</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {firstFiveProducts.map((data) => (
                        <div key={data.id} className="border-1 border-[#e1e3e6] rounded-md overflow-hidden hover:shadow-md transition">
                            <div className="px-4 md:px-4 py-2">
                                <div className="flex justify-center h-[90%]">
                                    <Link key={data.id} to={`/products/${data.categoryName.toLowerCase()}/${data.id}`}>
                                        <img src={data.imgPath} alt={data.productName} className="max-w-28 md:max-w-38 h-30 md:h-fit cursor-pointer transform transition-transform duration-300 hover:scale-105" />
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-gray-500/60 text-xs md:text-sm">{data.categoryName}</p>
                                    <p className="font-medium text-sm md:text-lg">{data.productName}</p>
                                    <div className="flex gap-0.5">
                                        {stars.map((src, index) => (<img key={index} src={src} alt="star-img" className="w-3" />))}
                                        <p className="text-gray-500/60 text-sm">(4)</p>
                                    </div>

                                    <div className="flex justify-between pt-3">
                                        <p className="text-sm md:text-xl lg:2xl font-semibold text-accent">
                                            ₹{data.actualPrice}
                                            <small className="text-gray-500/60 line-through px-1">₹{data.oldPrice}</small>
                                        </p>
                                        <CartButton product={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
