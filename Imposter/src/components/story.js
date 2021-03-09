import React from 'react';
// import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Imposter from './img/Imposter.png';
import Profile from './img/Profile.png';
import Message1 from './img/Message1.png';
import Message2 from './img/Message2.png';
import Message3 from './img/Message3.png';
import Message4 from'./img/Message4.png';
import Desk from './img/desk.jpg';
import Clouds from './img/clouds.png';
import Clouds2 from './img/Clouds2.png';
import Clouds3 from './img/Clouds3.png';
import Clouds4 from './img/Clouds4.png';
import Clouds5 from './img/Clouds5.png';
import Clouds6 from './img/Clouds6.png';
import Clouds7 from './img/Clouds7.png';
import Clouds8 from './img/Clouds8.png';
import Clouds9 from './img/Clouds9.png';

class Story extends React.Component{
  render() {
    return(
      <Parallax ref={ref => (this.parallax = ref)} horizontal={true} pages={14}>
        <ParallaxLayer offset ={0} speed={1} style={{backgroundColor: ``, display: 'flex', alignItems: 'center', justifyContent: 'center' , fontFamily: 'DotGothic16',  color: '#ffffff'}} > 
          <h1>Imposter</h1> </ParallaxLayer>
          
        <ParallaxLayer offset ={0.99} speed ={1} style ={{opacity: 1}}>
          <img src={Imposter} style= {{display: 'block', alignItems: 'center', justifyContent: 'center', width: '75%'}}/>
        </ParallaxLayer>
          
        <ParallaxLayer offset ={1} style={{backgroundColor: `#E2DBBE`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
          <h1>A personal story: But maybe you can relate</h1>
        </ParallaxLayer>
      
        <ParallaxLayer offset ={2} style={{backgroundColor: `#D5D6AA`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DotGothic16'}}>
          <h1>Imagine a man. </h1>
        </ParallaxLayer>
          
        <ParallaxLayer offset ={2.4} speed ={1.4} style= {{opacity:1.0}}>
          <img src={Profile} style={{marginTop:'10%'}} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed ={0.6} style ={{opacity: 0.8}}>
          <img src={Message1} style ={{marginTop:'7%'}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed ={0.6} style ={{opacity: 0.8}}>
          <img src={Message2} style ={{marginTop:'15%'}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={2.8} speed ={0.6} style ={{opacity: 0.8}}>
          <img src={Message3} style ={{marginTop:'18%'}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} speed ={0.6} style ={{opacity: 0.8}}>
          <img src={Message4} style ={{marginTop:'22%'}}/>
        </ParallaxLayer>
        
        <ParallaxLayer offset ={3} style={{backgroundColor: `#9DBBAE`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}
          ><h1>Boring</h1>
        </ParallaxLayer>
      
        <ParallaxLayer offset ={3} speed={1.2} style={{ alignItems: 'top',  fontFamily: 'DotGothic16'}}
          ><h1>This just in, this job is:</h1>
        </ParallaxLayer>
      
        <ParallaxLayer offset ={3.3} speed={1.2} style={{ alignItems: 'top',  fontFamily: 'DotGothic16'}}
          ><h1>BORING</h1>
        </ParallaxLayer>
        
        <ParallaxLayer offset ={3.4} speed={1.2} style={{ alignItems: 'top',  fontFamily: 'DotGothic16'}}
          ><h1>Boring</h1>
        </ParallaxLayer>
        
        <ParallaxLayer offset ={3.5} speed={1.2} style={{ alignItems: 'top',  fontFamily: 'DotGothic16'}}
          ><h1>BORING</h1>
        </ParallaxLayer>
        
        <ParallaxLayer offset ={3.6} speed={1.2} style={{ alignItems: 'top',  fontFamily: 'DotGothic16'}}
          ><h1>Boring</h1>
        </ParallaxLayer>
        
        <ParallaxLayer offset ={3.7} speed={1.2} style={{ alignItems: 'top',  fontFamily: 'DotGothic16'}}
          ><h1>BORING</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3.4} speed={0.9} >
          <img src={Desk} style={{width:'35%', marginTop:'10%'}}/>
        </ParallaxLayer>

        <ParallaxLayer offset ={4} style={{backgroundColor: `#769FB6`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}>
          <h1>And so one day he finally pulls his head out of the clouds, and decides to make a change. </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={1.2}>
          <img src={Clouds}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={4.1} speed={1.2} opacity={0.6}>
          <img src={Clouds2} style={{marginTop:'10%'}}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={4.6} speed={1.5} opacity={0.6}>
          <img src={Clouds3} style={{marginTop:'15%'}} ></img>
        </ParallaxLayer>

        <ParallaxLayer offset={4.4} speed={1.2} opacity={0.6}>
          <img src={Clouds4} style={{marginTop:'30%'}} ></img>
        </ParallaxLayer>

        <ParallaxLayer offset={4.8} speed={0.6} opacity={0.6}>
          <img src={Clouds5} style={{marginTop:'10%'}}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={4.9} speed={0.8} opacity={0.6}>
          <img src={Clouds6} style={{marginTop:'40%'}}></img>
        </ParallaxLayer>


        <ParallaxLayer offset={4.7} speed={0.75} opacity={0.6}>
          <img src={Clouds7} style={{marginTop:'40%'}}></img>
        </ParallaxLayer>


        <ParallaxLayer offset={4.1} speed={1.6} opacity={0.6}>
          <img src={Clouds8} style={{marginTop:'42%'}}></img>
        </ParallaxLayer>


        <ParallaxLayer offset={4.5} speed={1.3} opacity={0.6}>
          <img src={Clouds9} style={{marginTop:'5%'}}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={5} style={{backgroundColor: `#188FA7`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}>
          <h1>After much thought, he decides to learn to code.</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={6} style={{backgroundColor: `#5D3A00`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}>
        </ParallaxLayer>
       
        <ParallaxLayer offset={6.1} speed ={-0.3}style={{fontFamily: 'DotGothic16'}}>
          <h1 style={{marginTop: '25%'}}>Yeah good luck with that </h1>
        </ParallaxLayer>
        
        <ParallaxLayer offset={6.4} speed ={1.2}style={{fontFamily: 'DotGothic16'}}>
          <h1 style={{marginTop: '15%'}}>Coding is hard isn't it? </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={6.2} speed ={1.1}style={{fontFamily: 'DotGothic16'}}>
          <h1 style={{marginTop: '35%'}}>You really think you can do that? </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={6.7} speed ={1.5}style={{fontFamily: 'DotGothic16'}}>
          <h1 style={{marginTop: '45%'}}>Seems like a big change for you</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={6.9} speed ={1.2}style={{fontFamily: 'DotGothic16'}}>
          <h1 style={{marginTop: '10%'}}>Interesting choice</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={7} style={{backgroundColor: `#157A6E`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}>
        </ParallaxLayer>

        <ParallaxLayer offset={7.1} speed={1.2} style={{fontFamily:'DotGothic16'}} >
          <h1 style={{marginTop: '10%'}}>His brain was...not kind to him.</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={7.2} speed={1.2} style={{fontFamily:'DotGothic16'}} >
          <h1 style={{marginTop: '15%'}}>But he knew the thoughts weren't really true.</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={7.3} speed={1.2} style={{fontFamily:'DotGothic16'}} >
          <h1 style={{marginTop: '20%'}}>He had done hard things before.</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={7.4} speed={1.2} style={{fontFamily:'DotGothic16'}} >
          <h1 style={{marginTop: '25%'}}>So he set those thoughts aside.</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={7.5} speed={1.2} style={{fontFamily:'DotGothic16'}} >
          <h1 style={{marginTop: '30%'}}>And started to learn.</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={8} style={{backgroundColor: `#499F68`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>

        <ParallaxLayer offset={8} speed={{fontFamily:'DotGothic1'}}>
          <
        </ParallaxLayer>

        <ParallaxLayer offset={9} style={{backgroundColor: `#77B28C`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>

        <ParallaxLayer offset={10} style={{backgroundColor: ``, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>

        <ParallaxLayer offset={11} style={{backgroundColor: `#A9CEF4`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>

        <ParallaxLayer offset={12} style={{backgroundColor: `#54DEFD`,display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}></ParallaxLayer>

        <ParallaxLayer 
        offset={13} 
        style={{backgroundColor: `#F0CF65`, display :'flex', alignItems: 'center', justifyContent:'center', fontFamily: 'DotGothic16'}}
        onClick={()=> this.parallax.scrollTo(0)}> 
        </ParallaxLayer>
      
      </Parallax>
    )
  }
}

export default Story;