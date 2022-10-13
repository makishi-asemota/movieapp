import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Box, Modal } from "@material-ui/core";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import axios from "axios";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  const [movie, setMovies] = useState([]);
  const [moviePopup, setmoviePopup] = useState(false);

  const getMovieData = () => {
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/auto-complete",
      params: { q: "cars" },
      headers: {
        "X-RapidAPI-Key": "a947316714msh6764694cc039a95p1fb94bjsn4f6d955aaf2e",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.d);
        setMovies(response.data.d);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={2}
        flexDirection="row"
        style={{ marginTop: "3em" }}
      >
        <Grid
          item
          xs={4}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MovieList
            moviePopup={moviePopup}
            setmoviePopup={setmoviePopup}
            movie={movie}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
