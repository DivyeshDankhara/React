import React from "react";

const TaskCard = ({ taskData }) => {
  return (
    <div className="bg-yellow-100 h-svh">
      <h1 className="text-5xl font-normal text-center pt-5">Task Card</h1>
      <div className="grid grid-cols-2 gap-x-10 ml-40 mr-40 mt-6 gap-y-4">
        {taskData.length === 0 ? (
          <div>No Data Avilable</div>
        ) : (
          taskData.map((item, index) => {
            return (
              <div key={index} className="grid  border border-black bg-yellow-200 p-4 rounded-sm">
                <p className="text-lg font-semibold">Task Name : 
                  <span className="font-normal">{item.taskName}</span>
                </p>
                {/* <p className="text-lg ">
                  {item.taskName}
                </p> */}
                <p className="text-lg font-semibold">Task Description : 
                  <span className="font-normal">{item.taskDescription}</span>
                </p>
                {/* <p className="text-lg h-auto text-wrap">
                  {item.taskDescription}
                </p> */}
                <p className="text-lg font-semibold">Status : </p>
                <p className="text-lg ">{item.taskStatus}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskCard;
