const Navbar = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between bg-[#fbf4e4] py-2 px-8 md:px-22 w-full border-b-1 border-b-gray-300">
                <img src="./images/freshBasket/logo.jpeg" alt="brand-logo" className="w-20 md:w-27" />
                <div className="md:hidden flex gap-6">
                    <img src="./images/cart_icon.svg" alt="cart-icon" className="w-[24px]" />
                    <img src="./images/menu_icon.svg" alt="menu-icon" className="w-[24px]" />
                </div>
                <div className="hidden md:flex justify-around items-center w-[60%]">
                    <p>Seller Dashboard</p>
                    <p>Home</p>
                    <p>All Product</p>
                    <div className="flex border-[1.5px] border-gray-400 rounded-3xl px-4">
                        <input type="text" placeholder="Search" className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" />
                        <img src="./images/search_icon.svg" alt="" />
                    </div>
                    <img src="./images/cart_icon.svg" alt="cart-icon" width={20} />
                    <button className="px-7 py-2 bg-blue-400 rounded-3xl text-white">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;