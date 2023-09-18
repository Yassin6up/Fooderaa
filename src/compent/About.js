import React from 'react'
import img1 from "../imgs project mat3am/1.jpg"
export default function About() {
  return (
    <>
    <div className='about'id='about'>

      <div className='imgabout' >
        <img src={img1}alt='' />
      </div>
<div className='text-about'>
<h1>We pride ourselves on<br/> making real food from the<br/> best ingredients.
</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
<button > <a href='#home'>learn more</a></button>

</div>

    </div>
    
    </>
  )
}
