import logo from './logo.svg';
import './App.css';
import Home  from './pages/Home';
import Nav from './pages/Nav';
import NewRelase from './pages/NewRelase';
import Movies_details from './pages/Movies_details';
import { moviecontext } from "./context/moviecontext"
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import { useState } from 'react';

function App() {
  const [moviesContext,setmoviesContext]=useState("en")
  return (
    // <div dir={moviesContext === "ar" ? "rtl" : "ltr"} className={moviecontext === "ar" ? "text-right" : "text-left"}>
    <moviecontext.Provider value={{moviesContext,setmoviesContext}} >
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/NewRelase"} component={NewRelase} />
        <Route exact path={"/Movies_details/:id"} component={Movies_details} />
      </Switch>
    </BrowserRouter>
    </moviecontext.Provider>
    // </div>
  );
}

export default App;
