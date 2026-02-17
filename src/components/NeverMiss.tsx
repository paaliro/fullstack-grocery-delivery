import React, { useState } from "react";

const NeverMiss: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    // Simple & reliable email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedEmail = email.trim().toLowerCase();

        if (!trimmedEmail) {
            setError("Email is required");
            return;
        }

        if (!emailRegex.test(trimmedEmail)) {
            setError("Please enter a valid email address");
            return;
        }

        localStorage.setItem("subscriberEmail", trimmedEmail);

        setError("");
        setEmail("");

        console.log("Saved:", trimmedEmail);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (error) setError(""); // Clear error while typing
    };

    const handleBlur = () => {
        if (email && !emailRegex.test(email.trim())) {
            setError("Invalid email format");
        }
    };

    return (
        <section className="px-6 md:px-24 mt-20 md:mt-22">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-4xl font-medium text-[#364152]">Never Miss a Deal!</h1>
                <p className="text-gray-500/80 text-sm md:text-lg mt-2 text-center">
                    Subscribe to get the latest offers, new arrivals, and exclusive discounts
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col mt-12 mb-10 md:w-[55%]" noValidate>
                    <div className="flex">
                        <input type="email" placeholder="Enter your email" className={`border rounded-l-md outline-none w-full px-3 py-3 text-gray-600 ${error ? "border-red-500" : "border-gray-500/30"}`} value={email} onChange={handleChange} onBlur={handleBlur} aria-invalid={!!error} aria-describedby="email-error" />

                        <button type="submit" className="md:px-12 px-8 text-white bg-[#fdb81d] rounded-r-md py-3 text-md hover:bg-yellow-600 transition-colors cursor-pointer" >
                            Subscribe
                        </button>
                    </div>

                    {error && (
                        <span id="email-error" className="text-red-500 text-sm mt-1 ml-2">
                            {error}
                        </span>
                    )}
                </form>
            </div>
        </section>
    );
};

export default NeverMiss;
