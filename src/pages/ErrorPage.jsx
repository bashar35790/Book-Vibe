import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white px-4">
      <div className="text-center max-w-lg">
        
        {/* Animated Emoji */}
        <div className="text-7xl mb-6 animate-bounce">🚫</div>

        {/* 404 Text */}
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">
          404
        </h1>

        {/* Message */}
        <p className="text-gray-400 text-lg mb-6">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-[#0097b2] hover:bg-[#00bcd4] transition px-6 py-3 rounded-xl text-lg font-medium shadow-lg"
        >
          Go Back Home
        </Link>

        {/* Optional small text */}
        <p className="text-gray-600 mt-6 text-sm">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
}