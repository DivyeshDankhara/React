import { useContext } from "react"
import UserContext from "../Context/UserContext"

const Profile = () => {

    const {user} = useContext(UserContext)

  return (
    <div className="container mx-auto">
      <h1>This is Profile Page</h1>
      <span>ProfileName : {user.userName}</span><br />
      <span>Password : {user.password}</span>
    </div>
  )
}

export default Profile