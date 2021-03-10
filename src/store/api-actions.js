import {loadMovies, requireAuthorization} from "./actions";
import {AuthorizationStatus} from "../components/constants/auth";
import {APIRoute} from "../components/constants/routes";
import {transformMovie} from "../components/utils/utils";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
