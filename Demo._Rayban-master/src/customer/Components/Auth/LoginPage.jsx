import React, { useState } from "react";

const AuthForm = () => {
  // State to track form mode (login or signup)
  const [isLogin, setIsLogin] = useState(true);
  // Form input states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle between login and signup
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login Details:", { email: formData.email, password: formData.password });
    } else {
      console.log("Signup Details:", formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-2xl bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        {/* Logo */}
        {/* <h2 className="text-center text-2xl font-bold mb-4">RITE AID</h2> */}
        <img src={"https://th.bing.com/th?id=OIP.HOQlpePyyJDb3IN8GuC4rQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} alt="" className="h-16 item-center mx-auto" />
        
        {/* Form Title */}
        <h3 className="text-center text-xl font-semibold mb-6">
          {isLogin ? "Sign In" : "Create an account"}
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <label className="block mb-2 font-medium">Email Address / Username</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@youremail.com"
            required
            className="w-full p-2 border rounded-md mb-4"
          />

          {/* Password Field */}
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full p-2 border rounded-md mb-4"
          />

          {/* Confirm Password Field (only for Signup) */}
          {!isLogin && (
            <>
              <label className="block mb-2 font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="w-full p-2 border rounded-md mb-4"
              />
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            {isLogin ? "Continue" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Button */}
        <p className="text-center mt-4">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button onClick={toggleMode} className="text-blue-500 underline">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={toggleMode} className="text-blue-500 underline">
                Sign In
              </button>
            </>
          )}
        </p>
      </div>

      {/* Footer Links */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>
          <a href="#" className="underline">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Privacy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Accessibility
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            CA Privacy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Do Not Sell My Personal Information
          </a>
        </p>
        <p className="mt-2">&copy; 2024 Rite Aid Corp. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default AuthForm;
