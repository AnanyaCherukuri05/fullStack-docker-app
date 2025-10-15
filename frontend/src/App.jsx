import React, { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("");
  const [dbCheck, setDbCheck] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setBackendMessage(data))
      .catch((err) => setBackendMessage("Error connecting to backend"));

    fetch("http://localhost:5000/api/db-check")
      .then((res) => res.json())
      .then((data) => setDbCheck(JSON.stringify(data)))
      .catch((err) => setDbCheck("Error checking DB"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Frontend Running 🎨</h1>
      <p>Backend says: {backendMessage}</p>
      <p>DB Status: {dbCheck}</p>
    </div>
  );
}

export default App;
