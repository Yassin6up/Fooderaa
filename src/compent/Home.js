import React from 'react'
import photo from "../imgs project mat3am/32.png"
export default function Home() {
  return (
    <>
    <div className='home'>
        <div className='kolchi' id='home'> 
        
         <div className='home-text'>
<h1>Good food choices are good investments.</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum amet leo.</p>
<button  className='btn1'>order now     <i className="fa-solid fa-basket-shopping"></i></button>
<button className='btn2'><a href='#about'>learn more</a></button>
        </div>
        <div className='photo-home'>
<img src={photo} alt='xx'/>
        </div>
        </div>
      

    </div>
    
    
    </>
  )
}
