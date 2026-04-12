import React, { use } from "react";
import BookCard from "../../utility/BookCard";

const BookCardData = fetch("booksData.json").then((response) =>
  response.json(),
);

function Books() {
  const bookdata = use(BookCardData);
  return (
    <section>
      <h2 className=" text-5xl font-bold text-center">Books</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {bookdata.map((book) => (
          <BookCard book={book} key={book.bookId}></BookCard>
        ))}
      </div>
    </section>
  );
}

export default Books;
