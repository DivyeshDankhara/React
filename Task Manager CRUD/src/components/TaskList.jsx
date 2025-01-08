import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const TaskList = ({taskData}) => {
  return (
    <div className='flex justify-center h-svh bg-green-200'>
        <div className='w-[500px]'>
            <h1 className="text-5xl font-normal text-center mt-5">Task List</h1>
            <div className='border  flex bg-green-400 justify-between py-2 px-2 rounded-md flex items-center mt-5'>
                <h1 >Name</h1>
                <div className='flex gap-2'>
                    <button className='bg-green-800 py-2 px-4 rounded-sm'>Status</button>
                    <button className='bg-blue-600 py-2 px-4 rounded-sm'><FaEdit /></button>
                    <button className='bg-red-600 py-2 px-4 rounded-sm text-lg'><MdDeleteOutline /></button>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskList
