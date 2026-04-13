import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../context/BookContext";

function BookDetais() {
  const { bookId } = useParams();
  const books = useLoaderData();

  const { handleMarkAsRead, setSortedBooks, storedBooks, storedWishlist, handleAddWishlist } =
    useContext(BookContext);
  console.log("storedBooks : ", storedBooks);
  console.log("storedWishlist : ", storedWishlist);
  const heatBook = books.find((book) => book.bookId == bookId);

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
          <h1 className="text-4xl font-bold mb-2">{heatBook?.bookName}</h1>

          <p className="text-[#131313]/80 mb-4">
            By : <span className="font-medium">{heatBook?.author}</span>
          </p>

          <hr className="mb-4  text-[#131313]/15" />

          <p className="text-lg font-medium mb-2 text-[#131313]/80">
            {heatBook?.category}
          </p>

          <hr className="mb-4  text-[#131313]/15" />

          <p className="text-sm mb-4 text-[#131313]/70">
            <span className="font-bold text-[#131313]">Review :</span>{" "}
            {heatBook?.review}
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mb-4">
            <span className="badge bg-[#23BE0A]/5 text-[#23BE0A] ">
              #{heatBook?.tags[0]}
            </span>
            <span className="badge bg-[#23BE0A]/5 text-[#23BE0A]">
              #{heatBook?.tags[1]}
            </span>
          </div>

          <hr className="mb-4  text-[#131313]/15" />

          {/* INFO */}
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-bold text-[#131313]">
                Number of Pages: &nbsp; &nbsp;
              </span>{" "}
              {heatBook?.totalPages}
            </p>
            <p>
              <span className="font-bold text-[#131313]">
                Publisher:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;
              </span>{" "}
              {heatBook?.publisher}
            </p>
            <p>
              <span className="font-bold text-[#131313]">
                Year of Publishing: &nbsp; &nbsp;
              </span>{" "}
              {heatBook?.yearOfPublishing}
            </p>
            <p>
              <span className="font-bold text-[#131313]">
                Rating: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </span>{" "}
              {heatBook?.rating}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button
              className="btn btn-outline"
              onClick={() => handleMarkAsRead(heatBook)}
            >
              Mark as Read
            </button>
            <button className="btn btn-info text-white" onClick={()=>handleAddWishlist(heatBook)}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetais;
