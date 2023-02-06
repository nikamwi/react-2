import React from 'react'
import Child from "./Child"

const users = [
    { name:'name1', lname:'lname1', age: 22, id:1},
    { name:'name2', lname:'lname2', age: 25, id:2},
    { name:'name3', lname:'lname3', age: 44, id:3}
  ]


export const Parent = () => {
  return (
    <Child userslist={users} isUserslogedIn={true}/>
  )
}
