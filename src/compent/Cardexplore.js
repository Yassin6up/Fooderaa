import React from 'react'
import imgex1 from "../imgs project mat3am/01.jpg"
export default function Cardexplore(props) {
  return (
    <div className='card'>  
    <div className='imgcard'>
<img src={props.img}alt='' />
    </div>
    <div className='text-card'>
<h3>{props.title}</h3>
<p>{props.time}</p>
<div className='price'>
    <h5 className='price1'>{props.price1}</h5>
    <h5 className='price2' >{props.price2} </h5>

</div>


    </div>
    <button>order now</button>
     </div>
  )
}
