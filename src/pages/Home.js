import { useState } from 'react';
import '../css/Home.css'
export default function Home() {
    function disableselect(e){return false};
    function reEnable(){return true};
    document.onselectstart = new Function('return false');
    if(window.sidebar){
        document.onmousedown = disableselect();
        document.onclick = reEnable();
    }

    const word = ['ا',' ','ب',' ','پ',' ','ت',' ','ث',' ','ج',' ','چ',' ','ح',' ','خ',' ','د',' ','ذ',' ','ر',' ','ز',' ','ژ',' ','س',' ','ش',' ','ص',' ','ض',' ','ط',' ','ظ',' ','ع',' ','غ',' ','ف',' ','ق',' ','ک',' ','گ',' ','ل',' ','م',' ','ن',' ','و',' ','ه','','ی'];
    // گرفتن هر کلمه وقتی کلیک شد
    const [whrite, setWhrite] = useState([])
    function Click(e){
        setWhrite([...whrite, e])
    }
    // حذف کلمات
    function Delete(){
        const newWhrite = whrite.slice(0, -1)
        setWhrite(newWhrite)
    }
    // ضرب المثل ها 
    const question = ['ان کیست که در ابتدا چهار پا دارد سپس دو پا و در نهایت سه پا',
    'چه اختراعی به شما اجازه می دهد ان طرف دیوار را نگاه کنید',
    'همراه چای است و همرنگ برف هم طعم عسل استو هم بوی اب',
    'کدام کلید است که هیچ دری را باز نمی کند',
    'کدام خانه بیشترین کتاب ها را دارد',
    'دارا ان را ندارد و ندار ان را دارد',
    'چیزی است که هم در اشپزخانه وجود دارد هم اتومبیل',
    'در گوش و چشم هست ولی در دهان نیست',
    'کدام حیوان را اگر برعکس کنید قرمز می شود',
    'ان کدام شبه فلزی است که اگر وارونه اش کنید نوعی سبزیجات می شود',
    'بدون هیچ علم و دانشی همه چیز را همانگونه که هست اشکار می سازد',
    'نوعی غذای فرنگی که هم خوردنش در ایران رواج دارد و هم در وسطش رود ایرانی قرار گرفته است',
    'دیده و چشیده نمی شود و با دستان هم لمس نمی گردد اما همه جا هست و همه به او نیاز دارند',
    'ان چیست که بدنش زرد است و لباسش سبز و موهایش سفید',
    'ان چیست که از ته پر می شود و از بالا خالی',
    'ان چیست که همه ان را می بینند ولی خدا ان را نمی بیند',
    'کدام حیوان است که از هر سوی که نگاهش کنید ادم را می درد',
    'چه چیزی را می توانید بگیرید اما پرتاب نکیند',
    'من زنده نیستم اما رشد می کنم من ریه ندارم اما به هوا احتیاج دارم ',
    'چه چیزی انقدر شکننده است که گفتن نامش ان را می شکند',
    'ان چیست که دو پا دارد و دو پای دیگر هم قرض می کند و می رود',
    'وقتی دو حرف به ان اضافه می کنید کدام کلمه پنج حرفی کوتاهتر می شود',
    'ان چیست که حول حیات خلوت می چرخد اما حرکت نمی کند',
    'ان کیست که هرچی اصلاح می کند باز نا مرتب است',
    'کلمه ای که همه می توانند ان را درست بنویسند',
    'گیاهی که نصفش لنگ است و نصف دیگرش غصه',
    'یک واژه بگویید که همه حروف در ان باشد',];

    // گرفتن ضرب المثل تصادفی
    const [random_question , setRandom_question] = useState(0)
    const [random_question_array, setRandom_question_array] = useState([])
    function start(){
        setRandom_question(Math.floor(Math.random() * question.length));
        setRandom_question_array([...random_question_array ,random_question]);

        setanimate(false)
        for(let i=0; i<random_question_array.length; i++){
            if(random_question === random_question_array[i]){
                if(random_question_array.length === 27){
                    Alert_victory();
                }else{
                    setRandom_question(Math.floor(Math.random() * question.length));
                }
            }else{
                if(random_question_array.length === 27){
                    Alert_victory();
                }
            }
        }
    }

    // راهنمایی به بازیکن
    let array_number_word = [5,5,3,7,8,4,3,1,3,4,3,8,3,4,4,4,3,9,3,4,6,5,4,7,4,4,5];

    // نادرست
    const [trueORfalse, setTrueORfalse] = useState()
    const [animate, setanimate] = useState(false)
    const [animate1, setanimate1] = useState(false)
    function False(){
        setWhrite('')
        setTrueORfalse('نادرست')
        setGameOver((e)=>--e)
        setanimate1(true)
        setTimeout(() => {
            setanimate1(false)
        }, 2000);
        if(gameOver === 1){
            Alert_Game_Over();
        }

    }
    // درست
    function True(){
        setTrueORfalse('درست')
        setanimate(true)
        setTimeout(() => {
            start();
        }, 2000);
        setWhrite('')
        // random_question_array.push(random_question);
        setNum((e)=>++e)
    }



    // تست کردن جواب ها
    const [num, setNum] = useState(0)
    const [gameOver, setGameOver] = useState(3)
    function test(){
        const javab = ['انسان', 'پنجره', 'قند', 'کلیدبرق', 'کتابخانه', 'نقطه', 'گاز', 'ش', 'خرس', 'جیوه', 'اینه', 'ماکارونی', 'هوا', 'بلال', 'تفنگ', 'خواب', 'گرگ', 'سرماخوردگی', 'اتش', 'سکوت', 'دوچرخه', 'کوتاه', 'حصار', 'ارایشگر', 'درست', 'شلغم', 'الفبا']
        for(let i=0; i<question.length; i++){
            if(question[random_question] === question[i]){
                if(whrite.join('') === javab[i]){
                    True()
                }else{
                    False()
                }
            }
        }
    }

    const [alert_game_over, setAlert_game_over] = useState(false)
    const [alert_whrite_gameover, setAlert_whrite_gameover] = useState()
    function Alert_Game_Over(){
        setAlert_game_over(true);
        setAlert_whrite_gameover('Game Over');
    }
    function restart(){
        window.location.reload()
    }
    function Alert_victory(){
        setAlert_game_over(true);
        setAlert_whrite_gameover('Victory');
    }
    return (
        <div className='chistan'>
            <div className={alert_game_over ? "alert_block " : "alert"}>
                <h5 className="vic_or_ove">{alert_whrite_gameover}</h5>
                <div className="row">
                    <div className="col-6 victor">
                        <span className="note"> جواب : </span><span className="javab_alert note">{trueORfalse}</span>
                    </div>
                    <div className="col-6">
                        <span className="note">سطح:</span><span className="level_alert note">{num}</span>
                    </div>
                </div>
                <button className="button_alert" onClick={()=>restart()}>play again</button>
            </div>
            <div className={alert_game_over ? "word_div opacity": "word_div"} >
                {word.map((e)=>(
                    <span className="a stickman" onClick={()=>Click(e)} style={{padding: '5px', borderRadius: '8px'}}>{e}</span>
                ))}
            </div>
            <div className={alert_game_over ? "wrapper opacity" : "wrapper"}> 
                <p></p>
                <div className="detail">
                    <div className="row">
                        <div className="col-6">
                            <span className="mylives"> فرصت: </span><span className={animate1 ? "mylives absolute animate__animated animate__heartBeat" : "mylives"}>{gameOver}</span>
                        </div>
                        <div className="col-6">
                            <span className="mylives">سطح : </span><span className={animate ? " mylives level animate__animated animate__bounce" : "mylives level"}>{num}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className={animate1 ? "col-6 animate__animated animate__wobble" : "col-6"}>
                            <span className="mylives javab"> جواب : </span><span className={animate ? "sahih mylives animate__animated animate__rotateInUpRight" : "sahih mylives"}>{trueORfalse}</span>
                        </div>
                        <div className="col-6">
                            <p><sapn className="clue"> تعداد حروف:</sapn><span className={animate ? "animate__animated animate__flash":""}>{array_number_word[random_question]}</span></p>
                        </div>
                    </div>
                </div>
                <p className="question">{question[random_question]}</p>
                <p className="fg">{whrite}</p>
                <div className=" row">
                    <div className="col-6">
                        <button className="hint" onClick={()=>test()}>تست</button>
                    </div>
                    <div className="col-6">
                        <button className="delete" onClick={()=>Delete()}>حذف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
