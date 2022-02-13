import { useState } from "react";
import "./App.css";
import imagem from "./f2.jpg";


function App() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((userResponse) => setUserData(userResponse));
  };
  console.log(userData);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container text-center">
      <h1 className="py-5 text-upercase">GitHub profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                {" "}
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src={imagem}
            className="responsive rounded-circle"
            alt=""
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt=""
              height="200px"
            />
            <h1 className=" pt-5">
              <a href={userData.html_url} target="blank">
                {userData.name}
              </a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="blank" className="badge bg-primary text-wrap">
              {userData.blog} 
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
