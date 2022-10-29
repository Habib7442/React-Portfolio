import "./AllReviews.scss"
import Review from "../Review/Review";

const AllReviews = () => {
  return (
    <div
      className="allReviews container-fluid d-flex flex-wrap bg-dark">
      <Review />
    </div>
  );
};

export default AllReviews;
