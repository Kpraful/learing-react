import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const IntervalId = useRef();

  function startInterval(){
    
    if(!isPaused){
      setNow(Date.now());
      setStart(Date.now());
    }
    else{
      // setNow(Date.now() - (now-start));
      // setStart(Date.now())
    }


    clearInterval(IntervalId.current);
    IntervalId.current = setInterval(()=>{
      setNow(Date.now());
    },10);

    setIsPaused(false);

  }


  function stopInterval(){
    clearInterval(IntervalId.current);
    setIsPaused(true); // Mark as paused
  }
  
  const TimeElapsed = start !== null && now !== null ? (now - start) / 1000 : 0;

  return(
  <>
    <h1> TimeElapsed is: {TimeElapsed.toFixed(3)} </h1> 
    {}
    <button onClick={startInterval}>
      {isPaused ? "Resume" : "start"}
    </button>
    <button onClick={stopInterval}>
      stop
    </button>
  </>
  )

}

export default App
