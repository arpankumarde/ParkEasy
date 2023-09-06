import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between p-4 sticky top-0 text-lg">
      <div className="text-xl font-semibold">
        <NavLink to="/">ParkEasy</NavLink>
      </div>

      {/* Displayng Navlinks as per the category of users */}
      <div className="flex gap-4">
        {localStorage.getItem("userType") == "seeker" ? (
          <>
            <NavLink to="/reservations">Reservations</NavLink>
            <NavLink to="/account">Account</NavLink>
          </>
        ) : localStorage.getItem("userType") == "renter" ? (
          <>
            <NavLink to="/billings">Billings</NavLink>
            <NavLink to="/account">Account</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/joinus">Join Us</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
