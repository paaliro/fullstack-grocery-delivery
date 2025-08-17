import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
import BestSellers from "./BestSellers";
import Category from "./Category";
// import MenuBar from "./MenuBar";
import NeverMiss from "./NeverMiss";

const Main = () => {
    return (
        <div>
            {/* <MenuBar /> */}
            <Banner />
            <Category />
            <BestSellers />
            <BannerTwo />
            <NeverMiss />
        </div>
    )

}

export default Main;