const Cart = () => {
    return <section className="px-4 md:px-22">
        <div className="flex flex-col md:flex-row mt-16">
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
            <div className="md:w-4/12 w-full border-1 border-gray-500 bg-gray-400/60">
                <p className="text-3xl font-medium text-primary">Order Summary</p>
            </div>
        </div>

    </section>
}

export default Cart;