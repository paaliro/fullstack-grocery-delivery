// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// function App() {

//   return (
//     <div>
//       <Navbar />
//       <Main />
//       <Footer />
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./pages/Main";
import Products from "./pages/Products"; // <-- your products page
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
