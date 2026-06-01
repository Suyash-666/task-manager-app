import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
  "token",
  response.data.token
);

console.log(response.data);

alert("Login successful");

      

    } catch (error) {

      console.log(error);

      alert(
  error.response?.data?.message || "Login failed"
);

    }
navigate("/dashboard");
  };

  return (

   <div className="container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;