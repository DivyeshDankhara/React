import React from 'react'
import ComC from './ComC'

const ComB = (props) => {
  return (
    <div>
      <h1>This is ComB {props.name}</h1>
      <ComC name={props.name}/>
    </div>
  )
}

export default ComB
