import React from 'react'
import { useAxios } from '../hooks/useAxios'
import '../css/Pishnahad.css'
import { NavLink } from 'react-router-dom'
export default function Pishnahad() {
    const url = "https://smartgit2831.github.io/file_my_code/pishnahad.json"
    const {data, error} = useAxios(url)
  return (
    <div>
        <section className='product-sec-new'>
            <div className="row">
                {data && data.pishnahad.map((e)=>(
                    <div className="col-sm-3 product-sec" key={e.id} >
                        <div className="shoping-card">
                            <div className="img-sec pop">
                                <img src={e.src} alt=""></img>
                                <div className="stars">
                                    {e.stars && e.stars.map((e)=>(
                                        <i key={e.star} className="fas fa-star"></i>
                                        ))}
                                </div>
                            </div>
                            <div className="title" >
                                {e.title}
                            </div>
                            <div className="buttons">
                                <div className="left">
                                    <div className="extend-btn">
                                        <NavLink to={e.link}><span className="b-text">game</span></NavLink>
                                        <NavLink to={e.link}><span className="b-icon" >Play</span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
