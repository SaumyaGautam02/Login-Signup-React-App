import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e6f9f2] via-[#b2dfdb] to-[#00674b]">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00674b] shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
              <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
            </svg>
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-[#00674b] mb-2">Welcome!</h1>
        <p className="text-lg text-gray-700 mb-6">
          You have successfully logged in.<br />
          Enjoy exploring our app!
        </p>
        <button
          className="px-6 py-2 bg-[#00674b] text-white rounded-full font-semibold hover:bg-[#004d3a] transition"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
