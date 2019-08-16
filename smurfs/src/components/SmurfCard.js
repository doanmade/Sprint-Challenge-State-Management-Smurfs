import React from "react";

const SmurfCard = ({ smurf }) => {
  return (
    <div className="smurfCard">
      <h3>{smurf.name}</h3>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      {/* <button onClick={deleteSmurf}>X</button> */}
    </div>
  );
};
// const deleteSmurf = () => {
//   dispatch({ type: "REMOVE_SMURFS_SUCCESS" });
// };
export default SmurfCard;
