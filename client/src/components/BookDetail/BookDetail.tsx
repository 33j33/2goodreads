import { Review } from "../Review/Review";
import "./BookDetail.scss";

type BookDetailProps = {
  book: Book;
};

export function BookDetail({ book }: BookDetailProps) {
  return (
    <div className="book-detail-page">
      <section className="details">
        <img className="book-image" src={book.img} alt="book" width={80} />
        <div className="col-right">
          <h3 className="book-title">{book.name}</h3>
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
          <p className="book-description">{book.description}</p>
        </div>
        <button className="review">&#43; Add Review</button>
      </section>
      <section className="reviews">
        <div className="heading">Reviews</div>
        {new Array(5).fill(0).map((_) => (
          <Review review="dfd" rating={3.5} />
        ))}
      </section>
    </div>
  );
}
