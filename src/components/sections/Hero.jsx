import React from "react";
import HeroBook from "../../assets/hero-book.png"

export default function Hero() {
  return (
    <header className="mb-20">
      <div className="mx-auto bg-[#131313]/5 rounded-4xl flex justify-center items-center gap-20 p-32">
        {/* left side  */}
        <div className=" space-y-12">
          <h1 className="text-6xl font-bold leading-20">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button
            className="btn border-none bg-green-500 px-4 py-2 rounded-lg text-white
             hover:bg-green-600 transition"
          >
            View The List
          </button>
        </div>

        {/* right side  */}
        <div>
          <img src={HeroBook} alt="book" className="w-80 h-96" />
        </div>
      </div>
    </header>
  );
}
