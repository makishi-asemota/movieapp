import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";

import { getMovieData } from "./api";

const App = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    getMovieData(movie).then((response) => {
      console.log(response);
      setMovies(response);
    });
  }, [movie]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </>
  );
};

export default App;
