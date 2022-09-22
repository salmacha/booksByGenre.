import { FETCH_BOOKS_BY_GENRE } from "../../constants/actionTypes.js"

export default (books = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKS_BY_GENRE:
      return action.payload

    default:
      return books
  }
}
