import React from 'react'
import { useState } from 'react';

const Crud = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Liam",
      email: "liam@example.com",
      contact: "2223334444",
      address: "San Francisco",
    },
    {
      id: 2,
      name: "Liam",
      email: "liam@example.com",
      contact: "2223334444",
      address: "San Francisco",
    },
    {
      id: 3,
      name: "Liam",
      email: "liam@example.com",
      contact: "2223334444",
      address: "San Francisco",
    },
    {
      id: 4,
      name: "Liam",
      email: "liam@example.com",
      contact: "2223334444",
      address: "San Francisco",
    },
    {
      id: 5,
      name: "Liam",
      email: "liam@example.com",
      contact: "2223334444",
      address: "San Francisco",
    },
    {
      id: 6,
      name: "Liam",
      email: "liam@example.com",
      contact: "2223334444",
      address: "San Francisco",
    },
    {
      id: 7,
      name: "Liam",
      email: "liam@example.com",
      contact: "2223334444",
      address: "San Francisco",
    },
  ]);

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        CRUD (Create, Read, Update, Delete)
      </h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add User</h2>
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="search" className="mr-2">
          Search:
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="user-table w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Address</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="p-2 border text-center">{index + 1}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.contact}</td>
              <td className="p-2 border">{user.address}</td>
              <td className="p-2 border">
                <button className="bg-gray-500 text-white font-bold py-1 px-2 rounded mr-1">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <div className="mt-4">
          <p className="text-lg font-medium">Showinh 1 to 10 Entries</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
            Previous
          </button>
          <span className="py-2 px-4 border border-gray-300 rounded">1</span>
          <span className="py-2 px-4 border border-gray-300 rounded">2</span>
          <span className="py-2 px-4 border border-gray-300 rounded">3</span>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Crud
