import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Logo = () => {
  return (
    <div>
      <div className='logo-main'>
        <div className='empty'>
3
        </div>
        <div className='logo'>
        <img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x@2x.png?v=1705411679'/>
        </div>
        <div className='icon'>
        <CiSearch />
         <CiUser />
         <CiHeart />
         <CiShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default Logo
