import { Link } from "react-router-dom";

const Cart = () => {
    return <section className="px-4 md:px-22 my-15 md:my-20">
        <div className="flex flex-col md:flex-row">
            <div className="max-w-4xl md:w-8/12 w-full">
                <p className="text-3xl font-medium text-primary">Shopping Cart
                    <span className="px-0.5 text-secondary font-medium text-sm">0 items</span>
                </p>
                <div className="mt-6 grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>
                <Link to="/products">
                    <button className="group cursor-pointer text-secondary flex gap-2 mt-10 ml-2 font-medium">
                        <img className="group-hover:-translate-x-1 transition" alt="arrow-img" src="/images/right-arrow.svg" />
                        Continue Shopping
                    </button>
                </Link>
            </div>

            <div className="md:w-4/12 w-full bg-[#f3f4f6] px-3 md:px-5 mr-3 rounded-sm mt-12 md:mt-0">
                <p className="text-xl md:text-2xl font-medium text-primary pt-5">Order Summary</p>
                <hr className="border-gray-300 my-5" />
                <div>
                    <p className="uppercase">Delivery Address</p>
                    <div className="flex justify-between mt-0.5 md:mt-1.5">
                        <p className="text-[#6b7181]">No address found</p>
                        <button className="text-secondary text-lg hover:underline cursor-pointer">Change</button>
                    </div>
                    <p className="uppercase mt-4">Payment Method</p>
                    <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none" name="payment-methods" id="payment-methods">
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Online Payment">Online Payment</option>
                    </select>
                    <hr className="border-gray-300 my-5" />
                    <div className="flex flex-col gap-1.5">
                        <p className="flex justify-between text-[#6b7181]">
                            <span>Price</span>
                            <span>₹0.00</span>
                        </p>
                        <p className="flex justify-between text-[#6b7181]">
                            <span>Shipping Fee</span>
                            <span className="text-secondary">Free</span>
                        </p>
                        <p className="flex justify-between text-[#6b7181]">
                            <span>Tax (2%)</span>
                            <span>₹0.00</span>
                        </p>
                        <p className="flex justify-between text-[#6b7181] font-bold">
                            <span>Total Amount:</span>
                            <span>₹0.00</span>
                        </p>
                    </div>
                    <button className="bg-secondary py-2 md:py-3 w-full my-4 mb-5 font-medium text-white rounded-sm cursor-pointer hover:brightness-92 transition">Place Order</button>
                </div>
            </div>
        </div>

    </section>
}

export default Cart;