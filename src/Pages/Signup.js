import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const validateName = (name) =>
  /^[A-Za-z\s]+$/.test(name) ? "" : "Name must contain only alphabets.";

const validateUsername = (username) =>
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9._@-]{3,30}$/.test(username)
    ? ""
    : "Username must be a alphanumeric values combination, and may contain . _ @ -.";

const validatePassword = (password, username) =>
  password !== username && /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)
    ? ""
    : password === username
    ? "Password cannot be same as username."
    : "Please enter a password.";

const validateConfirm = (confirm, password) =>
  confirm === password ? "" : "Passwords do not match.";

const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)
    ? ""
    : "Please enter a valid Gmail address (e.g. user@gmail.com).";

const validatePhone = (phone) =>
  /^\+\d{1,3}\d{7,12}$/.test(phone)
    ? ""
    : "Phone number must start with country code and contain only digits (e.g. +14155552671).";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    confirm: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateName(form.name),
      username: validateUsername(form.username),
      password: validatePassword(form.password, form.username),
      confirm: validateConfirm(form.confirm, form.password),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).every((err) => !err)) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl">
        {/* Removed Logo/Icon */}
        <div className="bg-[#00674b] rounded-t-lg py-6 px-4 flex items-center justify-center shadow-lg">
          <h2 className="text-center text-xl md:text-2xl font-mono text-white font-semibold tracking-wide">
            Create new Account
          </h2>
        </div>
        {success && (
          <div className="bg-[#e6f9f2] border border-[#00674b] text-[#00674b] rounded-lg px-4 py-3 mb-4 text-center font-semibold transition-all duration-300">
            Signup successful! Redirecting to login...
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-lg shadow-xl w-full animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 bg-gray-100 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] transition-colors duration-200 hover:bg-gray-200 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            {/* Username */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 bg-gray-100 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] transition-colors duration-200 hover:bg-gray-200 ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 bg-gray-100 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] transition-colors duration-200 hover:bg-gray-200 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                Phone No.
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 bg-gray-100 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] transition-colors duration-200 hover:bg-gray-200 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
            {/* Password */}
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 bg-gray-100 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] transition-colors duration-200 hover:bg-gray-200 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <span
                className="absolute right-2 top-8 cursor-pointer text-[#00674b] hover:text-[#004d3a] transition"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.832-.642 1.624-1.104 2.354M15.5 15.5l-1.5 1.5m-4-4l-1.5 1.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.042-3.362M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase peer-focus:text-[#00674b] transition-colors duration-200">
                Confirm New Password
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                className={`peer w-full px-2 py-2 bg-gray-100 border-b-2 focus:outline-none focus:border-[#00674b] focus:text-[#00674b] caret-[#00674b] transition-colors duration-200 hover:bg-gray-200 ${
                  errors.confirm ? "border-red-500" : "border-gray-300"
                }`}
              />
              <span
                className="absolute right-2 top-8 cursor-pointer text-[#00674b] hover:text-[#004d3a] transition"
                onClick={() => setShowConfirm((prev) => !prev)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirm ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.832-.642 1.624-1.104 2.354M15.5 15.5l-1.5 1.5m-4-4l-1.5 1.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.042-3.362M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </span>
              {errors.confirm && (
                <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-8 py-2 bg-[#00674b] text-white rounded-full font-semibold hover:bg-[#004d3a] transition duration-200 shadow hover:shadow-lg"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

