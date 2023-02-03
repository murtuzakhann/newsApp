import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Categories =() => {
  
    return (
      <div className='container fixed d-flex justify-content-center my-3'>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <Link className="nav-link" id="home-tab" data-toggle="tab" to="/general" role="tab" aria-controls="home" aria-selected="true">General</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="profile-tab" data-toggle="tab" to="/Business" role="tab" aria-controls="profile" aria-selected="false">Business</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/Entertainment" role="tab" aria-controls="contact" aria-selected="false">Entertainment</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/Science" role="tab" aria-controls="contact" aria-selected="false">Science</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/Health" role="tab" aria-controls="contact" aria-selected="false">Health</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/Sports" role="tab" aria-controls="contact" aria-selected="false">Sports</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/Technology" role="tab" aria-controls="contact" aria-selected="false">Technology</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/Global" role="tab" aria-controls="contact" aria-selected="false">Global</Link>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>
    
    </div>
    
    
    
    
    
    
    
    )
  }
export default Categories;


