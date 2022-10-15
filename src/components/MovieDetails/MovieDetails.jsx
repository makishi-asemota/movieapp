import React from "react";
import { CssBaseline, Grid, Modal, Box, Typography } from "@material-ui/core";
import useStyles from "../MovieDetails/styles"

const MovieDetails = ({modalData}) => {
    const classes = useStyles()
    return (
        <Box className={classes.style}>
            <img src={modalData.i.imageUrl} alt="moviePoster" className={classes.image}></img>
            <Typography variant="h4">
              Movie: {modalData.l}
            </Typography>
            <Typography>
                Release date: {modalData.y}
            </Typography>
            <Typography>
                Featured Actors: {modalData.s}
            </Typography>
        </Box>
    )
    
}

export default MovieDetails