import React, { useContext } from "react"
import Loading from "../Layout/Loading"
import UserItem from './UserItem'
import GithubContext from "../../Context/Github/GithubContext"

const UserResults = () => 
{
    const { users, loading } = useContext(GithubContext)

    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {/* React.Children.toArray() method handles the key automatically in our map call */}
                {React.Children.toArray(users.map((user) => (
                    <UserItem user={user} />
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