import React, { useState } from 'react'
import Logo from  './../assets/Images/Logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { RiMovie2Line } from "react-icons/ri";
import { HiTv } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
const Header = () => {

    const [toggle, setToggle] = useState(false);

    const menu = [
        {
            name: 'Home',
            Icon: IoHomeOutline
        },
        {
            name: 'SEARCH',
            Icon: IoMdSearch
        },
        {
            name: 'WATCHLIST',
            Icon: FaPlus
        },
        {
            name: 'ORIGINALS',
            Icon: FaRegStar
        },
        {
            name: 'MOVIES',
            Icon: RiMovie2Line
        },
        {
            name: 'SERIES',
            Icon: HiTv
        },

    ]
  return (
    <div className='flex item-center justify-between'>
        <div className='flex gap-8 items-center'>
        <img src={Logo} className='w-[80px] md:w-[115px] object-cover' alt="" srcset="" />
        <div className='hidden md:flex gap-8 '>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.Icon} />
        ))}
        </div>
        <div className='flex md:hidden gap-5 '>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={' '} Icon={item.Icon} />
        ))}

        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={' '} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 '>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.Icon} />
              ))} 
            </div>:null}
        </div>
        </div>
        </div>
        
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png" className='w-[40px] h-[40px] rounded-full m-9' alt="" srcset="" />
        
    </div>
  )
}

export default Header