import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
    <div className='main'>
      <div className='logo'>
        <img src='https://zerolifestyle.co/cdn/shop/files/logo.png?v=1676901766&width=500'/>
      </div>
      <div className='list'>
        <li>Home</li>
        <li>SmartWatches</li>
        <li>Earbuds</li>
        <li>Support</li>

      </div>
      <div className='icons'>
      <CiUser />
      <CiSearch />
      <CiShoppingCart />
      </div>


    </div>
    <div className='image'>
      <img src='https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Carbon-banner.webp?v=1720134513'/>
    </div>
    <p>Home> ZBuds Earbuds Price in Pakistan</p>
    <h1>Zbuds Earbuds Price in Pakistan - The fashion Tech <span>Revoulation</span></h1>
    </>
  )
}

export default Navbar
