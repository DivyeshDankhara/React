import React from "react";
import { useState } from "react";

const TaskForm = ({addData}) => {

    const[taskName , setTaskName] = useState("");
    const[taskDescription , setTaskDescription] = useState("");
    const[taskStatus , setTaskStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(prev=>[...prev,{
            taskName,
            taskDescription,
            taskStatus
        }])

        setTaskName("");
        setTaskDescription("");
        setTaskStatus("Pending");
    }

  return (
    <div>
      <div className="bg-blue-200 h-svh flex flex-col justify-center items-center">
        <h1 className="text-5xl font-normal">Task Form</h1>
        <br />
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="bg-blue-400 py-12 px-20 border border-black rounded-md grid grid-cols-2 gap-y-4">

            <h1 className="text-lg">Task Name : </h1>
            <input type="text" name="" id="" value={taskName} onChange={(e)=>setTaskName(e.target.value)} required/>

            <h1 className="text-lg">Description : </h1>
            <input type="text" name="" id="" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} required/>

            <br />

            <div className="col-span-2 flex justify-center">
              <button className="bg-blue-600 px-4 py-2 border border-black rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
