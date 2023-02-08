import { useRef } from "react";
import { Review } from "../Review/Review";
import { ReviewFrom } from "../ReviewForm/ReviewForm";
import "./BookDetail.scss";

type BookDetailProps = {
  book: Book;
};

export function BookDetail({ book }: BookDetailProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleDialog = (state: boolean) => {
    if (state) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  };

  return (
    <div className="book-detail-page">
      <section className="details">
        <img
          className="book-image"
          src={
            book.img ||
            "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_960_720.png"
          }
          alt="book"
          width={80}
        />
        <div className="col-right">
          <h3 className="book-title">{book.name}</h3>
          <p className="book-author">{book.author}</p>
          <div className="book-meta">
            <span className="book-price">&#x20b9; {book.price}</span>
            <span className="dot">&#x2022;</span>
            <span
              className="g-book-star-rating"
              style={{ "--rating": book.avgRating } as React.CSSProperties}
            ></span>
            <span className="book-num-rating">
              {book.avgRating.toFixed(1)}/5
            </span>
          </div>
          <p className="book-description">{book.description}</p>
        </div>
        <button className="review" onClick={() => handleDialog(true)}>
          &#43; Add Review
        </button>
      </section>
      <section className="reviews">
        <div className="heading">Reviews</div>
        {book.ratings.map((r, i) => (
          <Review key={i} review={r.review} rating={r.rating} />
        ))}
      </section>
      <dialog className="add-review" ref={dialogRef}>
        <ReviewFrom handleDialog={handleDialog} bookId={book.id} />
      </dialog>
    </div>
  );
}
