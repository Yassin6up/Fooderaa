import Nav from "./compent/Nav"
import React from "react";
import './App.css';
import Home from "./compent/Home";
import Page from "./compent/Page";
import About from "./compent/About";
import About2 from "./compent/About2";
import Info from "./compent/Info";
import { Routes,Route } from "react-router-dom";
import Vedio from "./compent/Vedio";
import Explorefoods from "./compent/Explorefoods";
import Slider from "./compent/Slider";
import Gustion from "./compent/Gustion";
import Section from "./compent/Section";
import Footer from "./compent/Footer";
 

function App() {
  return (
    <>
     <Routes>
     <Route path="/"  element={<> <Nav/> 
     <Home/>
   <Page />
   <About/>
  <About2/>

  <Info/>

  <Explorefoods/>
  <Slider/>
  <Gustion/>
<Section/>

<Footer/>
     
     
     
     </>}/>


      <Route path="vedio" element={<><Vedio/></> }/>
 

</Routes>
    
     
 


  
 
    </>
  
  );
}

export default App;
