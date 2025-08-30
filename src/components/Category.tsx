// import { categoriesData } from "../assets/helper";

// const Category = () => {
//     return <div className="px-6 md:px-24">
//         <h1 className="text-2xl md:text-3xl font-medium text-[#364152] py-0 md:py-4">Categories</h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
//             {categoriesData.map((data, index) => (
//                 <div key={index} className="rounded-lg p-4 flex flex-col items-center group transition duration-300" style={{ backgroundColor: data.backgroundColor }}>
//                     <img src={data.imgPath} alt={data.text} className="transform transition-transform duration-300 group-hover:scale-110 max-w-28 max-h-28" />
//                     <p className="text-md mt-4">{data.text}</p>
//                 </div>
//             ))}
//         </div>

//     </div>
// }

// export default Category;

import { categoriesData } from "../assets/helper";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="px-6 md:px-24">
            <h1 className="text-2xl md:text-3xl font-medium text-[#364152] py-0 md:py-4">
                Categories
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
                {categoriesData.map((data, index) => (
                    <Link key={index} to={data.link} className="rounded-lg p-4 flex flex-col items-center group transition duration-300" style={{ backgroundColor: data.backgroundColor }}>
                        <img src={data.imgPath} alt={data.text} className="transform transition-transform duration-300 group-hover:scale-110 max-w-28 max-h-28" />
                        <p className="text-md mt-4">{data.text}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;
