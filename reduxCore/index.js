const redux = require('redux')

// redux store

const createStore = redux.createStore

// redux action

const sell_cake = () =>{
  return{
    type:'SELL_CAKE',
  }
}

const buy_cake = () => {
  return {
    type: 'BUY_CAKE',
  }
}

const sell_book = () => {
  return {
    type:'SELL_BOOK'
  }
}

const buy_book = () => {
  return {
    type:'BUY_BOOK'
  }
}

// initialState

let initialState = {NUMOFCAKE: 10, NUMOFBOOK:10}


// reducer

const ItemReducer = (state = initialState , action) => {
  switch(action.type){
    case 'SELL_BOOK':return {...state,NUMOFBOOK:state.NUMOFBOOK - 1}
    case 'BUY_BOOK':return {...state,NUMOFBOOK:state.NUMOFBOOK + 1}
    case 'SELL_CAKE':return {...state,NUMOFCAKE:state.NUMOFCAKE - 1}
    case 'BUY_CAKE':return {...state,NUMOFCAKE:state.NUMOFCAKE + 1}
    default:return state
  }
}

// create store

const store = createStore(ItemReducer)

console.log('store' , store);

console.log('inititalState' , store.getState());

store.subscribe(() => console.log('updated state' , store.getState()))

store.dispatch(sell_book())
store.dispatch(buy_book())
store.dispatch(sell_cake())
store.dispatch(sell_cake())
store.dispatch(sell_cake())
store.dispatch(sell_cake())
store.dispatch(buy_cake())
// store.dispatch(buy_item())
// store.dispatch(buy_item())
// store.dispatch(buy_item())
// store.dispatch(buy_item())
// store.dispatch(buy_item())
// store.dispatch(item_add())
