import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log("formData", formData);

  const { user, setUser } = useAuth();

  console.log("user", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    navigate("/login");
    setFormData({ username: "", email: "", password: "" });
  };

  // const handleChange = (e) => {
  //   // const {name  , value} = e.target
  //   // setFormData((prev) => ({...prev , [name]:value}))
  //   // setFormData({...formData})
  // };

  return (
    <div className="bg-blue-300 h-screen">
      <h1 className="text-center text-2xl p-4">Sign Up</h1>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit}>
          <div className="bg-blue-400 w-fit p-4 border border-black rounded-sm">
            <label htmlFor="">Name : </label>
            <input
              className="border-2 border-black"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
              required
            />
            <br />
            <br />
            <label htmlFor="">E-mail : </label>
            <input
              className="border-2 border-black"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <br />
            <br />
            <label htmlFor="">PassWord : </label>
            <input
              className="border-2 border-black"
              type="password"
              name="password"
              value={formData.password}
              id="password"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            <br />
            <br />
            <div className="flex justify-center">
            <button className="bg-blue-600 px-4 py-2" type="submit">
              submit
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
