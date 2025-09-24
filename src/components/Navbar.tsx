import { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import LoginForm from "./LoginForm";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // controls login modal
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const navigate = useNavigate();
    const location = useLocation(); // 🟩 detects route changes

    const menuRef = useRef<HTMLDivElement>(null); // 🟩 reference to menu

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        navigate("/products");
    };

    // 🟩 Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // 🟩 Close menu if click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between bg-[#fbf4e4] pt-1 pb-1.5 px-4 md:px-22 w-full border-b border-b-gray-300">
                <Link to="/"> <img src="/images/logo.png" alt="brand-logo" className="hidden md:inline w-20 h-12 md:w-20 cursor-pointer" /></Link>
                <div className="md:hidden w-full">
                    <div className=" flex justify-between ">
                        <Link to="/"><img src="/images/logo.png" alt="brand-logo" className="w-20 h-12 md:w-20 cursor-pointer" /></Link>
                        <div className="flex gap-6 items-center mr-2">
                            <div className="relative inline-block">
                                <button className="absolute -top-1.5 right-0 left-5 bg-[#fdb81d] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</button>
                                <Link to="/cart"><img src="/images/nav_cart_icon.svg" alt="cart-icon" className="w-[24px] cursor-pointer" /></Link>
                            </div>
                            <img onClick={() => setMenuOpen(!menuOpen)} src="/images/menu_icon.svg" alt="menu-icon" className="w-[24px] cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex border-[1.5px] border-gray-400/50 rounded-3xl px-4 mt-2 mx-2">
                        <img className="w-3" src="/images/search_icon.svg" alt="search-icon" />
                        <input type="text" placeholder="Search Products" value={searchTerm} onChange={handleSearch} className="py-1.5 pl-2 w-full bg-transparent outline-none placeholder-gray-400/80 text-xs" />
                    </div>

                    {/* Mobile Menu Bar */}
                    {menuOpen && (
                        <div
                            ref={menuRef} // 🟩 attach ref here
                            id="menubar"
                            className="absolute z-50 top-14.5 left-0 pl-6 w-full md:px-24 pt-2 pb-2.5 flex flex-col gap-3 bg-[#fbf4e4] border-b border-b-gray-300">
                            <Link className="ml-1 w-fit" to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
                            <Link className="ml-1 w-fit" to="/products" onClick={() => setMenuOpen(!menuOpen)}>All Product</Link>
                            <Link className="ml-1 w-fit" to="/pagenotfound" onClick={() => setMenuOpen(!menuOpen)}>Contact</Link>
                            <button onClick={() => setShowLogin(true)}
                                className="px-7 py-1.5 bg-[#fdb81d] rounded-3xl text-white cursor-pointer font-bold w-fit">Login</button>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex justify-around items-center w-[60%]">
                    <Link to="/pagenotfound" className="cursor-pointer border border-gray-400 px-3 rounded-3xl text-sm text-gray-500">Seller Dashboard</Link>
                    <Link to="/">Home</Link>
                    <Link to="/products">All Product</Link>
                    <div className="flex border-[1.5px] border-gray-400 rounded-3xl px-4">
                        <input type="text" placeholder="Search Products" value={searchTerm} onChange={handleSearch} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-sm" />
                        <img src="/images/search_icon.svg" alt="search-icon" />
                    </div>
                    <div className="relative inline-block">
                        <button className="absolute -top-1.5 right-0 left-5 bg-secondary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</button>
                        <Link to="/cart"><img src="/images/nav_cart_icon.svg" alt="cart-icon" className="w-[30px] cursor-pointer" /></Link>
                    </div>
                    <button onClick={() => setShowLogin(true)}
                        className="px-7 py-1.5 bg-secondary rounded-3xl text-white cursor-pointer font-bold">Login</button>
                </div>

                {/* Modal (LoginForm Component) */}
                {showLogin && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="relative">
                            <button
                                onClick={() => setShowLogin(false)} className="absolute -top-4 -right-4 bg-white 
                            rounded-full w-8 h-8 flex items-center justify-center shadow-md cursor-pointer">✕</button>
                            <LoginForm />
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;