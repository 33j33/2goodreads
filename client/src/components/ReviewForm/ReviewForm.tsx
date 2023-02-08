import { useState } from "react";
import { addRating } from "../../store/book.slice";
import { useAppDispatch } from "../../store/store";
import { StarRating } from "../StarRating/StarRating";
import "./ReviewFrom.scss";

type ReviewFromProps = {
  handleDialog: (state: boolean) => void;
  bookId: string;
};

export function ReviewFrom({ handleDialog, bookId }: ReviewFromProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    setLoading(true);
    dispatch(addRating(rating, review, bookId))
      .then((res) => {
        handleDialog(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div className="add-review-wrap">
      <h3>Add Review</h3>
      <StarRating rating={rating} onRatingAdd={(rating) => setRating(rating)} />
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review"
      ></textarea>
      <div className="ctas">
        <button className="cancel" onClick={() => handleDialog(false)}>
          Cancel
        </button>
        <button className="submit" onClick={onSubmit}>
          {loading && <span className="g-loader"></span>}
          Submit
        </button>
      </div>
    </div>
  );
}
