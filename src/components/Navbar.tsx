import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between bg-[#fbf4e4] pt-1 pb-1.5 px-6 md:px-22 w-full border-b border-b-gray-300">
                <img src="/images/logo.png" alt="brand-logo" className="hidden md:inline w-20 h-12 md:w-20 cursor-pointer" />
                <div className="md:hidden w-full">
                    <div className=" flex justify-between ">
                        <img src="/images/logo.png" alt="brand-logo" className="w-20 h-12 md:w-20 cursor-pointer" />
                        <div className="flex gap-6 items-center">
                            <div className="relative inline-block">
                                <button className="absolute -top-1.5 right-0 left-5 bg-[#fdb81d] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</button>
                                <img src="/images/nav_cart_icon.svg" alt="cart-icon" className="w-[24px] cursor-pointer" />
                            </div>
                            <img onClick={() => setMenuOpen(!menuOpen)} src="/images/menu_icon.svg" alt="menu-icon" className="w-[24px] cursor-pointer" />
                        </div>
                    </div>

                    {menuOpen && (
                        <div
                            id="menubar"
                            className="absolute z-50 top-14.5 left-0 pl-6 w-full md:px-24 pt-2 pb-2.5 flex flex-col gap-3 bg-[#fbf4e4] border-b border-b-gray-300">
                            <Link className="ml-1 w-fit" to="/">Home</Link>
                            <Link className="ml-1 w-fit" to="/products">All Product</Link>
                            <Link className="ml-1 w-fit" to="/contact">Contact</Link>
                            <button className="px-7 py-1.5 bg-[#fdb81d] rounded-3xl text-white cursor-pointer font-bold w-fit">Login</button>
                        </div>
                    )}
                </div>



                <div className="hidden md:flex justify-around items-center w-[60%]">
                    <Link to="/seller" className="cursor-pointer border border-gray-400 px-3 rounded-3xl text-sm text-gray-500">Seller Dashboard</Link>
                    <Link to="/">Home</Link>
                    <Link to="/products">All Product</Link>
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
    );
};

export default Navbar;
