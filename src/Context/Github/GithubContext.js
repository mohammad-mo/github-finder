import { createContext, useState } from "react"

const GithubContext = createContext()

const GUTHUB_URL = process.env.REACT_APP_GITHUB_URL
const GUTHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) =>
{
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () =>
    {
        const response = await fetch(`${GUTHUB_URL}/users`, {
            // headers: 
            // {
            //     Authorization: `token ${GUTHUB_TOKEN}`
            // }
        })

        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    return <GithubContext.Provider value={{
        users,
        loading,
        fetchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext