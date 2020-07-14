import React, { Component } from 'react';
import IdCard from "./Components/IdCard"
import Greetings from './Components/Greetings';
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";
import CreditCard from "./Components/CreditCard";
import Rating from "./Components/Rating";

const App = () => {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="178"
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="O'Brien"
        firstName="Delores"
        gender="female"
        height="172"
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings name="Markus" lang="de"></Greetings>
      <Greetings name="François" lang="fr"></Greetings>
 

      <h1>Random</h1>
      <div className="box">
        <Random min={1} max={6}/>
      </div>
      <div className="box">
        <Random min={1} max={100}/>
      </div>

      <h1>Box Color</h1>
      <div className="BoxColor">
        <BoxColor back="rgb(255,0,0)" color="white">#ff0000</BoxColor>
      </div>
      <div className="BoxColor">
        <BoxColor back="rgb(128,255,0)" color="#black"></BoxColor>
      </div>

      <h1>CreditCard</h1>
      <CreditCard 
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
      <CreditCard 
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" 
      />
      <CreditCard 
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />

      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

    </div>
  );
}

export default App;
