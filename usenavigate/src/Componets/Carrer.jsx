import React from 'react'
import {Link , useLoaderData} from 'react-router-dom';

const Carrer = () => {

const data = useLoaderData()
console.log(data);

  return (
    <div>
      <h1>This is Carrer Page</h1>
      {
        data.map((item)=>{
            return (
              <>
              <li className='' key={item.id}>
                <Link className='underline' to={`${item.id}`}>{item.title}</Link>
              </li>
              </>
            )
        })
      }
    </div>
  )
}


export const CarrerLoader = async()=>{
  const res= await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default Carrer
