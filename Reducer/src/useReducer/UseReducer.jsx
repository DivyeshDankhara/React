import React, { useReducer } from 'react'

const initialstate = [{ cake: 10, book: 50 }]

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTCAKE":
      return [{ ...state[0], cake: state[0].cake + 1 }];
    case "DECREMENTCAKE":
      return [{ ...state[0], cake: state[0].cake - 1 }];
    case "INCREMENTBOOK":
      return [{ ...state[0], book: state[0].book + 1 }];
    case "DECREMENTBOOK":
      return [{ ...state[0], book: state[0].book - 1 }];
    default: return state
  }
}

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialstate)

  console.log("state", state);

  return (
    <>
      <div>
        <h1 className='heading'>This is UseReducer Hook in reactJS</h1>
        {/* <p className='btn'>{state[0].cake}</p>
        <p className='btn'>{state[0].book}</p> */}
        {
          state.map((item,index)=>{
            return(
                <ul key={index}>
                  <li className='btn'>{item.cake}</li>
                  <li className='btn'>{item.book}</li>
                </ul>
            )
          })
        }
      </div>
      <button className='btn' onClick={() => dispatch({ type: "INCREMENTCAKE" })}>Increment</button>
      <button className='btn' onClick={() => dispatch({ type: "DECREMENTCAKE" })}>Decrement</button>
      <button className='btn' onClick={() => dispatch({ type: "INCREMENTBOOK" })}>Increment</button>
      <button className='btn' onClick={() => dispatch({ type: "DECREMENTBOOK" })}>Decrement</button>
    </>
  )
}

export default UseReducer
