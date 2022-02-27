import './App.css';
import React,{Component} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/Roboto/Roboto-Regular.ttf';

import Index from './components/Index';
import Nosotros  from './components/Nosotros';

class App extends Component{
  render(){
    return(
      <Router>
      <Routes>
        <Route path="/designlab-react/nosotros" element={<Nosotros></Nosotros>}></Route>
        <Route path="/designlab-react" element={<Index></Index>}></Route>
      </Routes>
    </Router>
    );
    
  }
}
export default App;
