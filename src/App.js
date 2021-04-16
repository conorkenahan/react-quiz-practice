import './App.css';
import React from 'react';
import Home from "./components/Home/Home.js"
import Nav from "./components/Nav/Nav.js"
import RenderQuestions from "./components/RenderQuestions/RenderQuestions.js"
import { Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Route path= "/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route path="/question" component={RenderQuestions}/>
    </div>
  );
}

export default App;
