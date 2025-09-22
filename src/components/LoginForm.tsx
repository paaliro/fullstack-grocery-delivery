import React from "react";

const LoginForm = () => {
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-secondary">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fdb81d]" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p className="font-primary">Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fdb81d]" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#fdb81d]" type="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-secondary cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-secondary cursor-pointer">click here</span>
                </p>
            )}
            <button className="bg-secondary transition-all text-white font-semibold w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
    );
};

export default LoginForm;