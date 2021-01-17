import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
function App() {
  const API_KEY = process.env.GOOGLE_BOOKS_API;
  // const API_ENDPOINT = "";
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };
  // useEffect(() => {
  //   fetch().then;
  // }, [searchTerm]);
  return (
    <div className="main-container">
      <Search searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
      <div className="card-container">{}</div>
    </div>
  );
}

export default App;
