import './App.css'
import New from './components/New'
import ContextProvider from './Context/ContextProvider'


function App() {

  return (
    <ContextProvider>
      <New/>
    </ContextProvider>
  )

}

export default App
