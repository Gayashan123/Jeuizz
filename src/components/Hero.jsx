import quizImage from "../assets/quiz.jpg";

export default function Hero() {
  return (
    <div
      className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${quizImage})` }}
    >
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Ready to Challenge Yourself?</h2>
        <p className="text-sm sm:text-base mb-4 text-gray-200 max-w-md">
          Take fun and engaging quizzes, track your progress, and learn new things every day!
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md">
          Start Quiz
        </button>
      </div>
    </div>
  );
}
