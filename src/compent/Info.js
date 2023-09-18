import React from 'react'
import { Link } from 'react-router-dom';
export default function Info() {
  return (
    <>
    <div className='info'>
<div className='info-text'>
<h1>When a man's stomach is full it makes no <br/>
difference whether he is rich or poor.</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
<br/>
<br/>
<Link  className='link'  to="/vedio"><i className="fa-solid fa-play"></i>     watch our story</Link>
</div>

    </div>
    </>
  )
}
