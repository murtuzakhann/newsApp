import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Newsbox from './components/Newsbox.js';
// import category from "./components/category.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About.js'
import Home from "./components/Home";
import Newspage from "./components/Newspage";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {

  const [progress, setProgress] = useState(0)
 
  const changeProgress =(progress) =>
  {
    setProgress(progress)
  }

  const apiKey = "e5a2543de7c04ae693be9fa2c7e19acb";
    return (
      
      <div style={{background: "#edebeb"}}>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress} 
      />
        
        {/* <Route path= "/" element={<category />}></Route> */}
        
          <Routes>
          
          
          <Route exact path= "/Home" key="Home" element={<Home setProgress ={changeProgress} />}></Route>
          <Route exact path= "/about" key="About" element={<About />}></Route>
          <Route exact path= "/Newspage" key="Newspage" element={<Newspage />}></Route>
          <Route exact path= "/global" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="global" pageSize={6} country={""} category={"general"}/>}></Route>
          <Route exact path= "/general" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="general" pageSize={6} country={"us"} category={"general"}/>}></Route>
          <Route exact path= "/business" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="business" pageSize={6} country={"us"} category={"business"}/>}></Route>
          <Route exact path= "/entertainment" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="entertainment" pageSize={6} country={"us"} category={"entertainment"}/>}></Route>
          <Route exact path= "/general" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="general" pageSize={6} country={"us"} category={"general"}/>}></Route>
          <Route exact path= "/science" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="science" pageSize={6} country={"us"} category={"science"}/>}></Route>
          <Route exact path= "/health" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="health" pageSize={6} country={"us"} category={"health"}/>}></Route>
          <Route exact path= "/sports" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="sports" pageSize={6} country={"us"} category={"sports"}/>}></Route>
          <Route exact path= "/technology" element={<Newsbox apiKey = {apiKey} setProgress = {changeProgress} key="technology" pageSize={6} country={"us"} category={"technology"}/>}></Route>
        
          
          </Routes>
        </Router>
     

      <Footer/>
      </div>
    );
  }
  export default App;

