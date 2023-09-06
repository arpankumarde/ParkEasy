import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [cred, setCred] = useState({
    email: "",
    pass: "",
    type: "",
  });

  //Updating State with change in input fields
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  //Handing the Login Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_SERVER}/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: cred.email,
        pass: cred.pass,
        type: cred.type,
      }),
    });

    const res = await response.json();
    if (!res.success) {
      alert("Enter valid credentials!");
    } else {
      localStorage.setItem("userEmail", cred.email);
      localStorage.setItem("userType", cred.type);
      localStorage.setItem("authToken", res.authToken);

      //redirecting to desired pages based on user type
      if (cred.type == "seeker") {
        navigate("/locations");
      } else if (cred.type == "renter") {
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={cred.email}
            onChange={handleChange}
            className=""
            id="InputEmail"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="">
            Password
          </label>
          <input
            type="password"
            name="pass"
            value={cred.pass}
            onChange={handleChange}
            className=""
            id="InputPassword"
            required
          />
        </div>
        <button type="submit" className="">
          Login
        </button>
        <Link to="/join" className="m-3 btn btn-danger">
          New user?
        </Link>
      </form>
    </div>
  );
};

export default Login;
