import React from 'react'
import RepoItem from './RepoItem'

const RepoList = ({ repos }) => 
{
    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body p-1 sm:p-2">
                <h2 className="text-2xl sm:text-3xl my-4 font-bold card-title">
                    Latest Respositories
                </h2>
                {React.Children.toArray(repos.map((repo) => (
                    <RepoItem repo={repo} />
                )))}
            </div>
        </div>
    )
}
 
export default RepoList