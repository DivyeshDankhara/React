import React from 'react'
import {useState , useEffect} from 'react'


const Effect = (props) => {

    const [data , setData] = useState([]);

    console.log('Data' , data);
    

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => setData(res))
  } , [])

  

  return (
    <div>
    {
      data.map(item = () => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        )
      } )
    }
    </div>
  )
}

export default useEffect
