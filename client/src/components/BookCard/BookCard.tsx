import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss";
type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="book-card-wrapper">
      <div className="col-left">
        <img className="book-image" src={book.img} alt="book" width={80} />
      </div>
      <div className="col-right">
        <Link className="book-title" to={`book/${book.id}`}>
          {book.name}
        </Link>
        <p className="book-author">{book.author}</p>
        <div className="book-meta">
          <span className="book-price">&#x20b9; {book.price}</span>
          <span className="dot">&#x2022;</span>
          <span
            className="g-book-star-rating"
            style={{ "--rating": book.rating } as React.CSSProperties}
          ></span>
          <span className="book-num-rating">{book.rating}/5</span>
        </div>
        <p className="book-description crop">{book.description}</p>
      </div>
    </div>
  );
}
