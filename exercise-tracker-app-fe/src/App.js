import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import CreateExercise from './components/createExercise.component';
import CreateUser from './components/createUser.component';
import ExerciseList from './components/exerciseList.component';
import EditExercise from './components/editExercise.component';
function App() {
  return (
    <div className="container">
      <Router>
      <Navbar></Navbar>
      <Route path="/" exact component={ExerciseList}></Route>
      <Route path="/create-exercise-log" component={CreateExercise}></Route>
      <Route path="/create-user" component={CreateUser}></Route>
      <Route path="/edit-exercise/:id" component={EditExercise}></Route>
      </Router>
    </div>
  );
}

export default App;
