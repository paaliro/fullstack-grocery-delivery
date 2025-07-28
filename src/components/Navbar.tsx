const Navbar = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between bg-[#fbf4e4] px-6 md:px-22 w-full border-b-1 border-b-gray-300">
                <img src="./images/FreshBasket/freshBasket.png" alt="brand-logo" width={100} height={80} />
                <div className="md:hidden">hll </div>
                <div className="hidden md:flex justify-around items-center w-[60%]">
                    <p>Seller Dashboard</p>
                    <p>Home</p>
                    <p>All Product</p>
                    <div className="flex border-[1.5px] border-gray-400 rounded-3xl px-4"> 
                        <input type="text" placeholder="Search" className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"/>
                        <img src="./images/search_icon.svg" alt="" />
                    </div>
                    <img src="./images/cart_icon.svg" alt="cart-icon" width={20}/>
                    <button className="px-7 py-2 bg-blue-400 rounded-3xl text-white">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;