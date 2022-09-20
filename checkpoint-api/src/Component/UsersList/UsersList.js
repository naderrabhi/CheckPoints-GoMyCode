import React from "react";
import User from "../User/User";

const UsersList = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 25,
      }}
    >
      {data.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
