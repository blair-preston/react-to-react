import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';

import App from './App';
import Ingredients from './routes/Ingredients';
import Wizards from './routes/Wizards';
import Houses from './routes/Houses';
import Elixirs from './routes/Elixirs';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="elixirs" element={<Elixirs />} />
        <Route path="houses" element={<Houses />} />
        <Route path="wizards" element={<Wizards />} />
        <Route path="ingredients" element={<Ingredients />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

