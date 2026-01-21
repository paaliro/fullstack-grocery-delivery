import React from "react";
import { useParams, Link } from "react-router-dom";
import { allProductsContent } from "../assets/helper";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const product = allProductsContent.find((item) => item.id === id);

    // Fallback if product not found
    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <h2 className="text-2xl font-semibold">Product not found 😕</h2>
                <Link to="/" className="mt-4 bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600">
                    Go Back
                </Link>
            </div>
        );
    }

    // Example static multiple images (you can modify based on your project)
    const productImages = [
        product.imgPath,
        // "/images/placeholder_1.png",
        // "/images/placeholder_2.png",
    ];

    const [thumbnail, setThumbnail] = React.useState(productImages[0]);

    return (
        <section className="flex justify-center py-15 md:py-20">
            <div className="max-w-6xl w-full px-6">
                <p>
                    <Link to="/">Home</Link> /
                    <span> {product.categoryName}</span> /
                    <span className="text-secondary"> {product.productName}</span>
                </p>

                <div className="flex flex-col md:flex-row gap-16 mt-4">

                    {/* Thumbnails + Main Image */}
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3">
                            {productImages.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setThumbnail(image)}
                                    className={`border-1 rounded overflow-hidden cursor-pointer transition ${thumbnail === image ? "border-[#fdb81d] border-2" : "border-gray-300"}`}>
                                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-24 h-24 object-cover" />
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-300 max-w-100 rounded overflow-hidden">
                            <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-sm w-full md:w-1/2">
                        <h1 className="text-3xl font-medium">{product.productName}</h1>
                        <p className="text-gray-500 mt-1">{product.categoryName}</p>

                        <div className="mt-6">
                            <p className="text-gray-500/70 line-through">MRP: ₹{product.oldPrice.toFixed(2)}</p>
                            <p className="text-2xl font-medium">₹{product.actualPrice.toFixed(2)}</p>
                            <span className="text-gray-500/70">(inclusive of all taxes)</span>
                        </div>

                        <p className="text-base font-medium mt-6">About Product</p>
                        <ul className="list-disc ml-4 text-gray-500/70">
                            <li>Fresh and high-quality</li>
                            <li>Carefully packed for safety</li>
                            <li>Available in multiple quantities</li>
                        </ul>

                        <div className="flex items-center mt-10 gap-4 text-base">
                            <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                                Add to Cart
                            </button>
                            <button className="w-full py-3.5 cursor-pointer font-medium bg-secondary text-white transition">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
