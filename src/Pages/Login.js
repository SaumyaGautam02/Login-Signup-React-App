import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";

const validateUsername = (username) =>
  /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(username)
    ? ""
    : "Username is incorrect.";

const validatePassword = (password, username) =>
  password !== username && /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)
    ? ""
    : password === username
    ? "Password should not be same as username."
    : "Password is incorrect";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {
      username: validateUsername(form.username),
      password: validatePassword(form.password, form.username),
    };
    setErrors(newErrors);
    if (!newErrors.username && !newErrors.password) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-[#00674b] py-6 px-4 rounded-t-2xl">
          <h2 className="text-center text-3xl font-mono text-white font-bold">Login</h2>
          <p className="text-center text-white text-lg mt-1 font-mono">Sign in to continue</p>
        </div>
        {success && (
          <div className="bg-[#e6f9f2] border border-[#00674b] text-[#00674b] rounded-lg px-4 py-3 mb-4 text-center font-semibold transition-all duration-300">
            Login successful! Redirecting...
          </div>
        )}
        <div className="bg-white p-8 rounded-b-2xl shadow-xl w-full animate-fade-in">
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] bg-gray-50 transition-colors duration-200 hover:bg-gray-100 ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="mb-6 relative">
              <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] bg-gray-50 transition-colors duration-200 hover:bg-gray-100 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <span
                className="absolute right-2 top-8 cursor-pointer text-[#00674b] hover:text-[#004d3a] transition"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.832-.642 1.624-1.104 2.354M15.5 15.5l-1.5 1.5m-4-4l-1.5 1.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.042-3.362M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                )}
              </span>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#00674b] text-white rounded-md font-semibold mt-4 hover:bg-[#004d3a] transition duration-200 shadow hover:shadow-lg"
            >
              LOGIN
            </button>
          </form>
          <p className="mt-6 text-center text-sm">
            Don’t have Account?{" "}
            <Link to="/signup" className="text-[#00674b] font-semibold underline hover:text-[#004d3a] transition">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

