const Cart = () => {
    return <section className="px-4 md:px-22">
        <div className="flex flex-col md:flex-row mt-16">
            <div className="max-w-4xl border-1 border-emerald-500">
                <p className="text-3xl font-medium text-primary">Shopping Cart
                    <span className="text-secondary font-medium text-sm">0 items</span>
                </p>
                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p>Product Details</p>
                    <p>Subtotal</p>
                    <p>Action</p>
                </div>
            </div>
            <div className="border-1 border-gray-500">
                <p className="text-3xl font-medium text-primary">Order Summary</p>
            </div>
        </div>

    </section>
}

export default Cart;