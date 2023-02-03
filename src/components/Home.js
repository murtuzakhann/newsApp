import React from "react";
import { Link } from "react-router-dom";
import HomeCards from './HomeCards'
// import Categories from './Categories'
import Slider from './Slider'
import livenews from "./livenews.jpg";
import readnews from "./readnews.jpg";
import LongNewsBox from "./LongNewsBox";

const Home =()=> {

  let apiKey = "e5a2543de7c04ae693be9fa2c7e19acb";
     
    return (
      <>
       
        <div className="container-fluid">
        <div className="row">
      
<div className="col-md-8"><Slider apiKey={apiKey} /> </div>
 

<div className="col-md-4">
  
      <div className="row">
  <div className="col-md"><HomeCards apiKey={apiKey}/></div>
  </div>
  
  </div>

      </div>

        <div className="container my-5">
          <h4 className="text-center my-3">More Stuff from News Flasher </h4>
        </div>

        <div className="container-fluid my-3">
          <div className="row my-3">
            <div className="col-md-6">
              <h5 className="text-center">Watch Live News Now</h5>
              <img src={livenews} alt="..." className="img-thumbnail" />
            </div>

            <div className="col-md-6">
              <Link className="nav-link" to="/general">
                <h5 className="text-center">Read Live News Now</h5>
                <img src={readnews} alt="..." className="img-thumbnail" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <h4 className="text-center my-3">More from Entertainment</h4>
        <LongNewsBox apiKey={apiKey}/>

        </div>

      

      </div>
      </>
    );
  }

export default Home;