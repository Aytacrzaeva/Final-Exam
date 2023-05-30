import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='nav'>
        <div className="nav__left">
            <Link to="/"><h2>Furnish</h2></Link>
        </div>
        <div className="nav__right">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header
