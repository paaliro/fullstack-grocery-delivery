// components/CartButton.tsx

import { useCartStore } from "../store/useCartStore";
import type { Product } from "../assets/interface";

type Props = {
    product: Product;
};

const CartButton = ({ product }: Props) => {
    const { cart, addToCart, updateQuantity } = useCartStore();

    const item = cart.find((i) => i.id === product.id);
    const quantity = item?.quantity || 0;

    return quantity === 0 ? (
        <button onClick={() => addToCart(product)}
            className="flex gap-0.5 md:gap-2 border border-[#feca65] px-1 md:px-3 py-0.5 rounded-md bg-[#fff7e7] text-[#feca65] cursor-pointer" >
            <img src="/images/updated-svg/cart_icon.svg" alt="cart-icon" className="w-3 md:w-4"/>
            Add
        </button>
    ) : (
        <div className="flex items-center gap-1 border border-[#feca65] px-1 md:px-2 py-0.5 rounded-md bg-[#fff7e7] text-accent-strong">
            <button onClick={() => updateQuantity(product.id, -1)} className="px-2 font-bold cursor-pointer" >−</button>
            <span className="font-medium">{quantity}</span>
            <button onClick={() => updateQuantity(product.id, 1)} className="px-2 font-bold cursor-pointer">+</button>
        </div >
    );
};

export default CartButton;