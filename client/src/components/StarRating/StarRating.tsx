import React from "react";
import "./StarRating.scss";
export function StarRating({
  onRatingAdd,
  rating,
}: {
  onRatingAdd: (rating: number) => void;
  rating: number;
}) {
  const isSelected = (curr: number) => (curr <= rating ? "selected" : "");
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rating = (e.target as HTMLSpanElement).dataset.value;
    if (rating) onRatingAdd(parseInt(rating));
  };
  return (
    <div className="star-rating" onClick={handleClick}>
      <span data-value="5" className={`${isSelected(5)}`}>
        &#9733;
      </span>
      <span data-value="4" className={`${isSelected(4)}`}>
        &#9733;
      </span>
      <span data-value="3" className={`${isSelected(3)}`}>
        &#9733;
      </span>
      <span data-value="2" className={`${isSelected(2)}`}>
        &#9733;
      </span>
      <span data-value="1" className={`${isSelected(1)}`}>
        &#9733;
      </span>
    </div>
  );
}
