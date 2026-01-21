import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
import BestSellers from "./BestSellers";
import Category from "./Category";
import NeverMiss from "./NeverMiss";

const Main = () => {

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => console.log(data));

    return (
        <div>
            <Banner />
            <Category />
            <BestSellers />
            <BannerTwo />
            <NeverMiss />
        </div>
    )

}

export default Main;