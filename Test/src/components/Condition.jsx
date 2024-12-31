import React from 'react'
import { useState } from 'react'

const Condition = (props) => {

    const [status , setStatus] = useState('');

    const User = () => {
        if(status == 'Offline') 
        {
            setStatus('Online');
        }
        else
        {
            setStatus('Offline');            
        }
        

    }

  return (
    <div>
       <p>User is</p>
    </div>
  )
}

export default Condition
