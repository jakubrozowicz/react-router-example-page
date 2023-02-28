import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/header4.jpg";

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<img src={img1} alt="landscape" />} />
        <Route path="/authors" element={<img src={img4} alt="landscape" />} />
        <Route path="/contact" element={<img src={img3} alt="landscape" />} />
        <Route path="/login" element={<img src={img2} alt="landscape" />} />
      </Routes>
    </>
  );
};

export default Header;
