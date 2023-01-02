import './App.css';
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <News />
            <Route exact path="/" element={<News />}/>
            <Route exact path="/general" element={<News category="general"/>}/>
            <Route exact path="/business" element={<News category="business"/>}/>
            <Route exact path="/sports" element={<News category="sports"/>}/>
            <Route exact path="/entertainment" element={<News category="entertainment"/>}/>
            <Route exact path="/science" element={<News category="science"/>}/>
            <Route exact path="/health" element={<News category="health"/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}

