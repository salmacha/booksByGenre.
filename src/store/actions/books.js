import { FETCH_BOOKS_BY_GENRE } from "../../constants/actionTypes.js"
import * as api from "../../api"

// Action Creators
export const getBooksByGenre = (genre) => async (dispatch) => {
  try {
    const { data } = await api.fetchBooksByGenre(genre)
    dispatch({ type: FETCH_BOOKS_BY_GENRE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
