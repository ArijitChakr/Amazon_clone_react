import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart";
import { Footer } from "./components/footer";
import { Homepage } from "./components/Homepage";
import { Navbar } from "./components/navbar";
import { ProductList } from "./components/ProductList";
import { RecoilRoot } from "recoil";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className=" bg-body-background">
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <Modal />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
