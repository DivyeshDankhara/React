import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskCard from './components/TaskCard';


function App() {

  const[taskData , setTaskData] = useState([]);

  console.log(taskData);
  

  return (
    <>
    <TaskForm addData={setTaskData}/>
    <TaskList taskData={taskData}  setTaskData={setTaskData}/>
    <TaskCard taskData={taskData}/>
    </>
  )

}

export default App
