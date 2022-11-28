import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import DigitalClock from './components/DigitalClock'
import User from './User/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return <React.Fragment>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/user" component={User} />
                <Route path="/digital" component={DigitalClock} />
            </Switch>
        </Router>
    </React.Fragment>
}

export default App
