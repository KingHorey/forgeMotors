import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./navbar.tsx";
import "/src/assets/output.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
