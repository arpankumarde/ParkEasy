import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4">
      <div className="bg-black text-white flex justify-between pt-4 pb-2">
        <div className="flex flex-col items-center">
          <Link to="/">ParkEasy</Link>
          <div>
            <Link to="/">Social</Link>
            <Link to="/">Social</Link>
            <Link to="/">Social</Link>
            <Link to="/">Social</Link>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-2 pb-4">
        <Link to="/">&copy; ParkEasy 2023</Link>
        <div>All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
