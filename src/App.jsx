import "./App.css";

import { Routes, Route } from "react-router-dom";
import FrontendLayouts from "./layouts/FrontendLayouts";
import { About, Contact, Home, Product, Shop } from "./views";
import Loader from "./components/utils/Loader";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<FrontendLayouts />}>
            <Route exact index path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
