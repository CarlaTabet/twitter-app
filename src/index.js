import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/Profile" element ={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>

  ,document.getElementById("root")
);