import React from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { ratingAction } from "../../store/actions/index.js";

// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard2 from "../movies/MovieCard2.js";

function Filter({
  userid,
  searchTerm,
  searchArray,
  isFetchingFilter,
  ratingAction,
  response
}) {
  
  if (isFetchingFilter === true) return <LoadingScreen />;
  else
    return (
      <div
        className="container recommendations"
        data-test={ifDev("recommendations-component")}
      >
        
        {console.log('response add rating', response)}
        <div className="movie-cards">
        {searchArray.length > 0 ? searchArray.filter(post =>
        searchTerm !== '' ?  post.Title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()) : true).map((x, index) =>{
            let posterURI = x.Poster;
            let unsplashUrl =
              "https://source.unsplash.com/collection/1736993/500x650";
            let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

            return (
              <MovieCard2
                key={index}
                name={x.Title}
                year={x.Year}
                genres={x.Genres}
                runtime={x.Runtime}
                avgRating = {x.Average_Rating}
                userid = {userid}
                ratingAction = {ratingAction}
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
          }) : false}
        </div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    isFetching: state.recommendations.isFetching,
    recommendations: state.recommendations.movies,
    recommendationsError: state.recommendations.error,
    isUploading: state.upload.isUploading,
    searchTerm: state.filter.searchTerm,
    searchArray: state.filter.searchArray,
    isFetchingFilter: state.filter.isFetchingFilter,
    response: state.rating.response
  };
};
export default connect(mapStateToProps, { ratingAction })(
  Filter
);
