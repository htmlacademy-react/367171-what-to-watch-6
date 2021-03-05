export const changeFilter = (evt) => {

  return ({type: `CHANGE_FILTER`, payload: evt.target.id})
};
