import React from "react";
import  ReactDOM  from "react-dom/client";


const header = React.createElement("h1", { id:"header" }, "header1 from parcel");

const header2 = React.createElement("h1", { id:"header" }, "header2");
    
const container = React.createElement("div", {id:"division"}, [header, header2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
