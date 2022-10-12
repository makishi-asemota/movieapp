import React from "react";
import api from '../../api'

const MovieList = ({movie}) => {

    return (
        <>
          {movie ? (
            movie.map((movie, idx) => {
              return (
                <div className="movieName" key={idx}>
                  <img></img>
                  <h3>{movie.l}</h3>
                </div>
              );
            })
          ) : (
            <h3>No data yet</h3>
          )}
        </>
      );
}

export default MovieList