import { makeStyles } from "@mui/styles"

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken"
  },
  border: {
    border: "solid"
  },
  fullHeightCard: {
    height: "100%"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    boxShadow:
      "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white"
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white"
  },
  grid: {
    display: "flex"
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px"
  },
  title: {
    padding: "0 16px",
    fontSize: "1.2rem !important",
    marginTop: "0.5rem !important"
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "center"
  },
  buyButton: {
    backgroundColor: "#b48b8b",
    color: "black",
    fontSize: "medium",
    width: "100px",
    height: "30px",
    borderRadius: "20px",
    border: "none",
    marginBottom: "0.5rem"
  }
})
