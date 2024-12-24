import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
function App() {

  return (
    <>
    <h1 className="heading">This is App Components</h1>
      <UserContextProvider>
        <Profile />
        <Login />
      </UserContextProvider>
    </>
  );
}

export default App;