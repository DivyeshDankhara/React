const initialState = 20

 const Reducer = (state = initialState  , action) => {
  switch(action.type){
    case 'BUY_ITEM_1': return state - 1
    default: return state
  }
}


export default Reducer