import axios from "axios";
import React, {  useEffect, useState } from "react";

const RecordCrdu = () => {
  const [users, setUsers] = useState([]);
const [Record, setRecord] = useState("");
  const [isID, setisID] = useState(null);

  const [AddRecord, SetRecord] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  // delete Record

  const hendelDelete = async (id) => {
    console.log("Deleting record:", id);
    try {
      await axios.delete(`http://localhost:3000/Record/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error :", error);
    }
  };

  // Read Data

  const fetchData = async () => {
    await axios.get("http://localhost:3000/Record").then((res) => {
      setUsers(res.data);
    });
  };

  // Add Data

  const hendelSubmit = async (e) => {
    e.preventDefault();

    if (!isID) {
      await axios.post("http://localhost:3000/Record", AddRecord);
          SetRecord({
            name: "",
            email: "",
            contact: "",
            address: "",
          });
      fetchData();
    } else {
      await axios.put(`http://localhost:3000/Record/${isID}`, AddRecord);
      setisID(null)
      SetRecord({
        name: "",
        email: "",
        contact: "",
        address: "",
      });
      fetchData();
    }
  };

  const hendelupdate = (user) => {    
    setisID(user.id);
    SetRecord(user);
  };
const hendelChange = (e) => {
  SetRecord((prev) => ({...prev, [e.target.name]: e.target.value }));
};


  useEffect(() => {
    fetchData();
  }, []);

  const filter = users.filter((item) => {
    item.name.toLowerCase().includes(Record.toLowerCase());
  });

  console.log(filter);
  

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Record</h1>

      <div className="mb-4">
        <div className="text-center flex justify-center">
          <h2 className="text-xl font-semibold mb-2  bg-black text-white w-36 rounded">
            Add User
          </h2>
        </div>
        <form className="grid grid-cols-2 gap-4" onSubmit={hendelSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={AddRecord.name}
            required
            onChange={hendelChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={AddRecord.email}
            required
            onChange={hendelChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="contact"
            value={AddRecord.contact}
            placeholder="Contact"
            required
            onChange={hendelChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={AddRecord.address}
            required
            onChange={hendelChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isID ? "Update" : "Add User"}
          </button>
        </form>
      </div>
      <div className="flex  justify-between">
        <div className="mb-4 flex items-center">
          <p className="mr-2">Show</p>
          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p className="ml-2">Entries</p>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="search" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={Record}
            onChange={(e)=>setRecord(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <table className="user-table w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            {["#", "Name", "Email", "Contact", "Address", "Action"].map(
              (header) => (
                <th key={header} className="p-2 border">
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.contact}</td>
              <td className="p-2 border">{user.address}</td>
              <td className="p-2 border">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded mr-1"
                  onClick={() => hendelupdate(user)}
                >
                  Edit
                </button>
                <button
                  onClick={() => hendelDelete(user.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
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
  );
};

export default RecordCrdu;
