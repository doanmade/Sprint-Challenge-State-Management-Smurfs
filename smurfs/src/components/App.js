import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import SmurfCard from "./SmurfCard";
import SmurfForm from "./SmurfForm";

const App = () => {
  const smurfs = useSelector(state => state.smurfs);
  const error = useSelector(state => state.error);

  return (
    <div>
      <SmurfForm />

      {error !== "" ? <h2>{error}</h2> : ""}

      {smurfs.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

export default App;
