import { useState } from "react";
import Quiz from "../assets/Quiz1.jpg";
import { FaSignInAlt, FaUserPlus, FaSearch } from "react-icons/fa";
import Login from "../components/StudentLogin"; // Make sure the path is correct
import AdminLogin from "../components/AdminLog";


function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [adminLog , setAdminLog] = useState(false);

  return (
    <>
      {/* Main Home UI */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${Quiz})` }}
      >
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
            Welcome to <span className="text-blue-600">QuizMaster</span>
          </h1>
          <p className="text-gray-700 mb-6 text-base font-light">
            Challenge your mind. Play smart. Learn fast.
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowLogin(true)}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
            >
              <FaSignInAlt /> Student Login
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
              <FaSearch /> Browse Quizzes
            </button>

            <button
             onClick={() => setAdminLog(true)}
            
            className="w-full flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
              <FaUserPlus /> Admin Login
            </button>
          </div>
        </div>
      </div>

      {/* Show Login Popup if true */}
      {showLogin && <Login closeLogin={() => setShowLogin(false)} />}
        {adminLog && <AdminLogin closeLogin={() => setAdminLog(false)} />}
    </>
  );
}

export default Home;
