import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/AllProducts";
import Main from "./components/Main";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import { SearchProvider } from "./context/SearchContext";
// import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
// import UnderDevelopment from "./components/UnderDevelopment";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <SearchProvider>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          {/* <Route path="/products/:categoryName/:id" element={<ProductDetails />} /> */}
          <Route path="/products/:categoryName/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </Router>
    </SearchProvider>
  );
}

export default App;
