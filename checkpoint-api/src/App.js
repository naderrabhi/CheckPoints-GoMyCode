import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Search from "./Component/Search/Search";
import AddUser from "./Component/AddUser/AddUser";
import Home from "./Pages/Home/Home";

function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const handleAdd = (newUser) => {
    setData([newUser, ...data]);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data));
  }, []);

  if (data)
    return (
      <div className="App">
        <Header />
        <div>
          <Search handleSearch={handleSearch} />
          <AddUser handleAdd={handleAdd} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data.filter((user) =>
                  user.name
                    .toLowerCase()
                    .trim()
                    .includes(search.toLowerCase().trim())
                )}
              />
            }
          />
        </Routes>
      </div>
    );
  return <h1>No User to Show</h1>;
}

export default App;
