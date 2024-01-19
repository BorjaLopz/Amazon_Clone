import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { useEffect } from "react";
// import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;
