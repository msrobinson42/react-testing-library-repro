import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MyTable } from "./MyTable";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyTable />
  </React.StrictMode>
);
