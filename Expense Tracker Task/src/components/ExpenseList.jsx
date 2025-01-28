import React from 'react'

const ExpenseList = () => {
  return (
    <div className='bg-slate-200 h-svh'>
      <div>
        <h1 className="text-3xl font-semibold text-center pt-6">Expense List</h1>
        <div className='grid grid-cols-3'>
        <div className="flex justify-center mt-5">
          <div className="grid grid-cols-2 w-fit gap-y-3 border-2 border-black p-6">
            <p className="text-xl">Amount</p>
            <p className="text-xl">20000</p>
            <p className="text-xl">Description</p>
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, quas.</p>
            <p className="text-xl">Category</p>
            <p className="text-xl">Travel</p>
            <div className="col-span-2 flex justify-center">
            <button className=" bg-blue-500 text-center px-4 py-2 rounded-sm">Delete</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseList
