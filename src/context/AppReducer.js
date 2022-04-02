export default (state, action) => {
  switch (action.type) {
    case "ADD_FILM_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      };
    case "REMOVE_FILM_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(film => film.id !== action.payload)
      };
    case "ADD_FILM_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(film => film.id !== action.payload.id),
        watched: [action.payload, ...state.watched]
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(film => film.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist]
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(film => film.id !== action.payload),
      };
    default:
      return state;
  }
}
