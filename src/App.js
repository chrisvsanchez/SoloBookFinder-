import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import BookCard from "./Components/BookCard";
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API;
console.log(process.env.REACT_APP_GOOGLE_BOOKS_API);
function App() {
  // const API_ENDPOINT = "";
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}:keyes&key=${API_KEY}`
    )
      .then((r) => r.json())
      .then((books) => {
        console.log(books);
        setBooks(
          books.items.map((book) => {
            return (
              <BookCard
                key={Math.random()}
                // key={book.volumeInfo.industryIdentifiers[0].identifier.parseInt()}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.smallThumbnail}
              />
            );
          })
        );
      });
  }, [searchTerm]);
  return (
    <div className="main-container">
      <Search searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
      <div className="cards-container">{books}</div>
    </div>
  );
}

export default App;
