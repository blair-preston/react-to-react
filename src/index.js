import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import './index.css';

import App from './App';
import Ingredients from './routes/Ingredients';
import Wizards from './routes/Wizards';
import Houses from './routes/Houses'; // added this line
import Elixirs from './routes/Elixirs'; // added this line
import Characters from './routes/Characters'; // 1. added characters 

const rootElement = document.getElementById("root"); // root element is in the index.html 
// Changed "app" to "root"

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="elixirs" element={<Elixirs />} />
        <Route path="houses" element={<Houses />} />
        <Route path="wizards" element={<Wizards />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="characters" element={<Characters />} /> 
        {/* 2. added characters route */}
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

