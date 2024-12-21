import React from 'react'
import { useState , useEffect } from 'react'

const Counter = () => {

    const [time , setTime] = useState(0);
    const [isRun , setIsRun] = useState(false);
    const [inputValue , setInputValue] = useState('');

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

    const handleInput = (e) => {
        const value = parseFloat(e.target.value ) 
        setTime(value)
    }

    const start = (e) => {
        if(inputValue){
            setIsRun(true)
        }
    }

    const pause = () => {
        setIsRun(false)
    }

    const reset = () => {
        setTime(0)
    }

    const minute = Math.floor(time / 60).toString().padStart(2,'0');
    const second = (time % 60).toString().padStart(2,'0');

  return (
    <div className={`h-svh`}>
        <h1 className='heading'>This is React Counter App</h1>
        <br />
        <input type="number" className='border-2 border-black' placeholder='setTime in seconds' value={inputValue} onChange={(e) => handleInput(e)} disabled={isRun} />
        <br />
        <br />
        <h2 className=''>{minute + ":" + second}</h2>
        <br />
        <div className='flex justify-center gap-10'>
        <button className='bg-blue-500 px-4 py-2 rounded-md' onClick={start} disabled={isRun}>Start</button>
        <button className='bg-green-400 px-4 py-2 rounded-md' onClick={pause}>Pause</button>
        <button className='bg-red-500 px-4 py-2 rounded-md' onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter