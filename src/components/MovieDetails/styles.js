import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "white",
    borderRadius: "20px",
    padding: "10px",
  },

  image: {
    height: "150px",
    width: "125px",
  },
}));
