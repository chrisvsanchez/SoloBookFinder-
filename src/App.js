import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import BookCard from "./Components/BookCard";
import bookIcon from "./images/BookSVG.svg";
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API;
// console.log(process.env.REACT_APP_GOOGLE_BOOKS_API);
function App() {
  const API_ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    setIsLoading(true);
    fetch(`${API_ENDPOINT}${searchTerm}:keyes&key=${API_KEY}`)
      .then((r) => r.json())
      .then((books) => {
        console.log(books);
        setBooks(
          books.items.map((book) => {
            return (
              <BookCard
                key={book.id}
                // key={book.volumeInfo.industryIdentifiers[0].identifier.parseInt()}
                title={book.volumeInfo.title}
                author={
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors
                    : "No author available"
                }
                description={
                  book.volumeInfo.description
                    ? book.volumeInfo.description
                    : "No description available"
                }
                image={
                  book.volumeInfo.imageLinks === undefined ? (
                    <img
                      className="svg-book"
                      src={bookIcon}
                      alt={book.volumeInfo.title}
                    />
                  ) : (
                    <img
                      className="book-cover"
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                  )
                }
                infoLink={
                  book.volumeInfo.infoLink ? book.volumeInfo.infoLink : null
                }
                publisher={
                  book.volumeInfo.publisher
                    ? book.volumeInfo.publisher
                    : "No Publisher available"
                }
              />
            );
          })
        );
        setIsLoading(false);
      });
  }, [searchTerm]);
  return (
    <div className="main-container">
      <Search searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
      <div className="cards-container">
        {isLoading ? <p>Is Loading...</p> : books}
      </div>
    </div>
  );
}

export default App;
