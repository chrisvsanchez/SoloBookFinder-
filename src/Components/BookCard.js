import React from "react";
// import { Link } from "react-router";
const BookCard = ({
  image,
  title,
  description,
  author,
  publisher,
  infoLink,
}) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <span className="author">By {author}</span>
      <span className="publisher">{publisher}</span>
      {image}
      <p className="description">{description}</p>
      {/* <Link to={infoLink}> */}
      <button
        type="button"
        className="details"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = infoLink;
        }}
      >
        More Details
      </button>
      {/* </Link> */}
    </div>
  );
};

export default BookCard;
