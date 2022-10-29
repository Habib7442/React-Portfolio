import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span>
        {stars >= index + 1 ? (
          <StarIcon />
        ) : stars >= number ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
    );
  });

  return <div className="stars">{ratingStar}</div>;
};

export default Stars;
