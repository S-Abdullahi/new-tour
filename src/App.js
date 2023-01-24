import React, { useState, useEffect } from "react";
import Tile from "./component/Card";
import { Grid } from "@mui/material";
import "./index.css";

function App() {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    const url = "http://course-api.com/react-tours-project";
    try {
      async function tourdata() {
        const res = await fetch(url);
        const data = await res.json();
        setTour(data);
      }
      tourdata();
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  function deleteTour(e){
      const element = e.target
      console.log(element)
  }

  const eachTour = tour.map((t) => {
    return <Tile key={t.id} item={t} delete={deleteTour}/>;
  });

  return (
    <div className="app-con">
    <h2 className="title">Tour</h2>
      <div className="tour-display">{eachTour}
      </div>
    </div> 
  );
}

export default App;
