import React from 'react'
import Logo from "../imgs project mat3am/logo.png"
export default function Nav() {
  
 
  
  return (
    <>
    
    <div className='nav' >
<div className='logo'>
    <img src={Logo} alt='ll'/>
</div> 

<ul>
<li><a href='#home'> home</a></li>
<li><a href='#about'>about us</a></li>
<li><a href='#explore foods'>explore foods</a></li>
<li><a href='#s'>reviews</a></li>
<li><a href='#faq'>FAQ</a></li>
<li><button> 1800 789 123</button></li>

</ul>


    </div>
    
    </>
  )
}
