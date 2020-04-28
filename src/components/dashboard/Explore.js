import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import {
  getMoviesAction,
  setFilter,
  recommendationAction,
} from "../../store/actions/index.js";
// children components
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";

function Explore({
  isFetching,
  movies,
  userid,
  recommendationAction,
  getMoviesAction,
  searchTerm,
  setFilter,
  ratings,
}) {
  useEffect(() => {
    setFilter("");
    // Returns the movies
    getMoviesAction(userid);
    recommendationAction(userid);
  }, [getMoviesAction, userid, ratings, setFilter, recommendationAction]);
  // How many movies render
  const cardAmount = 25;

  if (isFetching) return <LoadingScreen />;
  else
    return (
      <div className="container explore" data-test={ifDev("ratings-component")}>
        <div className="movie-cards">
          {movies
            .filter((movie) =>
              !ratings.includes(
                (film) =>
                  film.primary_title === movie.primary_title &&
                  film.start_year === movie.start_year
              ).length && searchTerm !== ""
                ? movie.primary_title
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                : true
            )
            .slice(0, cardAmount)
            .map((movie, index) => {
              /* Checks if the film is in ratings */
              const isRated = (film) => {
                return (
                  film.primary_title === movie.primary_title &&
                  film.start_year === movie.start_year
                );
              };
              /* Returns the movie object if in ratings */
              let rated = ratings.find(isRated);
              let posterURI = movie.poster_url;
              let unsplashUrl =
                "https://source.unsplash.com/collection/1736993/500x650";
              let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

              return (
                <MovieCard
                  key={index}
                  name={movie.primary_title}
                  year={movie.start_year}
                  movie_id={movie.movie_id}
                  rated={rated ? rated.rating : null}
                  image={
                    !posterURI ||
                    posterURI === "None" ||
                    posterURI === "No poster" ||
                    posterURI === "No Poster" ||
                    posterURI === "Not in table"
                      ? unsplashUrl
                      : moviePoster
                  }
                />
              );
            })}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    isFetching: state.movie.isFetching,
    movies: state.movie.movies,
    moviesError: state.movie.error,
    searchTerm: state.filter.searchTerm,
    watchlist: state.watchlist.movies,
    ratings: state.rating.movies,
  };
};
export default connect(mapStateToProps, {
  getMoviesAction,
  recommendationAction,
  setFilter,
})(Explore);
