import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  style: {
    display: "flex",
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
  },
}));
