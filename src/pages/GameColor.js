import { useState } from 'react';
import '../css/GameColor.css'
export default function GameColor() {
  const color = ['rgb(254, 20, 20)', 'rgb(9, 9, 255)', 'rgb(252, 178, 191)', 'rgb(255, 255, 0)', 'rgb(110, 110, 110)', 'rgb(135, 47, 47)'];
  const one_color = ['rgb(177, 68, 68)', 'rgb(35, 35, 156)', 'rgb(204, 164, 171)', 'rgb(219, 219, 89)', 'rgb(158, 155, 155)', 'rgb(85, 29, 29)']
  const squarcount = [
  {'num':0, 'item':false},
  {'num':1, 'item':false},
  {'num':2, 'item':false},
  {'num':3, 'item':false},
  {'num':4, 'item':false},
  {'num':5, 'item':false},
  {'num':6, 'item':false},
  {'num':7, 'item':false},
  {'num':8, 'item':false},
  {'num':9, 'item':false},
  {'num':10, 'item':false},
  {'num':11, 'item':false},
  {'num':12, 'item':false},
  {'num':13, 'item':false},
  {'num':14, 'item':false},
  {'num':15, 'item':false}];
  
  const [one_colors, setOne_colors] = useState();
  const [colors, setColors] = useState();
  const [squarcount1, setSquarcount1] = useState([])
  const [width, setWidth] = useState()
  const [counterWidth, setCounterWidth] = useState()
  const [num, setNum] = useState(0)
  const [true_false, setTrue_false] = useState(false)
  const [true_false_gameOver, setTrue_false_gameOver] = useState(false)
  const [state, setState] = useState()
  const array_width = [45,43,40,38,35,33,30,28,25,23,20,18,15,13,10, 8, 5, 3, 1]
  const counter_width = [222,222,222,222,180,180,165,155,140,135,124,124,100,94,85, 75, 61, 55, 45]
  function play(){
    setTrue_false(true)
    const random = Math.floor(Math.random() * color.length)
    setColors(color[random])
    setOne_colors(one_color[random])
    const Squarcount2 = [...squarcount]
    Squarcount2[Math.floor(Math.random() * squarcount.length)].item = true
    setSquarcount1(Squarcount2)
    setNum((e)=>++e)
    setWidth(array_width[num])
    setCounterWidth(counter_width[num])
  }
  
  function reload(){
    window.location.reload()
  }

  const [game_over, setGame_Over] = useState(3);
  function select(colors_select){
    if(colors_select.item === false){
      if(squarcount1[colors_select.num].item === colors_select.item){
        setGame_Over((e)=>--e)
      }
    }else if(colors_select.item === true){
      if(squarcount1[colors_select.num].item === colors_select.item){
        play()
        console.log("first")
      }
    }

    if(game_over === 1){
      setTrue_false_gameOver(true)
      setState('Gamae Over')
    }
  }
  return (
    <div className='GameColor'>
      <div class="alert" style={true_false_gameOver ? {display : 'block'} : {display : 'none'}}>
          <h4 class="aler_h4">{state}</h4>
          <div class="row">
              <div class="col-6">
                  <button onClick={()=>reload()}>Play</button>
              </div>
              <div class="col-6">
                  <span>مرحله :</span><span class="sath">{num}</span>
              </div>
          </div>
      </div>
      <div class="Body">
          <div class="item">
              <div class="score_div">
                  <span class="marhale_matn">مرحله  </span><span class="forsat">{num}</span>
              </div>
              <div class="score_div">
                  <span class="marhale_matn">فرصت  </span><span class="forsat">{game_over}</span>
              </div>
          </div>
          <div class="counter" style={{width : `${counterWidth}px`}}>
              <div class="container" id="container">{squarcount1.map((e)=>(
                <div className='squar' onClick={()=>select(e)} style={e.item ? {background : `${one_colors}`, width : `${width}px` , height : `${width}px`} : {background : `${colors}`, width : `${width}px` , height : `${width}px`}}></div>
              ))}</div>
          </div>
          <div>
            <button onClick={()=>play()} style={true_false ? {display: 'none'} : {display : 'block'}}>play</button>
          </div>
      </div>
    </div>
  )
}
