const NeverMiss = () => {
    return <section className="px-6 md:px-24 mt-20 md:mt-22">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-medium text-[#364152]">Never Miss a Deal!</h1>
            <p className="text-gray-500/80 text-sm md:text-lg mt-2 text-center">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
            <div className="flex mt-12 mb-10 md:w-[55%]"> 
                <input type="text" name="subscribe-input" id="subscribe-input" placeholder="Enter your email id" className="border border-gray-500/30 rounded-l-md outline-none w-full px-3 text-gray-500 py-3" />
                <button className="md:px-12 px-8 text-white bg-[#fdb81d] rounded-r-md py-3 text-md hover:bg-[#e5a91a] transition-colors">Subscribe</button>
            </div>
        </div>
    </section>
}

export default NeverMiss;