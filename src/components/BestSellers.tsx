const BestSellers = () => {
    return <section className="px-6 md:px-24 mt-14 md:mt-18 mb-4 md:mb-5 py-20">
        <div className="">
            <h1 className="text-2xl md:text-3xl font-medium text-[#364152]">Best Sellers</h1>

            {/* <div className="border-1 border-[#e1e3e6] rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"> */}
            <div className="border-1 border-[#e1e3e6] rounded-md my-10 w-fit">
                <div className="w-fit px-3 py-2">
                    <img src="/images/best-sellers/potato_image_1.png" alt="potato-img" className="w-28" />
                    <div className="">
                        <div>
                            <p>Vegetables</p>
                            <p>Potato 500g</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default BestSellers; 