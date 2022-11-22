import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../images/logo.png';
import Pop_up from '../Components/Pop_up';

import Castle from '../images/Castle.png';
import Cave from '../images/Cave.png';
import Pirates from '../images/Pirates.png';
import back from '../images/back.png'
import sign from '../images/table.png'

export default class Home extends Component {
  render() {
    return (
      <>
        <style type='text/css'>
          {`
            
            .name_logo{
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              margin-bottom: 50px;
              color: var(--p);
            }
            .name{
              text-align: center;
              font-size: 125px;
              font-weight: 900;
            }
            .comp{
              margin: 100px 0px 100px 0px;
            }
            .Wiaq{
              font-size: 25px; 
              padding-left: 30px;
              text-align: center;
            }
            main{
              padding-right: 20%;
              padding-left: 20%;
              padding-top: 50px;
              padding-bottom: 50px;
              background-color: rgb(250, 250, 250);
            }
            .future_games{
              min-height: 600px;
              width: 100%;
              height: 100%;
            }
            .f_games{
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100px;
              text-align: center;
              font-size: 50px;
              font-weight: 700;
              color: #02014e;
              text-shadow: 0px 0px 5px #000;
              margin-bottom: 50px;
              text-decoration: underline;
            }
            .games_all{
              display: flex;
              justify-content: space-around;
              align-items: center;
              padding: 50px 0px 50px 0px;
              background-size: 100%;
              border-radius: 40px;
            }
            .games{
              height: 300px;
              width: 200px;
              transition: 1s;
              z-index:9;
              box-shadow: 0px 0px 20px #000;
              border-radius: 10px;
            }
            .games:active{
              transform: scale(2.0);
              overflow: hidden;
                z-index:9;
            }
            .game{
              width: 100%;
              height:100%;
              border-radius: 10px;
            }
            .buttons{
              display: flex;
              justify-content: space-around;
              margin-bottom: 50px;
              z-index: -99999999;
            }
            .log_in{
              padding: 15px 20px 0 20px;
              border: none;
              position: relative;
              color: black;
              background: white;
              font-size: 15px;
              font-weight: 900;
              cursor: pointer;
              width: 150px;
              height: 80px;
              transition: 0.5s;
              background-image: url(${sign});
              z-index: 1;
              background-size: 100%;
              background-repeat: no-repeat;
            }
            .pgame{
              color: white;
              text-align: center;
              margin-top: 15px;
              letter-spacing: 5px;
              font-weight: bold;
            }
            .log_in:hover{
              color: white;
            }
          `}
        </style>

        <Container className='main'>
          <div className='name_logo'>
                <img
                  src={Logo}
                  alt="Logo"
                  className='comp'
                />
              <p className='Wiaq'> Quests in Almaty are a great opportunity to relax with family and friends. It's time to get out of the room! Reality quests are one of the most popular entertainments in Almaty. Here you will find information about the best quest rooms from different companies! </p>

          </div>
          <div className="future_games">
            <div className="f_games">UPCOMING EVENTS:</div>
            <div className="games_all" style={{backgroundImage: `url(${back})`}}>
              <div className="games"><img src={Castle} className="game" /> <p className='pgame'>CASTLE</p> </div>
              <div className="games"><img src={Cave} className="game" /> <p className='pgame'>CAVE</p></div>
              <div className="games"><img src={Pirates} className="game" /><p className='pgame'>PIRATES</p></div>
            </div>
            <div className='buttons' >
              <Pop_up name='Castle' />
              <Pop_up name='Cave' />
              <Pop_up name='Pirates' />
            </div>

          </div>


        </Container>
      </>
    )
  }
}
