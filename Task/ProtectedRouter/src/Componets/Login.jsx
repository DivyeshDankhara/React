import React from "react";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { setIsAuth, user } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  console.log('formData', formData);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.username === user.username && formData.password === user.password) {
      setIsAuth(true)
    setFormData({username:'' ,  password:''})

    } else {
      alert('Invalid User Please SignUp')
    }
  }

  return (
    <div className="bg-blue-300 h-screen">
      <h1 className="text-center text-2xl p-4">Login</h1>
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

export default Login;
