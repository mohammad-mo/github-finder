import { useState, useContext } from "react"
import GithubContext from "../../Context/Github/GithubContext"
import AlertContext from "../../Context/Alert/AlertContext"
import { searchUsers } from "../../Context/Github/GithubActions"
import Alert from "../Layout/Alert"

const UserSearch = () => 
{
    const [text, setText] = useState('')

    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        if (!text || /^\s*$/.test(text))
        {
            setAlert('Please enter something', 'error')
        }
        else
        {
            dispatch({type: 'SET_LOADING'})
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})
            setText('')
        }
    }

    return (
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <Alert />
          <form onSubmit={handleSubmit} className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-md text-black"
                placeholder="Search"
                autoFocus
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-24 sm:w-32 md:w-36 btn btn-md">
                  Go
              </button>
            </div>
          </form>
        </div>
            {users.length > 0 && (
                <div>
                    <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className="btn btn-ghost btn-md">Clear</button>
                </div>
            )}
      </div>
    )
}
 
export default UserSearch