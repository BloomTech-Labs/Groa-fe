import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import { useHistory } from "react-router-dom";

// local imports
import "./_Dashboard.scss";
import MovieCard from "../movies/MovieCard.js";
// temp import to verify switch statement
import LoadingScreen from "../layout/LoadingScreen.js";

const Dashboardv1 = () => {
  let history = useHistory();
  const [input] = useState({ file: "" });
  const [ratings, setRatings] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  const changeHandler = e => {
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    // packages up form to make it able to send over https
    let data = new FormData();
    data.append("movies", e.target.files[0], e.target.files[0].name);

    // history.location.state.userid is just where I am holding userid for now from the Register page so I do not need to implment redux.
    axiosWithAuth()
      // this is insantiated when a file is added to input
      .post(`/${history.location.state.userid}/uploading`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        setTimeout(() => setRatings(res.data), 2000);
      })
      .catch(err => {
        console.log(err);
      });
    // clears out previous uploaded file
    data = new FormData();
  };

  useEffect(() => {
    if (!history?.location?.state?.userid) return () => null;
    axiosWithAuth()
      .get(`/${history.location.state.userid}/recommendations`)
      .then(res => {
        setRecommendations(res.data.recommendation_json);
      })
      .catch(err =>
        console.log("Something went wrong in fetching recommendations.", err)
      );
  }, [ratings, history]);

  switch (true) {
    case !history?.location?.state?.userid:
      return <LoadingScreen />;
    case !recommendations?.length:
      return (
        <div className="bigContainer" data-test="dashboard-screen">
          <div className="form-hover">
            {/* will create a component in the future*/}
            <form id="zip-form">
              <input
                id="zip-input"
                className="movie-input"
                type="file"
                placeholder="letterbox csv file here"
                name="movies"
                value={input.movieName}
                onChange={changeHandler}
              />
            </form>
            <p className="form-directions">
              upload your letterboxd csv file here to get all past movie ratings
            </p>
          </div>
        </div>
      );
    default:
      return (
        <div className="bigContainer" data-test="dashboard-screen">
          <div className="form-hover">
            <form id="zip-form">
              <input
                id="zip-input"
                className="movie-input"
                type="file"
                placeholder="letterbox csv file here"
                name="movies" // name of file / name of obj?  used in key field for postman to upload a file too
                value={input.movieName} // im not sure why this works but it does.  // document this portion out as well
                onChange={changeHandler}
              />
            </form>
            {Object.keys(ratings).length === 0 ? (
              <p className="form-directions">
                upload your letterboxd csv file here to get all past movie
                ratings
              </p>
            ) : (
              <p className="upload-successful">
                <strong>{ratings.message}</strong>
              </p>
            )}
          </div>

          {/* this shows the recommendations movie cards */}
          <h2>Your Recommendations</h2>
          <div data-test="box-container" className="box-container">
            {/* should off set up to 200 and then retun nothing */}
            {recommendations.map((x, index) =>
              index < 201 ? (
                <MovieCard
                  key={index}
                  name={x.Title}
                  year={x.Year}
                  rating={x["Average Rating"]}
                  image="https://source.unsplash.com/collection/2047031/500x500"
                />
              ) : null
            )}
          </div>
        </div>
      );
  }
};

export default Dashboardv1;