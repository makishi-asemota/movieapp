import React, {useState} from "react";
import useStyles from "../MovieDetails/styles"


const MovieList = ({movie,setmoviePopup, setModalData}) => {
    const classes = useStyles()
    const openModal = () => {
        setmoviePopup(true);
      };

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                    src={movie.i.imageUrl}
                    className="movieposter"
                    alt={movie.l}
                    ></img>
                    <h3>{movie.l}</h3>
                    <button onClick={() =>{openModal(); setModalData(movie)}}>More Info</button>
            </div>
        </>
        
    )
}

export default MovieList