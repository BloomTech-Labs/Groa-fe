import React, {useState, useEffect} from "react";
import Stars from "@material-ui/lab/Rating";
// more fields will be appearing according to the Figma file
export default function MovieCard2({ name, year, image, genres, runtime, avgRating, ratingAction, userid}) {
  const [value2, setValue] = useState(0);
 
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
          value={value2 ? value2  : avgRating/2.0}
          onChange={(event, newValue) => {
            setValue(newValue);
            ratingAction(userid, newValue)
          }}
        />
      </div>
    </div>
  );
}
