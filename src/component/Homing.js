import React from 'react'
import '../css/Homing.css'
import { useAxios } from '../hooks/useAxios'
import { NavLink } from 'react-router-dom'
export default function () {
  const url = "https://smartgit2831.github.io/file_my_code/Homing.json"
  const {data, error} = useAxios(url)

  return (
    <div>
      {data && data.Homing.map((e)=>(
        <div className='sec row'>
            <div className="image col-4">
                <img src={e.src} alt="" />
            </div>
            <div className='col-8 one'>
                <h3>{e.title}</h3>
                <p className='matn'>{e.detail} </p>
                <NavLink to={e.link}><button className='but'>play</button></NavLink>
            </div>
        </div>
      ))}
    </div>
  )
}
