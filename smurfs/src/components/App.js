import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import SmurfCard from "./SmurfCard";
import SmurfForm from "./SmurfForm";

const App = () => {
  const smurfs = useSelector(state => state.smurfs);

  return (
    <div>
      <SmurfForm />
      <div className="smurfCardDisplay">
        {smurfs.map(smurf => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

export default App;
