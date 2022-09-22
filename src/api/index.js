import axios from "axios"

const API = axios.create({ baseURL: "https://openlibrary.org" })

export const fetchBooksByGenre = (genre) => API.get(`/subjects/${genre}.json`)
