import { allProductsContent, stars } from "../assets/helper";

const BestSellers = () => {
    // shuffle + take first 8 products
    const randomProducts = [...allProductsContent]
        .sort(() => Math.random() - 0.5) // shuffle
        .slice(0, 5); // take 5

    return (
        <section className="px-6 md:px-24 mt-14 md:mt-16 mb-4 md:mb-5">
            <div>
                <h1 className="text-2xl md:text-3xl font-medium text-[#364152] mb-6 md:mb-8">Best Sellers</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {randomProducts.map((data) => (
                        <div key={data.id} className="border-1 border-[#e1e3e6] rounded-md">
                            <div className="px-4 md:px-4 py-2">
                                <div className="flex justify-center">
                                    <img
                                        src={data.imgPath}
                                        alt={data.productName}
                                        className="max-w-28 md:max-w-36 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-500/60 text-xs md:text-sm">{data.categoryName}</p>
                                    <p className="font-medium text-sm md:text-lg">{data.productName}</p>
                                    <div className="flex gap-0.5">
                                        {stars.map((src, index) => (
                                            <img key={index} src={src} alt="star-img" className="w-3" />
                                        ))}
                                        <p className="text-gray-500/60 text-sm">(4)</p>
                                    </div>

                                    <div className="flex justify-between items-baseline pt-3">
                                        <p className="text-sm md:text-xl lg:2xl font-semibold text-[#feca65]">
                                            ₹{data.actualPrice}
                                            <span className="text-xs md:text-sm text-gray-500/60 line-through px-1">
                                                ₹{data.oldPrice}
                                            </span>
                                        </p>
                                        <button className="flex gap-0.5 md:gap-2 border-1 text-xs md:text-lg border-[#feca65] px-1 md:px-3 py-0.5 rounded-md bg-[#fff7e7] text-[#feca65] font-normal cursor-pointer">
                                            <img src="/images/updated-svg/cart_icon.svg" alt="cart-icon" className="w-3 md:w-4" />
                                            Add
                                        </button>
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
