import { Routes, Route } from "react-router-dom";
import { Cart, Checkout, Home, ProductPage } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="content">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
