import style from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [calVal, setCalVal]=useState("");
  const onButtonClick =(buttonText) =>{
    if(buttonText === 'C'){
      setCalVal("");
    }
    else if(buttonText=== '='){
      const result=eval(calVal);
      setCalVal(result);
    }
    else{
      let newdisplayvalue=calVal + buttonText;
      setCalVal(newdisplayvalue);
    }
  }

  return  <div className={style.calc}>

    <Display displayValue={calVal}> </Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    
  </div>
}

export default App
