import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {

    const[count , setCount] = useState(0)

    const[isRun , setIsRun] = useState(false)

    const refInput = useRef()
    console.log(refInput)

    useEffect(() => {
        if(isRun){
            refInput.current = setInterval(() => {
                setCount((count) => count + 1)
            } , 1000)
        }
        else{
            clearInterval(refInput.current)
        }

        return () => clearInterval(refInput.current)
    },[isRun])


    const handleStart = () => {
        setIsRun(true)
    }
    const handlePause = () => {
        setIsRun(false)
    }
    const handleReset = () => {
        setIsRun(false)
        setCount(0)
    }

  return (
    <div className='bg-blue-400'>
        <p className='px-4 py-2 m-3 rounded-full w-fit text-center w-full'>{count}</p>
        <button onClick={handleStart} className='p-1.5 bg-blue-200 m-2 border-2 border-solid border-black'>Start</button>
        <button onClick={handlePause} className='p-1.5 bg-blue-200 m-2 border-2 border-solid border-black'>Pause</button>
        <button onClick={handleReset} className='p-1.5 bg-blue-200 m-2 border-2 border-solid border-black'>Reset</button>
    </div>
  )
}

export default Counter  