import "./login.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function Login() {

  const user = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        username, password
      },{withCredentials: true})
      user.updateUser(res.data);
      navigate("/profile");
      
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      console.log('ending trycatch');
      setIsLoading(false);
    }
    
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && (
            <div>
              <span>{error}</span>
            </div>
            )
          }
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
