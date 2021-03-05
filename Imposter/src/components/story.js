import React from 'react';
// import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


class Story extends React.Component{
  render() {
    return(
      <Parallax ref={ref => (this.parallax = ref)} horizontal={true} pages={10}>
          <ParallaxLayer offset ={0} speed={1} style={{backgroundColor: ``, display: 'flex', alignItems: 'center', justifyContent: 'center'}} > 
          <h1>Imposter <br/>
            a personal story</h1> </ParallaxLayer>
          
          <ParallaxLayer offset ={1} speed={1} style ={{backgroundColor: `#00ff00` }} />
         

      </Parallax>
    )
  }
}

export default Story;