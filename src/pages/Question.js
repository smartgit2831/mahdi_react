import { useEffect, useState } from 'react'
import '../css/Question.css'
import { useAxios } from '../hooks/useAxios'
import { NavLink } from 'react-router-dom'
export default function Question() {
  
    
    const [display_bodi, setDisplay_bodi] = useState(false)
    const [display_alert, setDisplay_alert] = useState(true)
    const [checked, setchecked] = useState(null);
    const [numQuestion, setNumQuestion] = useState(0)
    
    
    const [clock, setClock] = useState(15)
    const [secound, setSecound] = useState()
    const [minute, setMinute] = useState()
    const [start_timer, setStart_timer] = useState(false)

    
    const url = `https://smartgit2831.github.io/file_my_code/db.json/${checked}`
    const url1 = `https://smartgit2831.github.io/file_my_code/${checked}.json`
    const {data} = useAxios(url1)

    function aply(e){
        e.preventDefault()
        setStart_timer(true)
        if(checked === null){
            setDisplay_alert(true)
            setDisplay_bodi(false)
        }else{
            setDisplay_alert(false)
            setDisplay_bodi(true)
        }

    }
 

    const [array_answer, setArray_answer] = useState([])
    const [answer_word, setAnswer_word] = useState()
    const [cheragh_white, setCheragh_white] = useState([])
    const [alert_Question, setAlert_Question] = useState(false)
    const [matn, setMatn] = useState('')
    const [dorost, setDorost] = useState(0)
    let timer;
    useEffect(()=>{
        if(start_timer){
            timer = setInterval(() => {
                setClock((e)=>e-1)
            }, 1000);

        }
        formatTime(clock)
        if(clock === 0){
            clearInterval(timer)
            payan()
        }
        return () => clearInterval(timer);

    }, [clock, start_timer])
    function formatTime(time){
        setSecound( Math.floor(time/60).toString().padStart(2,'0'));
        setMinute( (time % 60).toString().padStart(2, '0'));
    }

    function next(){
        if(numQuestion <= data[checked].length-2){
            if(answer_word !== undefined){
                setNumQuestion((e)=>++e)
                setCheragh_white([...cheragh_white, numQuestion+1])
                answer()
                setArray_answer([...array_answer, answer_word])
            }
        }
    }
    function prev(){
       if(numQuestion >= 1){
            setNumQuestion((e)=>--e)
            const newArray = array_answer.slice(0,array_answer.length - 1)
            setArray_answer(newArray)
            const newCheragh = cheragh_white.slice(0,cheragh_white.length - 1)
            setCheragh_white(newCheragh)
        }
        console.log(array_answer)
    }
    function answer(e){
        setAnswer_word(e)
    }
    function payan(){
        clearInterval(timer)
        setAlert_Question(true)
        setDisplay_bodi(false)
        setMatn('ازمون به پایان رسید')
        
        for(let i=0; i<data.length; i++){
            if(data[i].answer === array_answer[i]){
                setDorost((e)=>++e)
            }else{
                console.log("fghjk")
            }
        }
    }
    return (
        <div>
            <div class="alert_question" className={display_alert ? "alert_question display_block" : " display_none"}>
                <div class="matnsathsoal">لطفا سطح سوالات خود را مشخص کنید</div>
                <form onSubmit={aply}>
                    <div class="sath">
                        <label>
                            <span>اسان</span>
                            <input class="inp" type="checkbox" value="easy" onChange={(e)=>setchecked(e.target.value)}/>
                        </label>
                        <label>
                            <span>متوسط</span>
                            <input class="inp" type="checkbox" value="normal" onChange={(e)=>setchecked(e.target.value)}/>
                        </label>
                        <label>
                            <span>سخت</span>
                            <input class="inp" type="checkbox" value="hard" onChange={(e)=>setchecked(e.target.value)}/>
                        </label>
                    </div>
                    <div class="aplyDiv">
                        <button class="aply">شروع </button>
                    </div>
                </form>
            </div>

            
            <div className={display_bodi ? 'bodi display_block' : 'bodi display_none'}>

                <div class="ti">
                    <p class="zaman_baghi_mandeh">زمان باقی مانده : <span id="timer">{minute} : {secound}</span></p>
                </div>

                <div class="question">{data && data[checked][numQuestion].queez}</div>
                <div class="answer">
                    <div class="cheragh-org">
                        {cheragh_white && cheragh_white.map((e)=>(
                            <span key={e} className='cheragh' style={{background : 'white'}}>{e}</span>
                        ))}
                    </div>
                    <ul class="choice">{data && data[checked][numQuestion].choice.map((e, i)=>(
                        <li key={i}>
                            <label onClick={()=>answer(e)}>{e}
                                <input type="radio" name="dynradio"/>
                            </label>
                        </li>
                    ))}</ul>
                </div>
                <div class="massage"></div>
                <div class="text"></div>
                <div class="buttn">
                    <button class="next charkhesh" onClick={()=>next()}>سوال بعدی</button>
                    <button class="prev charkhesh" onClick={()=>prev()}>سوال قبلی</button>
                    {/* <button class="reload charkhesh">صفحه نخست</button> */}
                </div>
                
            </div>
            





            <div className={alert_Question ? 'queezover display_block' : 'display_none'}>
                <div class="matnqueezover">{matn}</div>
                <span class="cheraghover">
                    {cheragh_white.filter(e => e <= dorost).map((e)=>(
                        <span key={e} className='cheragh' style={{background : 'green'}}>{e}</span>
                    ))}
                </span>
                <p class="scor">تعداد {dorost} جواب درست از {data && data[checked].length} تا</p>
                <NavLink to={"https://smartgit2831.github.io/question"}><button class="butover">صفحه نخست</button></NavLink>
            </div>
        </div>
    )
}
