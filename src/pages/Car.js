import { useState } from 'react'
import '../css/Car.css'

export default function Car() {
    const amalgar = ['%','/','*','-','+'];
    const array = [
        {"item" : 'حذف', "active":false},
        {"item":'%', "active":false},
        {"item":'/', "active":false},
        {"item":'C', "active":false},
        {"item":'*', "active":false},
        {"item":'9', "active":true},
        {"item":'8', "active":true},
        {"item":'7', "active":true},
        {"item":'-', "active":false},
        {"item":'6', "active":true},
        {"item":'5', "active":true},
        {"item":'4', "active":true},
        {"item":'+', "active":false},
        {"item":'3', "active":true},
        {"item":'2', "active":true},
        {"item":'1', "active":true},
        {"item":'=', "active":false},
        {"item":'.', "active":true},
        {"item":'0', "active":true},
        {"item":'', "active":true}];
    const [num , setNum] = useState([]);
    const [javab , setJavab] = useState();
    

    function mohasebe(e){
    
        if(e === '='){
            // console.log("=");
            let join_item = num.join('');
            // console.log(join_item)
            // console.log(Number(join_item))
            setJavab(eval(join_item))
            
        }else if(e === 'حذف'){
            // console.log("hazf")
            let newNum = num.slice(0,num.length - 1);
            setNum(newNum);
            setJavab('')
        }else if(e === 'C'){
            setJavab('');
            setNum('');
        }else{
            setNum([...num, e]);
        }
    }
  return (
    <div class="body">
        <div class="header">
            <h4 class="whrite">{num}</h4>
            <h5 class="whrite_onlin">{javab}</h5>
        </div>
        <div className='bord'>

            {array && array.map((e)=>( 
                <span className={e.active ? "box" : "box pak"} onClick={()=>mohasebe(e.item)}>{e.item}</span>
                ))
            }
        </div>
    </div>
  )
}
