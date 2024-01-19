import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
