import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { recommendationAction } from "../../store/actions/index.js";
import "./_Dashboard.scss";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";

function Recommendations({ recommendations,  userid, recommendationAction }) {
  useEffect(() => {
    recommendationAction(userid)
  }, [userid, recommendationAction]);

  if (recommendations.length === 0)
    return <LoadingScreen />;
  else
  return (
    <div
      className="container recommendations"
      data-test={ifDev("recommendations-component")}
    >
      <h2>Your recommendations</h2>
      <div className="movie-cards">
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

const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    recommendations: state.recommendations.movies,
    recommendationsError: state.recommendations.error
  };
};
export default connect(mapStateToProps, { recommendationAction })(Recommendations);