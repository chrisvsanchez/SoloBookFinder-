import "./App.css";
import React, { useState } from "react";
import Search from "./Components/Search";
import BookCard from "./Components/BookCard";
import bookIcon from "./images/BookSVG.svg";
import LoadingBooks from "./images/giphy.gif";

function App() {
  const API_ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    fetch(
      `${API_ENDPOINT}${searchTerm}
      }`
    )
      .then((r) => r.json())
      .then((books) => {
        setBooks(
          books.items.map((book) => {
            return (
              <BookCard
                key={book.id}
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
      })
      .catch((error) => {
        setIsError(true);
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="main-container">
        <Search
          searchTerm={searchTerm}
          handleSearchInput={handleSearchInput}
          handleSubmit={handleSubmit}
        />
        {isError && searchTerm.length > 0 ? (
          <h2 className="no-books-found">
            {" "}
            Sorry no books with {searchTerm} in it's title!{" "}
          </h2>
        ) : (
          <div className="cards-container">
            {isLoading && searchTerm !== "" ? (
              <div className="loading">
                <h3 className="loading-text">Searching for books..</h3>
                <img alt="loading" src={LoadingBooks}></img>
              </div>
            ) : (
              books
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
