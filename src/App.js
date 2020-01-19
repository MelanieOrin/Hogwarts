import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Students from './Components/Students/Students';
import NewStudent from './Components/NewStudent/NewStudent';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Student from './Components/Student/Student'
import EditStudent from './Components/EditStudent/EditStudent'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
          <Route exact path='/' component={Home} />
          <Route exact path='/students' component={Students} />
          <Route exact path='/students/addnew' component={NewStudent} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path={`/students/sid:id`} component={Student}/>
          <Route exact path={`/students/sid/edit`} component={EditStudent}/>
      </Router>
    </div>
  );
}

export default App;
