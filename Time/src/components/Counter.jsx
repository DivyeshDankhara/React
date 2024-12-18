import React from 'react'
import { useState , useEffect } from 'react'

const Counter = () => {

    const [time , setTime] = useState(0)

    const [isRun , setIsRun] = useState(false)

    useEffect(() => {
        if(isRun && time > 0){
            let timeid = setInterval(() => {
                setTime((prev) => prev - 1 )
            } , 1000)
            return () => clearInterval(timeid)
        }
        else if(time === 0){
            setIsRun(false)
        }
    } , [time , isRun])


  return (
    <div>
        <h1 className='heading'>This is React Counter App</h1>
        <input type="number" placeholder='setTime in seconds' onChange={(e) => setTime(parseInt(e.target.value))} disabled={isRun} />
        <button className='btn' onClick={() => setIsRun(true)} disabled={isRun}>Start</button>
        <button className='btn' onClick={() => setIsRun(false)}>Pause</button>
        <button className='btn' onClick={() => setTime(0)}>Reset</button>
        <h2 className='btn'>{time > 0 ? `${time} remaining` : 'time up'}</h2>
    </div>
  )
}

export default Counter