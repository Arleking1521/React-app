import React, { Component } from 'react'
import touch from '../images/Touch.png'
import brain from '../images/brain.png'
import skull from '../images/skull.png'
import scared from '../images/scared.png'
import Logo from '../images/logo.png'
import back2 from '../images/back2.png'

export default class Games extends Component {
  render() {
    return (
      <>
        <style type='text/css'>
          {`
                .rul{
                  display: flex;
                  height: 50px;
                  align-items: center;
                  width: 300px;
                  margin: 25px;
              }
              .top_rul{
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .rules{
                  display: flex;
                  flex-wrap: wrap;
                  height: 200px;
                  width: 700px;
              }
              .big_r{
                  font-weight: 900;
                  font-size: 100px;
                  margin: 0;
                  font-style: italic;
                  text-align: center;
                  text-decoration: underline;
              }
              .itl{
                  font-style: italic;
                  font-weight: bold;
                  text-align: center;
              }
              .aimge{
                float: left;
                margin-right: 20px
              }
              main{
                margin: 80px 0 80px 0;
                padding-right: 20%;
                padding-left: 20%;
                padding-top: 80px;
                padding-bottom: 50px;
                background-image: url(${back2});
                background-repeat: no-repeat;
                background-position: center;
            }
            `}
        </style>
        <main>
        <p className="big_r mg_shadow">OUR RULES</p>
          <div className="top_rul">
            <div className="left_rul">
              <h3 className="itl shadow1">RULES ON THE QUESTS</h3>
              <h1 className="itl shadow1">IN FACT, EVERYTHING IS VERY</h1>
              <h1 className="itl shadow1">SIMPLE</h1>
              <p className="itl">The most important thing for us is that you have a good time</p>
              <p className="itl">In addition, do not forget</p>
              <div className="rules">
                <div className="rul"><img src={touch} alt="" width="40px" className='aimge' /> DO NOT TOUCH THE ACTORS</div>
                <div className="rul"><img src={brain} alt="" width="40px" className='aimge' /> THINK WITH YOUR BRAINS</div>
                <div className="rul"><img src={skull} alt="" width="40px" className='aimge' /> DO NOT LOSE CONSCIOUSNESS</div>
                <div className="rul"><img src={scared} alt="" width="40px" className='aimge' /> DO NOT BE SCARED</div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}
