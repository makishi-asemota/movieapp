import React, {useState} from "react";
import useStyles from "../MovieList/styles"


const MovieList = ({movie, setmoviePopup, setModalData}) => {
    const classes = useStyles()
    const openModal = () => {
        setmoviePopup(true);
      };

    

    return (
        <>
            <div className={classes.movieContainer} style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                    src={movie.i.imageUrl}
                    className={classes.moviePoster}
                    alt={movie.l}
                    ></img>
                    <h3>{movie.l}</h3>
                    <button className={classes.button} onClick={() =>{openModal(); setModalData(movie)}}>More Info</button>
            </div>
        </>
        
    )
}

export default MovieList