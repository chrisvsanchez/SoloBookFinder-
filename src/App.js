import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API;
console.log(process.env.REACT_APP_GOOGLE_BOOKS_API);
function App() {
  // const API_ENDPOINT = "";
  const [searchTerm, setSearchTerm] = useState("");
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
        // books.items.map(book =>{
        //   book[0]
        // })
      });
  }, [searchTerm]);
  return (
    <div className="main-container">
      <Search searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
      <div className="card-container">{}</div>
    </div>
  );
}

export default App;
