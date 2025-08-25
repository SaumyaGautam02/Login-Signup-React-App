import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
        error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default InputField;
