import "./Review.scss";

type ReviewProps = {
  rating: number;
  review: string;
};

export function Review({ review, rating }: ReviewProps) {
  return (
    <div className="review-wrap">
      <img
        className="reviewer"
        src={`https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * (70 - 1) + 1
        )}`}
        alt="reviewer"
      />
      <div className="col-right">
        <div className="review-heading">
          <span
            className="g-book-star-rating"
            style={{ "--rating": rating } as React.CSSProperties}
          ></span>
        </div>
        <div className="review-description">{review}</div>
      </div>
    </div>
  );
}
