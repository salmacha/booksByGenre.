import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import Books from "../Books/Books"

import { getBooksByGenre } from "../../store/actions/books"
import { useDispatch } from "react-redux"

import ReadBook from "../../images/readBookIllustration.jpg"

import "./searchBook.css"

const genres = [
  { value: "romance", label: "Romance" },
  { value: "fiction", label: "Fiction" },
  { value: "sciencemathematics", label: "Science & Mathématiques" },
  { value: "business", label: "Business" },
  { value: "juvenile_fiction", label: "Juvenile fiction" },
  { value: "history", label: "History" },
  { value: "biography", label: "Biography " },
  { value: "textbooks", label: "Textbooks " }
]

const SearchBook = () => {
  const [genre, setGenre] = useState("")
  const [search, setSearch] = useState(false)
  const dispatch = useDispatch()

  const fetchBooksByGenre = async (genre) => {
    if (genre !== "") {
      dispatch(getBooksByGenre(genre))
    }
  }

  return (
    <div>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>

          <div className="a-card">
            <img src={ReadBook} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">The Best Books</h1>
          <p className="a-sub">We'll get you a book of your chosen genre.</p>
          <div className="a-search">
            <div className="a-select-search">
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%"
                }}
              >
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Genres"
                  value={genre}
                  onChange={(e) => {
                    setGenre(e.target.value)
                  }}
                  helperText="Please select your preferred genre"
                  size="medium"
                >
                  {genres.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>{" "}
              </Box>
            </div>
            <div className="a-button-search">
              <button
                className="a-button"
                onClick={() => {
                  fetchBooksByGenre(genre)
                  setSearch(true)
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <Grid item xs={10} sm={3}>
        <Books search={search} />
      </Grid>
    </div>
  )
}

export default SearchBook
