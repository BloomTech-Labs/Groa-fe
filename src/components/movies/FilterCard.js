import React, {useState} from "react";
import { connect } from "react-redux";
import Stars from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { addToWatchlistAction, removeFromWatchlistAction } from "../../store/actions";
// more fields will be appearing according to the Figma file
function FilterCard({ name, year, image, genres, runtime, avgRating, ratingAction,watchlist, addToWatchlistAction, removeFromWatchlistAction, userid}) {
  const [rating, setRating] = useState(0);

  const [added, setAdded] = useState(false)
  /* This checks if the movie is in the watchlist */
  const inWatchlist = watchlist.some(movie => movie.name === name && movie.year === year)
  /* Used to format the movie object for action calls */
  let movie = {
    name: name,
    year: year,
  }

  const handleClick = () => {
    /* Adds movie to the POST request */
      addToWatchlistAction(userid, movie)
      setAdded(true)
  }

  let newRating = {
    name: name,
    year: year,
    rating: rating,
  }

  const handleChange = (event, newValue) => {
    /* Sets rating for the star value */
    setRating(newValue);
    /* Sets rating for the POST request */
    newRating = {
      ...newRating, rating: newValue
    }
    ratingAction(userid, newRating)
  }
 
  

  return (
    <div data-test="box" className="box">
      <div className="top-content">
        <img src={image} alt="Random Movie poster as a placeholder." />
        <div className="text-container">
          <h3>{name}</h3>
          <p>{year}</p>
          <p>{genres.split(',').join(" ")}</p>
          <p>{Number(runtime)} min.</p>
        </div>
      </div>
        <div className="action-panel">
          <button 
            className="watchlist-button"
            onClick={handleClick}
            disabled={ added || inWatchlist ? true : false }
          >
          { !added && !inWatchlist ? "Add to watchlist" : "In your watchlist" }
        </button>
        <Stars 
          className="stars"
          data-test="star"
          precision={0.5}
          size="large"
          emptyIcon={
            <StarBorderIcon 
              fontSize="inherit" 
              style={{color:"#ffb400"}} 
            />
          }
          name={name}
          value={rating ? rating  : avgRating/2.0}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    ratingError: state.rating.error,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error
  };
};
export default connect(mapStateToProps, { addToWatchlistAction, removeFromWatchlistAction })(FilterCard);
