/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies } from "./actions";

class MoviesList extends PureComponent {
  state = {
    movies: []
  };

  componentDidMount() {
    const oneHour = 60 * 60 * 1000;

    if (
      !this.props.isLoaded ||
      new Date() - new Date(this.props.moviesLoadedAt) > oneHour
    ) {
      this.props.getMovies();
    }
  }

  render() {
    if (!this.props.isLoaded) {
      return <p>Loading</p>;
    }

    return (
      <MovieGrid>
        {this.props.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
