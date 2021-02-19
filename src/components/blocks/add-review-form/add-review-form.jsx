import React, {useState} from "react";
import PropTypes from "prop-types";

const RATING = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RatingStarsItem = ({item}) => {
  return (
    <>
      <input className="rating__input" id={`star-${item}`} type="radio" name="rating" value={item}/>
      <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
    </>
  );
};

RatingStarsItem.propTypes = {item: PropTypes.number};


const RatingStars = () => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {RATING.map((item) => (<RatingStarsItem key={item} item={item}/>))}
      </div>
    </div>
  );
};

RatingStars.propTypes = {array: PropTypes.arrayOf(PropTypes.number)};

const AddReviewForm = () => {

  const [addReview, setReview] = useState(``);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setReview({...addReview, value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <RatingStars />

        <div className="add-review__text">
          <textarea onChange={handleFieldChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
