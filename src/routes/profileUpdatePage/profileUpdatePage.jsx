import { useContext } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

function ProfileUpdatePage() {

  const user = useContext(AuthContext);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData.entries());

    // const res = axios.post()


  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleUpdate}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input 
              defaultValue={user.authContext.username}
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              defaultValue={user.authContext.email}
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src={user.authContext.avatar || "/no-avatar.jpg"} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
