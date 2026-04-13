import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [storedBooks, setSortedBooks] = useState([]);
  const [storedWishlist, setStoredWishlist] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    console.log("Mark as Read : ", currentBook);
    const isExist = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
     
      toast.error("You have already marked this book as read.");
      return;
    }
    const updatedBooks = [...storedBooks, currentBook];
    setSortedBooks(updatedBooks);
    toast.success("Book marked as read successfully!");
  };

  const handleAddWishlist = (currentBook) => {
    const isexist = storedWishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isexist) {
      toast.error("You have already added this book to your wishlist.");
      return;
    }
    if (storedBooks.find((book) => book.bookId === currentBook.bookId)) {
      toast.error(
        "You have already marked this book as read. You can't add it to your wishlist."
      );
      return;
    }
    const updatedWishlist = [...storedWishlist, currentBook];
    setStoredWishlist(updatedWishlist);
    toast.success("Book added to wishlist successfully!");
  };
  const data = {
    storedBooks,
    handleMarkAsRead,
    setSortedBooks,
    storedWishlist,
    handleAddWishlist,
    setStoredWishlist,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
}

export default BookContextProvider;
