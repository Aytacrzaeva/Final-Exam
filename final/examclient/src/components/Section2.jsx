import React from 'react'
import "./Section2.scss"
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <div className='section2'>
      <div className="section2__items">
        <span>ABOUT FURNISH</span>
        <h2>Quality Makes the Belief for Customers</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <Link to={"https://youtu.be/ldvRv2GRTtE"}><AiFillPlayCircle color='rgb(207,117,0)' fontSize={"90px"}/>Watch Video</Link>
      </div>
    </div>
  )
}

export default Section2
