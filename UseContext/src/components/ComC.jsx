import { user } from "../App"

const ComC = () => {
  return (
    <div>
        <h1>This is ComC </h1>
      <user.Consumer>
        {
            (item) => {
                return(
                    <span>{item}</span>
                )
            }
        }
      </user.Consumer>
    </div>
  )
}

export default ComC