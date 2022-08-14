import logo from './logo.svg';
import ProfilePhoto from "./Component/profiles/ProfilePhoto";
import FullName from "./Component/profiles/FullName";
import Address from "./Component/profiles/Address";
import './App.css';

function App() {
  return  <div className="container">
    <div className="row ">
      <div className="col-md-5 col-sm-12"><ProfilePhoto /></div>
      <div className="col-md-7 col-sm-12"><div className="card" ><FullName /> <Address /></div></div>
    </div>
  </div>
}

export default App;
