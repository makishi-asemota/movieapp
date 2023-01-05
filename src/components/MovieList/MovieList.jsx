import React from "react";
import useStyles from "../MovieList/styles"



const MovieList = ({movie, setmoviePopup, setModalData, favorites, setFavorites}) => {
    const classes = useStyles()

    //function to open modal
    const openModal = () => {
        setmoviePopup(true);
      };

    //Add movies to favorites list upon button click
    function addFavoriteMovie(movie)  {
        const newFavoriteList = [...favorites, movie];
        setFavorites(newFavoriteList)
        console.log(favorites)
    }

    return (
        <>
            <div className={classes.movieContainer} style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                    src={movie.i.imageUrl}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="./brokenError.png";
                      }}
                    className={classes.moviePoster}
                    alt={movie.l}
                    ></img>
                    <h3>{movie.l}</h3>
                    <div>
                        <button className={classes.button} onClick={() =>{openModal(); setModalData(movie)}}>More Info</button>
                        <button className={classes.button} onClick={() => {addFavoriteMovie(movie)}}>Add to Favorites</button>
                    </div>
                    
            </div>
        </>
        
    )
}

export default MovieList