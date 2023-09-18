import React from 'react'
import CardQustion from './CardQustion'

function Gustion() {
  return (
    <>
    <div className='question' id='faq'>
<h1>Frequently Asked Questions</h1>
<div className='qustion-prent'>
<CardQustion title="Is Foodera Bread really baked fresh each day?"/>
<CardQustion title=" Do you bake breads containing animal fats or products?"/>
<CardQustion title=" Can I order your products online?"/>
<CardQustion title=" When are you opening a shop near me?"/>

</div>
    </div>
    
    
    </>
  )
}

export default Gustion