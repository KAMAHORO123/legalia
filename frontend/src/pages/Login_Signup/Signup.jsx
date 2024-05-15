import React, { useEffect, useState } from "react";
import axios from "axios";
import robot from "../../assets/robot.png";
import logo from "../../assets/logo2.png";
import social from "../../assets/social-media.png";
import head from "../../assets/head.png";
import mail from "../../assets/mail.png";
import eye from "../../assets/eye.png";
import banner2 from "../../assets/banner2.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/api/user/register",
        { name, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(({ data, status }) => {
        if (!data.error && status == 200) {
          navigate("/login");
        } else {
          setError(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("");
    }, 4000);

    () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div className="flex">
      {/* Image */}
      <div className="w-1/2">
        <img src={robot} alt="Robot" className="w-full h-auto object-cover" />
      </div>

      {/* Form and other elements */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="items-center mb-20">
          <div className="flex pl-20">
            <img src={logo} alt="Logo" className="w-12 h-auto mr-2" />
            <h2 className="text-4xl font-bold text-blue-900">Legalia</h2>
          </div>
          <br />
          <div className="flex gap-32 items-center pl-20 absolute pt-3 ">
            <Link to="/login">Login</Link>
            <h2 className="text-white">SignUp</h2>
          </div>
          <img src={banner2} alt="" />
        </div>

        {/* Form inputs */}
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="relative">
            <img src={head} alt="" className="absolute top-4 left-4" />
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded-xl px-12 py-3 mb-4 w-96"
              placeholder="Username.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <img src={mail} alt="" className="absolute top-4 left-4" />
            <input
              type="password"
              name="password"
              className="border border-gray-300 rounded-xl px-12 py-3 mb-4 w-96"
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={eye} alt="" className="absolute top-5 right-5" />
          </div>
          <button
            type="submit"
            className="bg-blue-950 text-white rounded-xl px-4 py-2 w-96"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 ml-2">
          Have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>

        <br />
        <p>Sign in with</p>
        <br />
        <img src={social} alt="Social Media" className="w-26 h-auto" />
      </div>
    </div>
  );
};

export default Signup;
