import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const name = [
        {name : 'چیستان', url:'/chistan'},
        {name : 'بازی رنگ', url : '/gamecolor'},
        {name : 'سوالات چهار گزینه ای', url : '/question'},
        {name : 'ماشین حساب', url : '/car'},
        {name : 'کپچا', url : '/captcha'}
    ]
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <NavLink class="navbar-brand" to="/mahdi_react">HOME</NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    {name.map((e)=>(
                        <li class="nav-item">
                            <NavLink to={e.url}><p className='navbar nav-link' >{e.name}</p></NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}
