import React from 'react'
import '../css/Footer.css'
export default function Footer() {
  return (
    <div className=' footer row'>
        <div className="col-6">
            <p>همراه با ما</p>
            <ul>
                <li>سوالات متداول</li>
                <li>حریم خصوصی</li>
                <li>ثبت شکایات</li>
                <li>تماس با ما</li>
            </ul>
        </div>
        <div className="col-6">
            <p>راه ارتباطی</p>
            <ul>
                <li>شماره تماس: 0000000000</li>
                <li>تلگرام: 0000000000</li>
                <li>واتساپ: 0000000000</li>
                <li>اینستاگرام: 0000000000</li>
            </ul>
        </div>
        <div className='footer_end'>
            <h3>وب سایت گیم پرتال</h3>
            <h6>تماس با پشتیبانی: 00000000000</h6>
            <h6>پاسخگویی 24ساعته 7 روز هفته</h6>
        </div>
    </div>
  )
}
