import React, {useState, useEffect} from "react";
import Stars from "@material-ui/lab/Rating";
// more fields will be appearing according to the Figma file
export default function FilterCard({ name, year, image, genres, runtime, avgRating, ratingAction, userid}) {
  const [rating, setRating] = useState(0);

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
 
  // useEffect(() => { 
  //   ratingAction(userid, value2)
  // },[avgRating])

  return (
    <div data-test="box" className="box">
      <img src={image} alt="Random Movie poster as a placeholder." />
      <div className="text-container">
        <h3>{name}</h3>
        <p>{year}</p>
        <p>{genres.split(',').join(" ")}</p>
        <p>{Number(runtime)} min.</p>
        <Stars data-test="star"
        precision={0.5}
          name={name}
          value={rating ? rating  : avgRating/2.0}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
