import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CircularProgress from "@mui/material/CircularProgress"
import { useSelector } from "react-redux"

import Book from "./Book/Book"
import "./books.css"

const Books = ({ search }) => {
  const books = useSelector((state) => state.books)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    if (search) {
      setDataLoaded(true)
    }
  }, [search])

  return (
    <div>
      {Object.keys(books).length === 0 && dataLoaded ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "-5rem" }}
        >
          <CircularProgress />
        </Box>
      ) : null}

      {Object.keys(books).length !== 0 ? (
        <div>
          <h1 className="a-genre-title">Look at the result :</h1>
          <Grid
            className="container"
            container
            alignItems="stretch"
            spacing={3}
          >
            {books.works &&
              books.works.map((book) => (
                <Grid key={book.key} item xs={10} sm={2.5} md={2.5}>
                  <Book book={book} />
                </Grid>
              ))}
          </Grid>
        </div>
      ) : null}
    </div>
  )
}

export default Books
