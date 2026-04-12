// {
//     "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": [
//         "Fiction",
//         "Romance"
//     ],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
// }

const BookCard = ({book}) => {
    
  return (
    <div className="card w-full bg-white shadow-xl rounded-2xl border border-[#131313]/15 p-6 gap-6 cursor-pointer transform transition-transform hover:scale-105">
      {/* Image Section */}
      <figure className="p-4 bg-[#F3F3F3] rounded-2xl">
        <img
          src={book.image}
          alt="book"
          className="h-48 object-contain"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-5 space-y-3">
        {/* Tags */}
        <div className="flex gap-2">
          <span className="px-4 py-2 rounded-full text-[#23BE0A] bg-[#23BE0A]/5 ">
            {book.category}
          </span>
          <span className="px-4 py-2 rounded-full text-[#23BE0A] bg-[#23BE0A]/5 ">
            {book.tags[1]}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold leading-snug">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-sm text-[#131313]/80">By : {book.author}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200"></div>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#131313]/80">{book.totalPages} pages</span>

          <div className="flex items-center gap-1 text-[#131313]/80 font-semibold">
            <span>{book.rating.toFixed(2)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
