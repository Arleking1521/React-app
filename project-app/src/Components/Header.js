import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import wpp from '../images/wpp_w.png'
import inst from '../images/inst_w.png'
import vk from '../images/vk_w.png'
import wpp_f from '../images/wpp.png'
import inst_f from '../images/inst.png'
import vk_f from '../images/vk.png'
import Logo from '../images/logo.png'

import Home from '../Pages/Home';
import Rules from '../Pages/Rules';
import About from '../Pages/About';

export default class Header extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                    *{
                        font-family: 'Macondo', serif;
                      }
                        .header{
                            background: linear-gradient(to top left,  #0191ca, #000295);
                            box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.377);
                        }
                        .menu{
                            font-size: 20px;
                            height: 100px;
                            margin: 0;
                            padding: 0;
                            display: flex;
                            align-items: center;
                        }
                        .menu a{
                            color: white;
                            font-weight: bolt;
                            text-decoration: none;
                            padding: 10px 15px;
                        }
                        .menu a:hover{
                            color: #fefc16;
                        }
                        .menu a:focus{
                            color: #fefc16;
                        }
                        .h-name{
                            letter-spacing: 5px;
                            color: #fefc16;
                            font-size: 50px;
                            font-style: italic;
                            font-weight: bold;
                            margin: 0px;
                            text-align: right;
                        }
                        .alm{
                            padding-top: 10px;
                        }
                        .main_m{
                            width:100%;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                        }
                        .top{
                            display: flex;
                            flex-direction: column;
                        }
                        footer{
                            padding-top: 30px;
                            padding-bottom: 30px;
                            padding-right: 20%;
                            padding-left: 20%;
                            background-color: #000033;
                        }
                        .foot{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            color: white;
                            font-size: 14px;
                        }
                        .soc_link{
                            border-radius: 3px;
                            transition: 0.1s;
                            margin-left: 20px;
                            padding-bottom: 10px;
                        }
                        .soc_link:hover{
                            border-bottom: 4px solid #fefc16;
                        }
                        .li_text a{
                            color: white;
                            text-decoration: none;
                            transition: 0.5s;
                            cursor:pointer;
                            padding: 5px;
                        }
                        .li_text a:hover{
                            color: #fefc16;
                        }
                        .li_text p{
                            color: white;
                            margin-top: 0px;
                        }
                        .fir_part{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                        }
                        .foot_logo img{
                            width: 80px;
                        }
                        .foot_logo{
                            margin-right: 30px;
                        }
                    `}
                </style>
                <Router>
                    <Navbar collapseOnSelect expand="md" className='header' >
                        <Container className='top'>
                            <div className='main_m'>
                                <div>
                                    <Navbar.Brand href="/" >
                                        <img src={Logo}></img>
                                    </Navbar.Brand>
                                </div>
                                <div>
                                    <Navbar.Collapse id='responsive-navbar-nav' align-right>
                                        <Nav className='menu'>
                                            <Nav.Link as={Link} to="/" > HOME </Nav.Link>
                                            <Nav.Link as={Link} to="/rules"> RULES </Nav.Link>
                                            <Nav.Link as={Link} to="/about"> ABOUT US </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </div>
                                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                            </div>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/rules' element={<Rules />} />
                        <Route exact path='/about' element={<About />} />
                    </Routes>

                    <footer>
                        <div className="foot">
                            <div className="fir_part">
                                <div className="foot_logo"><img src={Logo} alt="" /></div>
                                <div className="li_text">
                                    <p>© 2022. Almaty Quests.</p>
                                    <Navbar>
                                        <Nav.Link as={Link} to="/"> Main </Nav.Link>|
                                        <Nav.Link as={Link} to="/rules"> Rules </Nav.Link>|
                                        <Nav.Link as={Link} to="/about"> About Us </Nav.Link>
                                    </Navbar>
                                </div>
                            </div>
                            <div>
                                <a href="" className="soc_link"><img src={inst} alt="" /></a>
                                <a href="" className="soc_link"><img src={vk} alt="" /></a>
                                <a href="" className="soc_link"><img src={wpp} alt="" /></a>
                            </div>
                        </div>
                    </footer>
                </Router>

            </>
        )
    }
}
