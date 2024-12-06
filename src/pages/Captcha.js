import React, { useEffect, useState } from 'react'
import '../css/Captcha.css'
export default function Captcha() {
  const english = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H","j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q","r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"]
  const adad = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const deg = ["30", "40", "48", "56"]
  const [code, setCode] = useState()
  const [num_skewX, setNum_skewX] = useState()
  const [word, setword] = useState(null)
  const [whrite_alarm, setWhrite_alarm] = useState()
  const [stop, setStop] = useState(false)
  const [fulse, setFulse] = useState(false)

  const [clock, setClock] = useState(20)
  const [secound, setSecound] = useState()
  const [minute, setMinute] = useState()
  const [start_timer, setStart_timer] = useState(false)

  let timer;
  useEffect(()=>{
    setStart_timer(true)

    if(start_timer){ 
      timer = setInterval(() => {
          setClock((e)=>e-1)
      }, 1000);

    }
    formatTime(clock)
    if(clock === 0){
      clearInterval(timer)
    }else if(stop){
      clearInterval(timer)
    }
    return () => clearInterval(timer);
  },[clock, start_timer])

  function formatTime(time){
    setSecound( Math.floor(time/60).toString().padStart(2,'0'));
    setMinute( (time % 60).toString().padStart(2, '0'));
  }

  useEffect(()=>{

    setCode(english[Math.floor(Math.random() * english.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)])
    setNum_skewX(deg[Math.floor(Math.random() * deg.length)]);

  },[])

  function newCapcha(){
    setCode(english[Math.floor(Math.random() * english.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)])
    setClock(20)
    setStop(false)
  }

  function submit(e){
    if(!fulse){
      setFulse(true)
    }
    if(fulse){
      setFulse(false)
    }
    e.preventDefault()
    if (word === null) {
      setWhrite_alarm("لطفا مقدار کد بالا را وارد کنید")
    }else if(word.toLocaleLowerCase() === code.toLocaleLowerCase()){
      setWhrite_alarm("تبریک کد را درست وارد کردید")
      setStop(true )
    }else if(word.length !== code.length){
      setWhrite_alarm("تعداد کد وارد شده درست نمی باشد")
    }else{
      setWhrite_alarm("کد را درست وارد نکرده اید لطفا دوباره سعی کنید")
    }
  }
  return (
    <div className='captcha-div'>
      <form onSubmit={submit} className='captcha'>
        <div className='mb-3 mt-3'>
          <div className='capcha_code'>
            <div style={{transform : `skewX(${num_skewX}deg)`}}>{code}</div>
          </div>
          <input type="text" className='form-contorol' placeholder='Enter Code' onChange={(e)=>setword(e.target.value)}/>
        </div>
        <div className='time'>
          <p>زمان باقی مانده : {minute} : {secound}</p>
        </div>
        <div className='alarm'>
          <p className={fulse ? 'animate__animated animate__lightSpeedInRight' : 'animate__animated animate__lightSpeedInLeft'}>{whrite_alarm}</p>
        </div>
        <button className={stop || clock === 0 ? 'btn disabled button_capcha' : 'button_capcha'}>submit</button>
      </form>
      <button onClick={newCapcha}className={stop || clock === 0? '' : 'btn disabled'}>reset</button>
    </div>
  )
}
