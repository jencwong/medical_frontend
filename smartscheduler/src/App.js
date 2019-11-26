import React from "react";
import "./App.css";
import Header from "./components/Header";
import Patient from "./components/Patient";
import axios from "axios";

// import Footer from "./components/Footer";
// import Footer from './components/Footer';
import AdminMain from "./components/AdminMain.js";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Patient />
      <AdminMain />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
