import style from "./ButtonsContainer.module.css";
const ButtonContainer =({onButtonClick})=>{

  const btnNames=['C' , '1','2','+','3','4','-','6','6','*','7','8','/','=','9','0','.']; 

  return <>
  <div className={style.buttonContainer}>
    {btnNames.map(btn =>
      <button className={style.button} onClick={()=>onButtonClick(btn)}> {btn}</button>
    )}
    </div>
  </>
}

export default ButtonContainer;