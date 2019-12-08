import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';

//Contexts
import { ProjectsContext } from './contexts/ProjectsContexts';

// Components
import ProjectList from './components/projects/ProjectList';
import EditForm from './components/forms/EditForm';

function App() {

  const [projects, setProjects] = useState([]);

  // Fetch projects
  useEffect(() => {
    axios.get(`http://localhost:4000/projects`)
      .then(res => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div className="App">
      <div className="container">
        <h1>Project Tracker</h1>
        <ProjectsContext.Provider value={projects}>
          <Route exact path="/" component={ProjectList}/>
          {/* <Route path="/edit-project/:id" component={EditForm} /> */}
        </ProjectsContext.Provider>
      </div>
    </div>
  );
}

export default App;
