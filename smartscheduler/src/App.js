import React from "react";
import "./App.css";
import Header from "./components/Header";
import Patient from "./components/Patient";
<<<<<<< HEAD
import axios from "axios";

// import Footer from "./components/Footer";
=======
// import Footer from './components/Footer';
import AdminMain from './components/AdminMain.js';
>>>>>>> cf690827d47c71906ba1cf829b42c2cde2218bbd

function App() {
  return (
    <div>
      <Header />
      <Patient />
      <AdminMain />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
