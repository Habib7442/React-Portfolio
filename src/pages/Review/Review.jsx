import { useEffect } from "react";
import { useState } from "react";
import ReviewComponent from "../../components/ReviewComponent/ReviewComponent";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import "./Review.scss";
import Stars from "../../components/Stars/Stars";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = onSnapshot(
      collection(db, "reviews"),
      (snapshot) => {
        setReviews(snapshot.docs.map((doc) => doc.data()));
        return getReviews;
      },
      []
    );
  }, []);
  return (
    <div className="review flex-nowrap overflow-auto scrollbar">
      {reviews.slice(0,4).map((review) => (
        <>
          <ReviewComponent
            key={uuid()}
            review={review.review}
            name={review.name}
            stars={review.stars} 
            imgurl={review.imgurl}
          />
          {/* <Stars stars={review.stars} /> */}
        </>
      ))}
    </div>
  );
};

export default Review;
