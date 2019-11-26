import React from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Patient from "./components/Patient";
import axios from "axios";

// import Footer from "./components/Footer";
// import Footer from './components/Footer';
import AdminMain from "./components/AdminMain.js";
import FrontLogin from "./components/FrontLogin";

function App() {
  return (
    <div>
      <MainContent />
      <Header />
      {/* <FrontLogin /> */}
      {/* <Patient /> */}
      {/* <AdminMain /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
