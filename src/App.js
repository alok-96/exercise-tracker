import React from 'react';
import './App.css'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
      <Routes>
      < Route path="/" exact Component={ExercisesList} />
      < Route path="/edit/:id"  Component={EditExercise} />
      < Route path="/create"  Component={CreateExercise} />
      < Route path="/user"  Component={CreateUser} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
