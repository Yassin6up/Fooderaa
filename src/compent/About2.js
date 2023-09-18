import React from 'react'
import imgabout2 from "../imgs project mat3am/2.png"

export default function About2() {
  return (
    <>
    <div className='about2'>
<div className='about2-text'>
  <h1>We make everything by hand with the best possible ingredients.</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  <h5><i className="fa-sharp fa-solid fa-check"></i>  Etiam sed dolor ac diam volutpat.</h5>
  <h5><i className="fa-sharp fa-solid fa-check"></i>  Erat volutpat aliquet imperdiet</h5>
  
  <h5><i className="fa-sharp fa-solid fa-check"></i>  purus a odio finibus bibendum.</h5>
  <br/>
  <button>learn more</button>
   </div>
   <div className='img-about2'>
<img src={imgabout2}alt='uu' />

   </div>



    </div>
    
    
    </>
  )
}
