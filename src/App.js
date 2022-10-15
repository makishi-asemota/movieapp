import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Modal } from "@material-ui/core";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import FavoritesList from "./components/FavoritesLIst/FavoritesLIst";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  const [movie, setMovies] = useState([]);
  const [moviePopup, setmoviePopup] = useState(false);
  const [modalData, setModalData] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [fullSearchValue, setFullSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  //close modal function
  const closeModal = () => {
    setmoviePopup(false);
  };

  //fetch data from API
  const fetchData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a947316714msh6764694cc039a95p1fb94bjsn4f6d955aaf2e",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${searchValue}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.d);
        //set api data to movie data list
        setMovies(data.d);
      })
      .catch((err) => console.error(err));
  };

  //reload page only when full search value is entered
  useEffect(() => {
    fetchData();
  }, [fullSearchValue]);

  return (
    <>
      <CssBaseline />
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setFullSearchValue={setFullSearchValue}
      />
      <Grid
        container
        spacing={3}
        style={{ marginTop: "3em", justifyContent: "center" }}
      >
        {movie.length > 0 ? (
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
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </Grid>
          ))
        ) : (
          <h1>Enter a Movie!</h1>
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
      <h1 style={{ textAlign: "center", marginTop: "2em" }}>Watch Later</h1>
      {favorites.length > 0 ? (
        <Grid container spacing={3}>
          <FavoritesList favorites={favorites} setFavorites={setFavorites} />
        </Grid>
      ) : (
        <h3 style={{ textAlign: "center" }}>Nothing to see here yet</h3>
      )}
    </>
  );
};

export default App;
