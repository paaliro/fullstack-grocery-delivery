const Navbar = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between border-2 border-sky-400 bg-[#fbf4e4] px-6 md:px-22 w-full">
                <img src="./images/FreshBasket/freshBasket.png" alt="brand-logo" width={100} height={80} />
                <div className="flex justify-around items-center border-2 border-amber-800 w-[60%]">
                    <p>Seller Dashboard</p>
                    <p>Home</p>
                    <p>All Product</p>
                    <div className="flex border-[1.5px] border-gray-400 rounded-2xl px-4"> 
                        <input type="text" placeholder="Search" className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"/>
                        <img src="./images/search_icon.svg" alt="" />
                    </div>
                    <img src="./images/cart_icon.svg" alt="cart-icon" width={20}/>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;