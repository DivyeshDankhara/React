import React from 'react'
import ComB from './ComB'

const ComA = (props) => {
  return (
    <div>
      <h1>This is ComA {props.name}</h1>
      <ComB name={props.name}/>
    </div>
  )
}

export default ComA
