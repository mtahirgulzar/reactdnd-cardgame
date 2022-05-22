import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import ace from "../img/Ace.jpg"
import king from "../img/king.png";
import queen from "../img/queen.png";
import jack  from "../img/jack.png"
import two from "../img/two.png";
import three from "../img/three.jpg";
import four from "../img/four.png";
import five from "../img/five.png";
import six from "../img/six.png";
import seven  from "../img/seven.png";
import eight  from "../img/eight.png";
import nine from "../img/nine.png";
import ten from "../img/ten.png"


const Cards = props =>{

      const cardsArray=[ace,king,queen,jack,two,three,four,five,six,seven,eight,nine,ten];

    //   function getRandomInt(max) {
    //     return Math.floor(Math.random() * Math.floor(max));
    //   }
      
  

  return(
        <div>
            <div className="card">
              <img src={cardsArray[0]} alt=""/>
              <img src={cardsArray[1]} alt=""/>
              <img src={cardsArray[2]} alt=""/>
              <img src={cardsArray[3]} alt=""/>
              <img src={cardsArray[4]} alt=""/>
              <img src={cardsArray[5]} alt=""/>
              <img src={cardsArray[6]} alt=""/>
              <img src={cardsArray[7]} alt=""/>
              <img src={cardsArray[8]} alt=""/>
              <img src={cardsArray[9]} alt=""/>
              <img src={cardsArray[10]} alt=""/>
              <img src={cardsArray[11]} alt=""/>
              <img src={cardsArray[12]} alt=""/>
            </div>
        </div>
  );  
};

export default Cards;