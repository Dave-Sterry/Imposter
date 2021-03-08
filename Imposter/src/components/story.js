import React from 'react';
// import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Imposter from './img/Imposter.png';
import Profile from './img/Profile.png';
import Message1 from './img/Message1.png';
import Message2 from './img/Message2.png';
import Message3 from './img/Message3.png';
import Message4 from'./img/Message4.png';


class Story extends React.Component{
  render() {
    return(
      <Parallax ref={ref => (this.parallax = ref)} horizontal={true} pages={14}>
          <ParallaxLayer offset ={0} speed={1} style={{backgroundColor: ``, display: 'flex', alignItems: 'center', justifyContent: 'center' , fontFamily: 'DotGothic16', color: '#ffffff'}} > 
          <h1>Imposter</h1> </ParallaxLayer>
          <ParallaxLayer offset ={0.99} speed ={1} style ={{opacity: 1}}>
            <img src={Imposter} style= {{display: 'block', alignItems: 'center', justifyContent: 'center', width: '75%'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset ={1} style={{backgroundColor: `#E2DBBE`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
            <h2>A personal story: But maybe you can relate</h2>
            </ParallaxLayer>
          <ParallaxLayer offset ={2} style={{backgroundColor: `#D5D6AA`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
          <h2>Imagine a man.  </h2>
          </ParallaxLayer>
          <ParallaxLayer offset ={2.4} speed ={1.4} style= {{opacity:1.0}}>
            <img src={Profile} style={{marginTop:'10%'}} />
          </ParallaxLayer>
          <ParallaxLayer offset={2.7} speed ={0.6} style ={{opacity: 0.8}}>
            <img src={Message1} style ={{marginTop:'7%'}}/>
          </ParallaxLayer>
            <ParallaxLayer offset={2.8} speed ={0.6} style ={{opacity: 0.8}}>
            <img src={Message2} style ={{marginTop:'15%'}}/>
          </ParallaxLayer>
            <ParallaxLayer offset={2.9} speed ={0.6} style ={{opacity: 0.8}}>
            <img src={Message3} style ={{marginTop:'18%'}}/>
          </ParallaxLayer>
            <ParallaxLayer offset={2.9} speed ={0.6} style ={{opacity: 0.8}}>
            <img src={Message4} style ={{marginTop:'22%'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset ={3} style={{backgroundColor: `#9DBBAE`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset ={4} style={{backgroundColor: `#769FB6`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={5} style={{backgroundColor: `#188FA7`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={6} style={{backgroundColor: `#5D3A00`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={7} style={{backgroundColor: `#157A6E`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={8} style={{backgroundColor: `#499F68`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={9} style={{backgroundColor: `#77B28C`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={10} style={{backgroundColor: `#C2C5BB`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={11} style={{backgroundColor: `#A9CEF4`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={12} style={{backgroundColor: `#54DEFD`,display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
          <ParallaxLayer offset={13} style={{backgroundColor: `#F0CF65`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>
      

      </Parallax>
    )
  }
}

export default Story;