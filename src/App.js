import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Modal, Box, Typography } from "@material-ui/core";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import axios from "axios";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  const [movie, setMovies] = useState([]);
  const [moviePopup, setmoviePopup] = useState(false);
  const [modalData, setModalData] = useState("");
  const [searchValue, setSearchValue] = useState("cars");

  const closeModal = () => {
    setmoviePopup(false);
  };

  const getMovieData = () => {
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/auto-complete",
      params: { q: { searchValue } },
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
    getMovieData(searchValue);
  }, [searchValue]);

  return (
    <>
      <CssBaseline />
      <Header
        movie={movie}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Grid
        container
        spacing={3}
        style={{ marginTop: "3em", justifyContent: "center" }}
      >
        {movie ? (
          movie.map((movie, idx) => (
            <Grid
              item
              xs={4}
              md={4}
              key={idx}
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
                setModalData={setModalData}
              />
            </Grid>
          ))
        ) : (
          <div>Enter a Movie!</div>
        )}
        <Modal
          open={moviePopup}
          onClose={closeModal}
          aria-labelledby="modal-modla-title"
          aria-describedby="modal-modal-description"
        >
          <MovieDetails modalData={modalData} />
        </Modal>
      </Grid>
    </>
  );
};

export default App;
