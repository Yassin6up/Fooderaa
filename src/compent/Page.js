import React from 'react'
import Count from './Count'
export default function Page(props) {
  return (
    <>
    <div className='count'>
      {/* <div className='child'>
<h1>1287+<span className='span'><br/>SAVINGS</span></h1>

      </div> */}
<Count  one="1287+" two="SAVINGS"/>
<Count one="5786+" two="PHOTOS"/>
<Count one="1440+" two="ROCKETS"/>
<Count one="7110+" two="GLOBES"/>
      


    </div>
    
    </>
  )
}
