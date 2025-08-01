const Category = () => {
    return <div className="px-4 md:px-24">
        <h1 className="text-2xl md:text-3xl font-medium text-[#364152] py-4">Categories</h1>
        <div className="flex gap-6">
            <div className="bg-[#f0f5de] w-fit mt-5 rounded-lg p-4 flex flex-col items-center">
                <img src="/images/categories/bottles_image.png" alt="product-img" className="w-30" />
                <p className="text-md mt-4">Organic Vegies</p>
            </div>

            <div className="bg-[#fee0e0] w-fit mt-5 rounded-lg p-4 flex flex-col items-center">
                <img src="/images/categories/dairy_product_image.png" alt="product-img" className="w-30" />
                <p className="text-md mt-4">Organic Vegies</p>
            </div>
        </div>
    </div>
}

export default Category;