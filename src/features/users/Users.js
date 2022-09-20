import React from "react";
import {useSelector} from "react-redux";

// add any needed imports here

function Users() {

  const users = useSelector((state) => state.users);

  const allUsers = users.map((user, i) => {
    return (
      <li key={i}>Name: {user.username} / Hometown: {user.hometown}</li>
    )
  })

  const userCount = users.length

  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {allUsers}
        {/* In addition, display the total number of users curently in the store */}
        <br></br>
        <p>Total users: {userCount}</p>
      </ul>
    </div>
  );
}

export default Users;
