import React from 'react'
import { useLoaderData, useParams } from 'react-router'

function BookDetais() {
const {bookId} = useParams();
const books = useLoaderData();

const heatBook = books.find(book=> book.bookId == bookId);
console.log("heatBook:", heatBook);
  return (
    <div>BookDetais</div>
  )
}

export default BookDetais