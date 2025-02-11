import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { buy } from './Action.jsx'




const Redux = () => {

  const data = useSelector(state => state)

  console.log('data'  , data);
  

  const dispatch = useDispatch()

  return (
    <div>
      <h2 className='bg-blue-200 text-xl text-center text-2xl '>This is React-Redux</h2>
      <button className='bg-blue-600 py-2 px-4 text-white' onClick={() => dispatch(buy())}>click</button>
    </div>
  )
}

export default Redux


