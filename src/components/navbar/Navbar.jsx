import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", active: true },
    { name: "Listed Books"},
    { name: "Pages to Read"}
  ];

  return (
    <nav className=" px-6 py-4">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <h1 className="text-3xl font-bold cursor-pointer">Book Vibe</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <button
              key={index} 
              className={`btn-outline px-4 py-2 rounded-lg transition cursor-pointer ${
                link.active
                  ? "border border-green-500 text-green-500"
                  : " hover:text-green-500"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn border-none bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition">
            Sign In
          </button>
          <button className="btn border-none bg-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-left ${
                link.active
                  ? "border border-green-500 text-green-500"
                  : ""
              }`}
            >
              {link.name}
            </button>
          ))}

          <button className="btn border-none bg-green-500 px-4 py-2 rounded-lg text-white">
            Sign In
          </button>
          <button className="btn border-none bg-cyan-500 px-4 py-2 rounded-lg text-white">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
