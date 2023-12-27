import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-slate-200 flex justify-between py-4 fixed top-0 w-full'>
        <div>Shaber ahmad</div>
        <div className=''>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/about'>Weather</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/country'>Country</NavLink>
        </div>
    </div>
  )
}
