import { StarRating } from "../StarRating/StarRating";
import "./ReviewFrom.scss";

type ReviewFromProps = {
  handleDialog: (state: boolean) => void;
};

export function ReviewFrom({ handleDialog }: ReviewFromProps) {
  return (
    <div className="add-review-wrap">
      <h3>Add Review</h3>
      <StarRating />
      <textarea placeholder="Write your review"></textarea>
      <div className="ctas">
        <button className="cancel" onClick={() => handleDialog(false)}>
          Cancel
        </button>
        <button className="submit" onClick={() => handleDialog(false)}>
          Submit
        </button>
      </div>
    </div>
  );
}
