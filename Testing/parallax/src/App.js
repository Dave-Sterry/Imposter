import React, { useState, useEffect } from "react";
import './App.scss';

function App() {
  const [offsetY, setOffsetY]= useState(0);
  const handleScroll =() => setOffsetY(window.pageYOffset);

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll);
  
  
  return() => window.removeEventListener('scroll', handleScroll);
}, []);
  
const renderContent = () =>(
    <>
      <div className="Test__content__heading">
        <h1 className="Test__content__heading__text">Test Yo!</h1>
        <h2 className ="Test__content__heading__caption"> 
        I am learning how to implement parallax scrolling</h2>
      </div>
      <div className="Test__content__cta">
        <p>words words words more words</p>
      </div>
    </>
    );
  
  return (
    <section className= "Test">
      <div 
      className="Test__background" 
      style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div 
      className="Test__image" 
      style={{ transform: `translateY(${offsetY * 0.8})px)` }}
      />
      <div className="Test__content">{renderContent()}</div>
    </section>
  );
}

export default App;
