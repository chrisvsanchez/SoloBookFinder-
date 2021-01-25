import React from "react";
// import { Link } from "react-router";
const BookCard = ({ image, title, author, publisher, infoLink }) => {
  return (
    <div className="card">
      {/* <div className="info"> */}
      <h1 className="title">{title}</h1>

      <div className="image-author">
        {image}
        <p className="author-publish">
          <strong>Author: </strong>
          {author}
          <br></br>
          <strong>Publisher: </strong>
          {publisher}
        </p>
      </div>

      <button
        type="button"
        className="more-info-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = infoLink;
        }}
      >
        More Details
      </button>
    </div>
  );
};

export default BookCard;
