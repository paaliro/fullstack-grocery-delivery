import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Main from "./components/Main";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
