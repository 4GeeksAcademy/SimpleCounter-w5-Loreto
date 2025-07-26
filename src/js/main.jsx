import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'



//component
import SecondsCounter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.querySelector("#root"));

//let counter = 0;
let counter = 0
setInterval(() => {
    root.render(<SecondsCounter seconds={counter} />);
    counter++;
}, 1000);


