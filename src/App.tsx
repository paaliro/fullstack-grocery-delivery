import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        {/* Add more pages here */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
