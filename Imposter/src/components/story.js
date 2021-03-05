import React from 'react';
// import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Imposter from './img/Imposter.png';


class Story extends React.Component{
  render() {
    return(
      <Parallax ref={ref => (this.parallax = ref)} horizontal={true} pages={10}>
          <ParallaxLayer offset ={0} speed={1} style={{backgroundColor: ``, display: 'flex', alignItems: 'center', justifyContent: 'center' , fontFamily: 'DotGothic16'}} > 
          <h1>Imposter</h1> </ParallaxLayer>
          <ParallaxLayer offset ={0.7} speed ={-0.6} style ={{opactiy: 0.5}}>
            <img src={Imposter} style= {{display: 'block', width: '15%', mariginLeft: '10%'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset ={1} style={{backgroundColor: ``, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
            <h2>A personal story</h2>
            </ParallaxLayer>
          <ParallaxLayer offset ={2} style={{backgroundColor: ``, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
          <h2>Imagine a man.  </h2>
          </ParallaxLayer>
      

      </Parallax>
    )
  }
}

export default Story;