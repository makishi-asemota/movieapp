import React, {useState} from "react";
import { Modal, Box, Typography } from "@material-ui/core";
import useStyles from "./styles"

const MovieList = ({movie, moviePopup, setmoviePopup}) => {

    const classes = useStyles()
    const [modalData, setModalData] = useState(null)
    
    const openModal = () => {
        setmoviePopup(true);
      };

      const closeModal = () => {
        setmoviePopup(false);
      };
    
    return (
        <>
            <div>
                {movie.map((movie, idx) => {
                    return (
                    <div key={movie.id}>
                        <img
                        src={movie.i.imageUrl}
                        className="movieposter"
                        alt={movie.l}
                        ></img>
                        <h3>{movie.l}</h3>
                        <button onClick={() =>{openModal(); setModalData(movie)}}>More Info</button>
                    </div>
                    );   
                })}
            </div> 
        <Modal open={moviePopup} onClose={closeModal} aria-labelledby="modal-modla-title" aria-describedby="modal-modal-description">
            <Box className={classes.style}>
                <Typography variant="h4">
                    This is the movie: {modalData.l}
                </Typography>
            </Box>
        </Modal>
        </>
        
    )
}

export default MovieList