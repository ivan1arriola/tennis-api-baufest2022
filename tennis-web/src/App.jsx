import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "../src/assets/css/app.css";

/* Container/Pages */
import About from '../src/container/About'
import Jugador from "./container/Jugador";
import Partido from "./container/Partido";
import Home from "./container/Home";

/* Components */
import Wrapper from "./components/Wrapper"
import NoFound from "./container/NoFound";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component = {Home} />
                        <Route exact path="/jugador" component = {Jugador} />
                        <Route exact path="/partido" component = {Partido} />
                        <Route exact path="/about" component = {About} />
                        <Route component = {NoFound}/>
                        

                    </Switch>
                </Wrapper>
            
            </BrowserRouter>
        </>
    )
}

export default App;