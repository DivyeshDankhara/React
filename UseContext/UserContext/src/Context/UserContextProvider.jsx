import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {

  const [user, setUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;