import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Ratings = ({rating}) => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        {[...Array(rating)].map(() => {
          return (
            <p className="text-(--primary-text) text-xl">
              <FaStar />
            </p>
          );
        })}
      </div>

      <div className="flex gap-2">
        {[...Array(5-parseInt(rating))].map(() => {
          return (
            <p className="text-(--primary-text) text-xl">
              <CiStar />
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;
