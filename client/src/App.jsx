import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Join, Login, Lost } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/joinus" element={<Join />} />
          <Route path="*" element={<Lost />} />
        </Routes>

        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
