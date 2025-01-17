import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TaskList = ({ taskData, setTaskData }) => {

  const Delete = (int) => {
    const removeTask = taskData.filter((item , index) => index !== int)
    setTaskData(removeTask);
  }

  const Status = (int) => {
    
    const upadateStatus = taskData.map((item , index) => {
      if(index === int)
      {
        if(item.taskStatus == "Pending")
        {
          return{...item,taskStatus : "Complated"}
        }
        else if(item.taskStatus == "Complated")
        {
          return{...item,taskStatus : "Pending"}
        }
      }
      else{
        return item
      }
    })
    setTaskData(upadateStatus)
  }

  return (
    <div className="flex justify-center h-svh bg-green-200">
      <div className="w-[500px]">
        <h1 className="text-5xl font-normal text-center mt-5">Task List</h1>
        {taskData.length === 0 ? (
          <div>No Data Avilable</div>
        ) : (
          taskData.map((item , index) => {
            return (
              <div key={index} className="border flex bg-green-400 justify-between py-2 px-2 rounded-md flex items-center mt-5">
                <h1>{item.taskName}</h1>
                <div className="flex gap-2">
                  <div>{
                    item.taskStatus === 'Pending' ?
                    <button className="bg-yellow-400 py-2 px-4 rounded-sm" onClick={()=>Status(index)}>
                    {item.taskStatus}
                    </button> :
                    <button className="bg-green-700 py-2 px-4 rounded-sm" onClick={()=>Status(index)}>
                    {item.taskStatus}
                    </button>
                  }</div>
                  <button className="bg-blue-600 py-2 px-4 rounded-sm">
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 py-2 px-4 rounded-sm text-lg" onClick={() => {Delete(index)}}>
                    <MdDeleteOutline /> 
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskList;
