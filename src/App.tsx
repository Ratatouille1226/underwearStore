import { Routes, Route } from "react-router-dom";
import { Cart, Checkout, Home } from "./pages";
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
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
