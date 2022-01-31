import React, { useEffect, useState } from "react"
import Loading from "../Layout/Loading"
import UserItem from './UserItem'

const UserResults = () => 
{
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>
    {
        fetchUsers()
    }, [])
    
    const fetchUsers = async () =>
    {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            // headers: 
            // {
            //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            // }
        })

        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {/* React.Children.toArray() method handles the key automatically in our map call */}
                {React.Children.toArray(users.map((user) => (
                    <UserItem key={user.id} user={user} />
                )))}
            </div>
        )
    }
    else
    {
        return <Loading />
    }
}
 
export default UserResults