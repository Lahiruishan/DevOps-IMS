import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api"); // Include backend URL with port
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBackendData();
  }, []);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
