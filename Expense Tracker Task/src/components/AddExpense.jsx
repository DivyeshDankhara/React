import React from "react";

const AddExpense = () => {
  return (
    <div>
      <div className="bg-slate-400 h-svh">
        <h1 className="text-3xl font-semibold text-center pt-6">Add Expense</h1>
        <div className="flex justify-center mt-5">
          <div className="grid grid-cols-2 w-fit gap-y-3 border-2 border-black p-6">
            <p className="text-xl">Amount</p>
            <input type="text" name="" id="" />
            <p className="text-xl">Description</p>
            <input type="text" />
            <p className="text-xl">Category</p>
            <select name="cars" id="cars">
              <option value="/">Select</option>
              <option value="home">Home</option>
              <option value="travel">Travel</option>
              <option value="medicine">Medicine</option>
              <option value="restaurant">Restaurant</option>
            </select>
            <div className="col-span-2 flex justify-center">
            <button className=" bg-blue-500 text-center px-4 py-2 rounded-sm">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
