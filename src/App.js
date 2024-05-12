import {Routes, Route} from "react-router-dom";
import React from 'react';
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Team from "./component/Team";
import Donate from "./component/Donate";
import Stats from "./component/Stats";
import NoPage from "./component/NoPage";
import Login from "./component/login";

function App() {
  return (
    <>
    <Navbar />
    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/donate" element={ <Donate /> } />
      <Route path="/stats" element={ <Stats /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="*" element={ <NoPage /> } />
    </Routes>
    </>
  ); }
export default App;
