import { Link } from "react-router-dom";

const MenuBar = () => {
    return <section>
        <div className="px-6 md:px-24 pt-2 pb-4 flex flex-col gap-3 bg-[#fbf4e4]">
            <Link className="ml-1" to="/">Home</Link>
            <Link className="ml-1" to="/products">All Product</Link>
            <Link className="ml-1" to="/">Contact</Link>
            <button className="px-7 py-1.5 bg-[#fdb81d] rounded-3xl text-white cursor-pointer font-bold w-fit">Login</button>
        </div>
    </section>
};

export default MenuBar;