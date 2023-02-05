import React from "react";
import "./StarRating.scss";
export function StarRating() {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log((e.target as HTMLSpanElement).dataset.value);
  };

  return (
    <div className="star-rating" onClick={handleClick}>
      <span data-value="5">&#9733;</span>
      <span data-value="4">&#9733;</span>
      <span data-value="3">&#9733;</span>
      <span data-value="2">&#9733;</span>
      <span data-value="1" className="selected">
        &#9733;
      </span>
    </div>
  );
}
