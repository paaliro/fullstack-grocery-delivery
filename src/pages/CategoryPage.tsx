import { useParams } from "react-router-dom";
import { filterByCategory, stars } from "../assets/helper";
import { categoriesData } from "../assets/helper"; // import mapping
import type { Product } from "../assets/helper";

const CategoryPage = () => {
    const { categoryName } = useParams<{ categoryName: string }>(); // slug from URL
    const matchedCategory = categoriesData.find(
        (cat) => cat.link === `/category/${categoryName}`
    );

    const products: Product[] = matchedCategory 
        ? filterByCategory(matchedCategory.categoryName)
        : [];

    return (
        <section className="px-6 md:px-24 py-15 md:py-20">
            <div>
                <div className="flex flex-col items-end w-fit gap-0.5 mb-8  md:mb-12">
                    <h1 className="text-xl md:text-3xl font-medium text-[#364152] uppercase">{matchedCategory ? matchedCategory.text : "Not Found"}</h1>
                    <div className="border-1 md:border-2 w-[40%] rounded-full border-[#feca65]"></div>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {products.map((data, index) => (
                            <div key={index} className="border-1 border-[#e1e3e6] rounded-md" >
                                <div className="px-4 md:px-4 py-2">
                                    <div className="flex justify-center">
                                        <img src={data.imgPath} alt={data.productName} className="max-w-28 md:max-w-36 cursor-pointer transform transition-transform duration-300 hover:scale-105" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500/60 text-xs md:text-sm">{data.categoryName}</p>
                                        <p className="font-medium text-sm md:text-lg">{data.productName}</p>
                                        <div className="flex gap-0.5">
                                            {stars.map((src, i) => (
                                                <img key={i} src={src} alt="star-img" className="w-3" />
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
                ) : (
                    <p className="text-gray-500">No products found for this category.</p>
                )}
            </div>
        </section>
    );
};

export default CategoryPage;
