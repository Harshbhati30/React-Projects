import { useEffect } from "react";
import { useState } from "react";

let End = () => {

  const [time, setTime] =useState(new Date());

  useEffect(() => {
    const intervalId =setInterval(() =>{
      setTime(new Date());
    }, 1000)

    return () =>{
      clearInterval(intervalId);
    }
  })
  return (
    <p>The current time is : {time.toLocaleDateString()} - { time.toLocaleTimeString()}</p>
  )
}

export default End;