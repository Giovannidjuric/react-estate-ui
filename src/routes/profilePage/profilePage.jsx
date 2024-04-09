import { useContext } from "react";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

function ProfilePage() {

  const navigate = useNavigate();

  
  const user = useContext(AuthContext)

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8800/api/auth/logout', {withCredentials: true});
      user.updateUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update"><button>Update Profile</button></Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={user.authContext.avatar || "/no-avatar.jpg"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{user.authContext.username}</b>
            </span>
            <span>
              E-mail: <b>{user.authContext.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
