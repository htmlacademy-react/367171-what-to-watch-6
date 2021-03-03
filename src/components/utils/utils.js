import moment from "moment";
import {COUNT_COL, ONE_HOUR} from "../constants/tabs";

export const getMovieRatingText = (rating) => {
  switch (true) {
    case rating <= 3:
      return `Bad`;
    case (rating > 3 && rating <= 5):
      return `Normal`;
    case (rating > 5 && rating <= 8):
      return `Good`;
    case (rating > 8 && rating < 10):
      return `Very good`;
    case (rating === 10):
      return `Awesome`;
    default:
      return `Empty data`;
  }
};

export const getRuntimeInHours = (runtime) => {
  const hours = Math.floor(runtime / ONE_HOUR);
  const minutes = runtime % ONE_HOUR;

  return [hours, minutes];
};

export const getStringFromArray = (array, sign) => {
  return array.join(`${sign} `);
};

export const getTwoArraysFromOne = (array) => {
  const lengthLeftCol = Math.round(array.length / COUNT_COL);

  const arrayLeft = array.slice(0, lengthLeftCol);
  const arrayRight = array.slice(lengthLeftCol, array.length);

  return [arrayLeft, arrayRight];
};

export const getStringRatingMovie = (rating) => rating.toString().replace(/\./g, `,`);

export const getCommentDate = (date) => moment(date).format(`MMMM DD, YYYY`);

export const getCommentDateTime = (date) => moment(date).format(`YYYY-MM-DD`);
