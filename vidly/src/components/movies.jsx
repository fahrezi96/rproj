import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    let movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies });
  };

  render() {
    let { movies } = this.state;
    return (
      <>
        <p className="mb-2 mt-2">
          {movies.length === 0
            ? 'There are no movies in the database'
            : `Showing ${movies.length} movies in the database`}
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.length === 0 && (
              <tr>
                <th colSpan={5}>There are no movies in the database</th>
              </tr>
            )}
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
