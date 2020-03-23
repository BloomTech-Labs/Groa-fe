import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { recommendationAction } from "../../store/actions/index.js";

// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard2 from "../movies/MovieCard2.js";

function Filter({
  isFetching,
  recommendations,
  userid,
  recommendationAction,
  isUploading,
  searchTerm,
  searchArray
}) {
  useEffect(() => {
    recommendationAction(userid);
  }, [userid, recommendationAction, isUploading]);
  
  if (isFetching) return <LoadingScreen />;
  else
    return (
      <div
        className="container recommendations"
        data-test={ifDev("recommendations-component")}
      >
        
        {console.log('searchTerm', searchTerm)}
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
        {/* <div className="movie-cards">
          {recommendations.map((x, index) => {
            let posterURI = x["Poster URL"];
            let unsplashUrl =
              "https://source.unsplash.com/collection/1736993/500x650";
            let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

            return (
              <MovieCard
                key={index}
                name={x.Title}
                year={x.Year}
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
        </div> */}
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
    searchArray: state.filter.searchArray
  };
};
export default connect(mapStateToProps, { recommendationAction })(
  Filter
);
