import { stars } from "../assets/helper";

const BestSellers = () => {
    return <section className="px-6 md:px-24 mt-14 md:mt-18 mb-4 md:mb-5 py-20">
        <div className="">
            <h1 className="text-2xl md:text-3xl font-medium text-[#364152]">Best Sellers</h1>

            {/* <div className="border-1 border-[#e1e3e6] rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"> */}
            <div className="border-1 border-[#e1e3e6] rounded-md my-10 w-fit">
                <div className="w-fit px-4 py-2">
                    <img src="/images/best-sellers/bakery_image.png" alt="potato-img" className="max-w-40 cursor-pointer transform transition-transform duration-300 hover:scale-105" />
                    <div className="">
                        <div>
                            <p className="text-gray-500/60 text-sm">Bakery</p>
                            <p className="font-medium">Brown Bread 400g</p>
                            <div className="flex gap-0.5">
                                {stars.map((src, index) => (
                                    <img key={index} src={src} alt="star-img" className="w-4" />
                                ))}
                                <p className="text-gray-500/60 text-sm">(4)</p>
                            </div>

                            <div className="flex justify-between pt-3">
                                <p className="text-xl font-semibold text-[#feca65]">₹35
                                    <span className="text-sm text-gray-500/60 line-through px-1">₹40</span>
                                </p>
                                <button className="flex gap-2 border-1 border-[#feca65] px-2 py-0.5 rounded-md bg-[#fff7e7] text-[#feca65] font-normal cursor-pointer">
                                    <img src="/images/updated-svg/cart_icon.svg" alt="cart-icon" className="w-4" />
                                    Add
                                </button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default BestSellers; 