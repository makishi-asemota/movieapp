import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  moviePoster: {
    height: "13em",
    width: "13em",
  },

  movieContainer: {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "darkgrey",
  },

  button: {
    backgroundColor: "darkgrey",
    color: "black",
    borderRadius: "9999px",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
  },
}));
