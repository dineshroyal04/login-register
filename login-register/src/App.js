import "./App.css";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register.js";
import HomePage from "./components/homepage/HomePage.js";

function App(){
  return (
        <div>
          <Login />
          <Register />
          <HomePage />
        </div>
  );
}
export default App;