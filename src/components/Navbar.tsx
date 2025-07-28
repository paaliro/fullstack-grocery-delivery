const Navbar = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between bg-[#fbf4e4] pt-1 pb-1.5 px-4 md:px-22 w-full border-b-1 border-b-gray-300">
                <img src="/images/freshBasket/logo.png" alt="brand-logo" className="w-20 md:w-27 cursor-pointer" />
                <div className="md:hidden flex gap-6">
                    <div className="relative inline-block">
                        <button className="absolute -top-1.5 right-0 left-5 bg-[#fdb81d] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</button>
                        <img src="/images/nav_cart_icon.svg" alt="cart-icon" className="w-[24px] cursor-pointer" />
                    </div>
                    <img src="/images/menu_icon.svg" alt="menu-icon" className="w-[24px] cursor-pointer" />
                </div>
                <div className="hidden md:flex justify-around items-center w-[60%]">
                    <p className="cursor-pointer border-1 border-gray-400 px-3 rounded-3xl text-sm text-gray-500">Seller Dashboard</p>
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">All Product</p>
                    <div className="flex border-[1.5px] border-gray-400 rounded-3xl px-4">
                        <input type="text" placeholder="Search Products" className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-sm" />
                        <img src="/images/search_icon.svg" alt="search-icon" />
                    </div>
                    <div className="relative inline-block">
                        <button className="absolute -top-1.5 right-0 left-5 bg-[#fdb81d] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</button>
                        <img src="/images/nav_cart_icon.svg" alt="cart-icon" className="w-[30px] cursor-pointer" />
                    </div>
                    <button className="px-7 py-1.5 bg-[#fdb81d] rounded-3xl text-white cursor-pointer font-bold">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;