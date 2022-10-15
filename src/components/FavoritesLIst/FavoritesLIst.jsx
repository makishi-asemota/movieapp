import React from "react";
import {Grid} from "@material-ui/core";
import useStyles from "./styles"

const FavoritesList = ({favorites, setFavorites}) => {
    const classes = useStyles()

    // filter thorugh favorites list to remove movie
    function removeFavoriteMovie(fav) {
        const newFavoriteList = favorites.filter((favorite) => favorite.id !== fav.id)
        setFavorites(newFavoriteList)
    }

    return(
        <>
            {favorites.map(fav => (
                <Grid item xs={4}
                md={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"}}>
                    <div className={classes.movieContainer} style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={fav.i.imageUrl} alt="watch-later" className={classes.moviePoster}></img>
                        <p>{fav.l}</p>
                        <button onClick={() => {removeFavoriteMovie(fav)}} className={classes.button}>Remove</button>
                    </div>
                </Grid>
                
            ))}
        </>
    )
        
        
}

export default FavoritesList