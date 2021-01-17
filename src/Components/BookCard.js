import React from "react";

const BookCard = ({ image, title, description }) => {
  return (
    <div className="outer-card">
      <h1 className="title">{title}</h1>
      <img className="book-cover" src={image} alt={title} />
      <p className="description">{description}</p>
      <button className="details">More Details</button>
    </div>
  );
};

export default BookCard;
