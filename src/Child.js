import React from 'react'


    export default function child({userslist, isUserslogedIn}) {
  return (
    <div>
        {isUserslogedIn ? <>{userslist.length > 0 ? 
        <>
        {userslist.map((users) =>{
            return <div key={users.id}>
                <h1>{users.name} {users.lname} {users.age}</h1>
            </div>
        })}
        </> 
        : <h1>no users in the system.</h1>}</> : 
        <h1>you are not authorized to see user list.</h1>}
    </div>
  )
}
