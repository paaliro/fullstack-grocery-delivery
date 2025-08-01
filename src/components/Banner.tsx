const Banner = () => {
    return <div>
        <div className="relative">
            <img src="/images/main_banner_bg.png" alt="banner-desktop-image" className="hidden md:block px-4 md:px-24 py-10" />
            <img src="/images/main_banner_bg_sm.png" alt="banner-mobile-image" className="block md:hidden px-4 py-8 w-full" />
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-28 md:pb-0 px-4 md:pl-30 lg:pl-50">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 text-[#364152]">Freshness You Can Trust, Savings You will Love!</p>
                <div className="flex items-center mt-6 font-medium">
                    <a href="#" className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer bg-[#fdb81d]">Shop Now</a>
                    <a href="#" className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-[#364152]" data-discover="true">Explore deals
                        <img src="/images/black_arrow_icon.svg" alt="arrow-img" />
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Banner;