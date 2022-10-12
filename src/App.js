import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import getMovieData from "./api";

const App = () => {
  const [movie, setMovies] = useState([]);

  // const getMovieData = () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://online-movie-database.p.rapidapi.com/auto-complete",
  //     params: { q: "cars" },
  //     headers: {
  //       "X-RapidAPI-Key": "a947316714msh6764694cc039a95p1fb94bjsn4f6d955aaf2e",
  //       "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data.d);
  //       setMovies(response.data.d);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  useEffect(() => {
    getMovieData(movie).then((data) => {
      console.log(data);
      setMovies(data);
    });
  }, [movie]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <MovieList movie={movie} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
