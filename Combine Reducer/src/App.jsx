import './App.css'
import { useSelector , useDispatch } from 'react-redux'

function App() {

  const data = useSelector(state => state.reducer1)
  const data1 = useSelector(state => state.reducer2)

  console.log(data);
  console.log(data1);
  

  return (
    <>
      <h1 className='headtext'>This is App Components</h1>
    </>
  )
}

export default App
