import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className='main-footer'>
      <div className='zero-logo'>
        <img src='https://cdn.shopify.com/s/files/1/0722/8106/3702/files/logo.png?v=1676901766'/>
        <div className='follow'>
            <h3>Follow us</h3>
        </div>
        <div className='follow-icons'>
        <FaInstagram />
        <FaFacebookSquare />
        <FaPinterest />
        <FaTwitter />
        <FaTiktok />
        <FaSnapchat />
        <FaLinkedinIn />
      
        </div>
        <i><FaYoutube /></i>
      </div>
      <div className='links'>
        <div className='quick-heading'>
            <p>QUICK LINKS</p>
        </div>
        <div className='link-list'>
            <li>Home</li>
            <li>Smart Watches</li>
            <li>Blogs</li>
            <li>Contact</li>

        </div>
       
      </div>
      <div className='support'>
            <p>SUPPORT</p>
            <li>FAQs</li>
            <li>Track Your Oder</li>
            <li>Warranty Registration</li>
            <li>Shipping Details</li>
            <li>Terms & Conditions</li>

        </div>
        <div className='policy'>
            <p>POLICY</p>
            <li>Privacy Policy</li>
            <li>Warranty Policy</li>
            <li>Return Policy</li>
            <li>Corporate Policy</li>

        </div>
    </div>
    <div className='hr'>
    <hr></hr>
    </div>
    <div className='copyright'>
    <p className='copy'>&copy; 2024 Zero LifeStyle. All Rights Reserved. | Sitemap</p>
    <div className='rad'>
      <p>Powered by<mark>rad.</mark></p>
    </div>
    </div>
    
    </>
  )
}

export default Footer
