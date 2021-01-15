import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrapper from './../../hoc/Wrapper';
import './Birthday.css';
import nidhi_2018 from "./../../img/Nidhi_Bday/2018.jpg";
import nidhi_2019 from "./../../img/Nidhi_Bday/2019.jpg";
import nidhi_2020 from "./../../img/Nidhi_Bday/2020.jpg";
import nidhi_LifeTime from "./../../img/Nidhi_Bday/Lifetime.jpg";

class Birthday extends Component {
  render () {
    return(
      <Wrapper>
        <div id="test-form" className="white-popup-block">
          <div className="Birthday-popup_box ">
            <h1 className="Birthday-Heading">HAPPY BIRTHDAY! Mrs. Nidhi Shukla <i className="fa fa-heart" style={{fontSize:"48px",color:"red"}}></i></h1>
              <div className="timeline">
              <div className="timeline-container left">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={nidhi_2018} alt="Avatar" style={{height:"400px", width:"652px"}}/>
                    </div>
                    <div className="flip-card-back">
                      <h1>11th July, 2018</h1>
                      <br/><br/>
                      <p>On this day, I didnt get a good chance to wish you a Happy Birthday. It was only 4days ago, we had our <b>Roka ceremony</b> and I am very shy kind of a person... You know that.
                      I know you were expecting a lot from me... But you know me it takes time for me to open up. But still that time was different I never showed
                      but I was also waiting for your number to talk to you.
                      And finally I got oppertunity to wish you this day....

                      <br/> So I am gonna make up for that day as well by wishing you a <b>Very Happy Birthday Ms. Nidhi Bajpai.</b>
                      <i className="fa fa-birthday-cake" style={{color:"red"}}></i> <br/>(This day we were not married right!!)
                      </p>
                      <h2>I LOVE YOU!!<i className="fa fa-heart" style={{color:"red"}}/></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-container right">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={nidhi_2019} alt="Avatar" style={{height:"400px", width:"652px"}}/>
                    </div>
                    <div className="flip-card-back">
                      <h1>11th July, 2019</h1>
                      <p>On this day, we both were not together and the only thing I could do was sending you a cake and flowers as a surprise.
                      Now I have got a lot of surprise ideas... and I want to go back in time to send you few more surprises...
                      I know you enjoyed your birthday there as well with Mishti rani, Ma, Papa and Didu... and I missed the celebration.
                      <br/> So this Birthday, I am going to miss anything and gonna make up for that day as well. <br/> <b>Happy Birthday my dear Wifey... </b></p>
                      <h2>I LOVE YOU SOO MUCH SWEETHEART!!<i className="fa fa-heart" style={{color:"red"}}></i></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-container left">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={nidhi_2020} alt="Avatar" style={{height:"400px", width:"652px"}}/>
                    </div>
                    <div className="flip-card-back">
                      <h1>11th July, 2020</h1>
                      <p>Now today, I have been waiting for this day to come... SO that I can show you how special you are to me! The most special thing on this day is that we both a together locked in a apartment...
                      <br/>You know I am not that good at surprises and all... But still this is my little effort to show you that you are my love my Queen.
                      Hope you loved this surprise because I have put in a lott of mind and effort in this.
                      There is one more surprise for you that will come right after this. So just finish reding this fast so that you can see the next Surprise..
                      <br/><b>Wishing you a very very very Happy Birthday Darling!!</b><i className="fa fa-birthday-cake" style={{color:"red"}}></i></p>
                      <h2>I LOVE YOU SOO VERY MUCH DARLING!!<i className="fa fa-heart" style={{color:"red"}}></i></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-container right">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={nidhi_LifeTime} alt="Avatar" style={{height:"400px", width:"652px"}}/>
                    </div>
                    <div className="flip-card-back">
                      <h1>11th July, Till Lifetime</h1>
                      <p><b>On this day every year in the future, I wanna promise you something:</b></p>
                        <ul className="promise-list">
                          <li> <p>I promise that we are going to celebrate your Birthday together no matter what happens.</p></li>
                          <li> <p>I promise you that I will keep trying to make you feel special on your day by organizing these small-small surprizes.</p></li>
                          <li> <p>I promise you that I will keep trying to maintain that lovely smile on your face untill my last breath.</p></li>
                          <li> <p>I promise you that I will always be there by your side in all good and bad times..</p></li>
                        </ul>
                      <h2>I LOVE YOU SOO VERY MUCH LOVE!!<i className="fa fa-heart" style={{color:"red"}}></i></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Wrapper>
    );
  }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        user: state.auth.user
    };
};

export default connect( mapStateToProps)(Birthday);
