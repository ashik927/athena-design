import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import "./App.css";
import Achievement from './Components/Achievement/Achievement';
import Banner from './Components/Banner/Banner';
import ChooseTeam from "./Components/ChooseTeam/ChooseTeam";
import Header from "./Components/Header/Header";
import Project from './Components/Project/Project';
import Service from './Components/Services/Service';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route>
                        <Header></Header>
                        <Banner></Banner>
                        <Service></Service>
                        <Project></Project>
                        <Achievement></Achievement>
                        <ChooseTeam></ChooseTeam>
                        
                        
                    </Route>
                    <Route>
                        
                    </Route>
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
