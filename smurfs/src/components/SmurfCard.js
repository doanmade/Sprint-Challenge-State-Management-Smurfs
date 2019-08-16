import React from "react";

const SmurfCard = ({ smurf }) => {
  return (
    <div className="smurfCard">
      <h3>{smurf.name}</h3>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button>X</button>
    </div>
  );
};

export default SmurfCard;
