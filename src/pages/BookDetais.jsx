import React from "react";
import { useLoaderData, useParams } from "react-router";

function BookDetais() {
  const { bookId } = useParams();
  const books = useLoaderData();

  const heatBook = books.find((book) => book.bookId == bookId);
  console.log("heatBook:", heatBook);
  return (
    <div className=" flex items-center justify-center ">
      <div className="grid md:grid-cols-2 gap-10 p-16 rounded-2xl  w-full">
        {/* LEFT - BOOK IMAGE */}
        <div className="flex justify-center items-center  bg-[#131313]/5 rounded-xl p-6">
          <img
            src={heatBook?.image} // replace with your image
            alt="Book"
            className="w-md h-141 object-contain"
          />
        </div>

        {/* RIGHT - DETAILS */}
        <div>
          <h1 className="text-4xl font-bold mb-2">The Catcher in the Rye</h1>

          <p className="text-[#131313]/80 mb-4">
            By : <span className="font-medium">Awlad Hossain</span>
          </p>

          <hr className="mb-4  text-[#131313]/15" />

          <p className="text-lg font-medium mb-2 text-[#131313]/80">Fiction</p>

          <hr className="mb-4  text-[#131313]/15" />

          <p className="text-sm mb-4 text-[#131313]/70">
            <span className="font-bold text-[#131313]">Review :</span> Sit amet
            consectetur. Interdum porta pulvinar non sit aliquam. Aenean
            pulvinar blandit vel non enim elementum penatibus pellentesque ac.
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mb-4">
            <span className="badge bg-[#23BE0A]/5 text-[#23BE0A] ">
              #Young Adult
            </span>
            <span className="badge bg-[#23BE0A]/5 text-[#23BE0A]">#Identity</span>
          </div>

          <hr className="mb-4  text-[#131313]/15" />

          {/* INFO */}
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-bold text-[#131313]">Number of Pages: &nbsp; &nbsp;</span> 281
            </p>
            <p>
              <span className="font-bold text-[#131313]">Publisher:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> J.B Lippincott &
              Co.
            </p>
            <p>
              <span className="font-bold text-[#131313]">Year of Publishing: &nbsp; &nbsp;</span> 1960
            </p>
            <p>
              <span className="font-bold text-[#131313]">Rating: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 4.8
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="btn btn-outline">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetais;
