import React from 'react'
import imgex1 from "../imgs project mat3am/01.jpg"
import imgex2 from "../imgs project mat3am/02.jpg"
import imgex3 from "../imgs project mat3am/03.png"
import Cardexplore from './Cardexplore'
export default function Explorefoods() {
  return (
    <>
    <div className='explore' >
        <div className='explore-text' id='explore foods'>
    <h1>Explore Our Foods</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>

    </div>
    <div className='cardparent'>

  <Cardexplore  img={imgex1} title="Rainbow Vegetable Sandwich" time="Time: 15 - 20 Minutes | Serves: 1" price1 ="$10.50" price2="$11.70" />
   <Cardexplore img={imgex2} title="Vegetarian Burger" time="Time: 30 - 45 Minutes | Serves: 1"price1 ="$9.20" price2="$10.50"/>
   <Cardexplore img={imgex3} title="Raspberry Stuffed French Toast" time="Time: 10 - 15 Minutes | Serves: 1"price1 ="$12.50" price2="$13.20" />

    </div>
 



    </div>
    




    </>
  )
}
