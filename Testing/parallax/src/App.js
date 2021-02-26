import React, { useState, useEffect } from "react";
import './App.scss';

function App() {
  const [offsetY, setOffsetY]= useState(0);
  const handleScroll =() => setOffsetY(window.pageYOffset);

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll );
  
  
  return() => window.removeEventListener('scroll', handleScroll);
}, [])
  const renderContent = () =>(
    <>
      <div className="Test_content_heading">
        <h1 className="Test__content_heading_text">Test Yo!</h1>
        <h2 className ="Test_content_heading_caption"> 
        I am learning how to implement parallax scrolling</h2>
      </div>
      <div className="Test_content_cta">
        <p>words words words more words</p>
      </div>
    </>
    );
  
  return (
    <section className= "Test">
      <div className="Test_background" style = {{transform: `translateY(${offsetY * 0.5}px)`}}/>
      <div className="Test_image" style = {{ transform: `translateY(${offsetY * 0.8})px`}}/>
      <div className="Test_content">{renderContent()}</div>
    </section>
  );
};

export default App;
