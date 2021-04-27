import React from "react";
import PropTypes from "prop-types";
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import { SyncLoader } from 'react-spinners';

function MoviesList({ propsMovies,deleteMovie}) {
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = (
    <div>
      {propsMovies.error.response ? (
        <h3>Error data!</h3>
      ) : (
        <Grid columns={3}>
          <Grid.Row>
            {propsMovies.movieList.map((movie) => (
              <Grid.Column key={movie.id}>
                <MovieCard deleteMovie={deleteMovie} propsMovie={movie} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )}
    </div>
  );
  console.log(propsMovies);
  return (
    <div>
      <SyncLoader color={'#00b5ad'} loading={propsMovies.fetching} />
      <br />

      {propsMovies.movieList.length === 0 ? emptyMessage : moviesList}
    </div>
  );
}
MoviesList.propsTypes = {
  propsMovies: PropTypes.shape({
    movies: PropTypes.array.isRequired,
  }).isRequired,
};
export default MoviesList;