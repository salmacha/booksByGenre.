import React from "react"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"

import useStyles from "./styles"

const Book = ({ book }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
        title={book.title}
      />
      <Typography className={classes.title} variant="h5" gutterBottom>
        - Title: {book.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          - Author: {book.authors[0].name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          - Edition count: {book.edition_count}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          className={classes.buyButton}
          size="small"
          color="primary"
          onClick={() => console.log("salmaaa")}
        >
          buy it ♥ !
        </Button>
      </CardActions>
    </Card>
  )
}

export default Book
