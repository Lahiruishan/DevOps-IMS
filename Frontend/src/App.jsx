import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
   
      <Router>
        <Routes />
      </Router>
   
  );
}

export default App;
