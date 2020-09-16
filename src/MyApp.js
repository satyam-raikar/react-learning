import React from "react";
import "./style.css";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function MyApp() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
