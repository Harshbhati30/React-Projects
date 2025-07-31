import style from "./Display.module.css"
const Display =({displayValue}) =>{

  return <input type="text" value={displayValue} className={style.display} readOnly/>
}


export default Display;