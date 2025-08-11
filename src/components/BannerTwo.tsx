import { bannerTwoContent } from "../assets/helper";

const BannerTwo = () => {
    return <section className="px-6 md:px-24">
        <div className="relative">
            <img src="/images/bottom_banner_image.png" alt="desktop-banner-img" className="hidden md:inline mt-24" />
            <img src="/images/bottom_banner_image_sm.png" alt="mobile-banner-img" className="md:hidden mt-18" />
            <div>
                <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
                    <div className="mt-10 md:mt-20 lg:mt-25">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 text-[#fdb81d]">Why We Are the Best?</h1>
                        {bannerTwoContent.map((data, index) => (
                            <div key={index} className="flex gap-2.5 md:gap-4 mt-2">
                                <img src={data.imgPath} alt="point-img" className="w-9 md:w-11" />
                                <div>
                                    <p className="text-[#364152] font-semibold md:text-xl">{data.title}</p>
                                    <p className="text-gray-500/60 text-sm">{data.text}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default BannerTwo;