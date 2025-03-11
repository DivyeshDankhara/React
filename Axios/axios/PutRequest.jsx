import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const PutRequest = () => {

const [rename  , setRename] = useState({
  name:"",
  email:"",
  phone:""
})

console.log('rename' , rename);


  const handleRename = async(e) => {
    e.preventDefault()
    try{
      await axios.put('http://localhost:3000/profile/fa5d' , rename )
    }
    catch(error){
      console.log(error);
    }
  }

  const handleDelete = async() => {
    try{
      await axios.delete('http://localhost:3000/profile/a818')
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className='headtext'>Put with Axios</h1>
      <form onSubmit={handleRename}>
      <input type="text" className="border rounded-2xl border-black" name="" id="" onChange={(e) => setRename({...rename , name:e.target.value})} />
        <input type="email" className="border rounded-2xl border-black" name="" id="" onChange={(e) => setRename({...rename , email:e.target.value})} />
        <input type="tel" className="border rounded-2xl border-black" name="" id="" onChange={(e) => setRename({...rename , phone:e.target.value})} />
        <button className='btn' type='submit'>submit</button>
      </form>
      <button className='btn' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default PutRequest