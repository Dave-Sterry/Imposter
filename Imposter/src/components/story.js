import React from 'react';
// import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Imposter from './img/Imposter.png';


class Story extends React.Component{
  render() {
    return(
      <Parallax ref={ref => (this.parallax = ref)} horizontal={true} pages={10}>
          <ParallaxLayer offset ={0} speed={1} style={{backgroundColor: ``, display: 'flex', alignItems: 'center', justifyContent: 'center' , fontFamily: 'DotGothic16', color: '#ffffff'}} > 
          <h1>Imposter</h1> </ParallaxLayer>
          <ParallaxLayer offset ={0.99} speed ={1} style ={{opactiy: 0.1}}>
            <img src={Imposter} style= {{display: 'block', alignItems: 'center', justifyContent: 'center', width: '75%'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset ={1} style={{backgroundColor: `#E2DBBE`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
            <h2>A personal story</h2>
            </ParallaxLayer>
          <ParallaxLayer offset ={2} style={{backgroundColor: `#D5D6AA`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
          <h2>Imagine a man.  </h2>
          </ParallaxLayer>
          <ParallaxLayer offset ={3} style={{backgroundColor: `#9DBBAE`}}></ParallaxLayer>
          <ParallaxLayer offset ={4} style={{backgroundColor: `#769FB6`}}></ParallaxLayer>
          <ParallaxLayer offset={5} style={{backgroundColor: `#188FA7`}}></ParallaxLayer>
          <ParallaxLayer offset={6} style={{backgroundColor: `#5D3A00`}}></ParallaxLayer>
      

      </Parallax>
    )
  }
}

export default Story;