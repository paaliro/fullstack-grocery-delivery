const Cart = () => {
    return <section className="px-4 md:px-22 my-10">
        <div className="flex flex-col md:flex-row mt-14">
            <div className="max-w-4xl md:w-8/12 w-full">
                <p className="px-4 text-3xl font-medium text-primary">Shopping Cart
                    <span className="px-1 text-secondary font-medium text-sm">0 items</span>
                </p>
                <div className="px-4 pt-6 grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>
            </div>
            <div className="md:w-4/12 w-full border-1 border-gray-400 bg-[#f3f4f6] px-3 md:px-5 mr-3">
                <p className="text-xl font-medium text-primary pt-3">Order Summary</p>
                <hr className="border-gray-300 my-5" />
                <div>
                    <p className="uppercase">Delivery Address</p>
                    <div className="flex justify-between mt-2">
                        <p className="text-[#6b7181]">No address found</p>
                        <button className="text-secondary text-lg">Change</button>
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
                            <span>₹0</span>
                        </p>
                        <p className="flex justify-between text-[#6b7181]">
                            <span>Shipping Fee</span>
                            <span className="text-secondary">Free</span>
                        </p>
                        <p className="flex justify-between text-[#6b7181]">
                            <span>Tax (2%)</span>
                            <span>₹0</span>
                        </p>
                        <p className="flex justify-between text-[#6b7181]">
                            <span>Total Amount</span>
                            <span>₹0</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    </section>
}

export default Cart;