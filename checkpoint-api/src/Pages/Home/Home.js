import React from "react";
import UsersList from "../../Component/UsersList/UsersList";

const Home = ({ data }) => {
  return (
    <>
      <UsersList data={data} />
    </>
  );
};

export default Home;
