import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from "./actions";

const initialState = {
  movies: [],
  moviesLoaded: false,
  moviesLoadedAt: null,
  movie: {},
  movieLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.data,
        moviesLoaded: true,
        moviesLoadedAt: new Date()
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.data,
        movieLoaded: true
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieLoaded: false
      };
    default:
      return state;
  }
}
