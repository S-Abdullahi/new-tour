import React, { useState, useEffect } from "react";
import Tile from "./component/Card";
import Loading from "./component/Loading";
import { Grid } from "@mui/material";
import "./index.css";

function App() {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchTour() {
    setLoading(true);
    const url = "http://course-api.com/react-tours-project";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setTour(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    fetchTour();
  }, []);

  function deleteTour(id) {
    const newTour = tour.filter((t) => t.id !== id);
    setTour(newTour);
  }

  const eachTour = tour.map((t) => {
    return <Tile key={t.id} item={t} delete={deleteTour} />;
  });


  if (loading) {
    return (
      <div className="app-con">
        <h2 className="title">Tour</h2>
        <div className="tour-display"><Loading/></div>
      </div>
    );
  }
  
  if (tour.length === 0) {
    return (
      <>
        <div className="app-con">
          <h2 className="title">Tour</h2>
          {/* <Loading/> */}
          <div className="tour-refresh">No more tours. kindly refresh</div>
          <button className="btn-refresh" onClick={fetchTour}>
            {" "}
            refresh
          </button>
        </div>
      </>
    );
  }

 

  return (
    <div className="app-con">
      <h2 className="title">Tour</h2>
      <div className="tour-display">{eachTour}</div>
    </div>
  );
}

export default App;
