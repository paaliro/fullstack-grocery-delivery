import { stars } from "../assets/helper";

const BestSellers = () => {
    return <section className="px-6 md:px-24 mt-14 md:mt-18 mb-4 md:mb-5 py-20">
        <div className="">
            <h1 className="text-2xl md:text-3xl font-medium text-[#364152]">Best Sellers</h1>

            {/* <div className="border-1 border-[#e1e3e6] rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"> */}
            <div className="border-1 border-[#e1e3e6] rounded-md my-10 w-fit">
                <div className="w-fit px-4 py-4">
                    <img src="/images/best-sellers/bakery_image.png" alt="potato-img" className="max-w-36" />
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

                            <div>
                                <p className="text-xl font-semibold">₹35
                                    <span className="text-sm"> ₹40</span>
                                </p>
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