import React, { Component } from 'react'
import touch from '../images/Touch.png'
import brain from '../images/brain.png'
import skull from '../images/skull.png'
import scared from '../images/scared.png'
import Logo from '../images/logo.png'

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
                  color: rgb(247, 161, 2);
              }
              .top_rul{
                display: flex;
                justify-content: space-between;
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
                  font-size: 200px;
                  margin: 0;
                  font-style: italic;
                  text-align: end;
                  text-decoration: underline;
              }
              .itl{
                  font-style: italic;
                  font-weight: bold;
              }
              .shadow1{
                  color: rgb(199, 0, 0);
                  text-shadow: 3px 3px 0px rgb(247, 161, 2);
              }
              .mg_shadow{
                  color: rgb(199, 0, 0);
                  text-shadow: 10px 10px 0px rgb(247, 161, 2);
              }
              .aimge{
                float: left;
                margin-right: 20px
              }
              main{
    
                padding-right: 20%;
                padding-left: 20%;
                padding-top: 50px;
                padding-bottom: 50px;
                background-color: rgb(250, 250, 250);
            }
            `}
        </style>
        <main>
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
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>
          <p className="big_r mg_shadow">RULES</p>
        </main>
      </>
    )
  }
}
