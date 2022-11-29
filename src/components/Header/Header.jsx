import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
    <>
      <div className='header'>
        <div className='left-header'>
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest-p"></i>
        </div>
        <div className='right-header'>
            <ul>
                <li>
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <p>203 Madison Ave, NY, USA</p>
                    <strong>ADDRESS</strong>
                </li>
                <li>
                    <i className="fa-solid fa-clock"></i>
                    <p>Monday - Friday 9am - 6pm</p>
                    <strong>TIMEING</strong>
                </li>
                <li>
                    <i className="fa-solid fa-envelope"></i>
                    <p>envato@gmail.com</p>
                    <strong>MAIL TO US</strong>
                </li>
                <li>
                    <i className="fa-solid fa-bars"></i>
                </li>
            </ul>
        </div>
      </div>
      <div className='header2'>
        <div className='logo'>
            <img src="https://themecraze.net/html/volia/images/logo.png"></img>
        </div>
        <div className='navigation'>
            <p>Home</p><i class="fa-solid fa-chevron-down"></i>
            <p>About</p><i class="fa-solid fa-chevron-down"></i>
            <p>Pages</p><i class="fa-solid fa-chevron-down"></i>
            <p>Shop</p><i class="fa-solid fa-chevron-down"></i>
            <p>Blog</p><i class="fa-solid fa-chevron-down"></i>
            <p>Contact us</p>
        </div>
      </div>
    </>
    )
  }
}
