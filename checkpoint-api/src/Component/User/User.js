import React from "react";

const User = ({ user }) => {
  return (
    <div className="card" style={{ width: 450, padding: "3%", marginTop: 25 }}>
      <h5>
        <span>FullName : </span> {user.name}
      </h5>
      <h5>
        <span>City : </span> {user.address.city}
      </h5>
      <h5>
        <span>Email : </span> {user.email}{" "}
      </h5>
      <h5>
        <span>Phone : </span> {user.phone}{" "}
      </h5>
      <h5>
        <span>Company : </span> {user.company.name}{" "}
      </h5>
    </div>
  );
};

export default User;
