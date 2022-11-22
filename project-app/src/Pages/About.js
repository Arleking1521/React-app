import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Logo from '../images/logo.png'

export default class Contacts extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                    main{
    
                        padding-right: 20%;
                        padding-left: 20%;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background-color: rgb(250, 250, 250);
                    }
                    .frame{
                        position:relative;
                    }
                    .aframe1
                    {
                        color:#eee;
                        font-size:12px;
                        position:absolute;
                        top:0px;
                    }
                    .aframe2{
                        color:#eee;
                        font-size:12px;
                        position:absolute;
                        top:14px;
                    }
                    .frdivst{
                        position:relative;
                        overflow:hidden; 
                        width: 560px;
                        height: 400px;
                        margin: 20px
                    }
                    .map{
                        box-shadow: 0px 0px 20px #000;
                        margin-top: 70px;
                        border-radius: 30px;
                    }
                    .name_logo{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 50px;
                        color: var(--p);
                        flex-direction: column;
                    }
                    .name{
                        font-size: 80px;
                        font-weight: bold;
                        color: #000;
                        text-shadow: 0px 0px 8px #000;
                        text-decoration: underline;
                        text-align: center;
                    }
                    .logo{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 50px 0 0 0;
                    }
                    .ash{
                        margin-top: 0px;
                    }
                    .fs{
                        font-Size: 70px;
                    }
                    .logop{
                        text-align: center;
                        font-size: 20px;
                    }
                }
            `}
                </style>
                <main>
                    <div className="name_logo">
                            <h1 className="name ash">ABOUT US:</h1>
                            <div className="logo"> <img src={Logo} alt="" /> </div>
                            <p className='logop'>There are a lot of scary quests, the choice is not easy, and therefore "Almaty Quests" offers a list of the best, in our opinion, horrors.</p>
                            <div className="map frdivst">
                                <a className='aframe1' href="https://yandex.kz/maps/org/1016114729/?utm_medium=mapframe&utm_source=maps">Международный университет информационных технологий</a>
                                <a className='aframe2' href="https://yandex.kz/maps/162/almaty/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps">ВУЗ в Алматы</a>
                                <iframe src="https://yandex.kz/map-widget/v1/-/CCUZBSSMXC" width="560" height="400" frameborder="0" allowfullscreen="true" title="myFrame" className='frame'></iframe>
                            </div>
                            <p>Almaty, 34A Manas str.</p>
                    </div>
                    <h1 className="name ash fs">CONTACT US:</h1>
                    <p className='logop'>E-mail: eazyquizy@quiz.com</p>
                    <p className='logop'>Phone Number: +7 (727) 320-00-00</p>
                </main>
            </>
        )
    }
}
