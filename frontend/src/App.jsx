import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transfer from "./components/Transfer";


function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  return (
    <div>
      <Router>
        <Routes>
          {!token && <Route path="/" element={<Login/>} />}
          {!token && <Route path="/login" element={<Login/>} />}
          {!token && <Route path="/signup" element={<SignUp/>} />}
          {token && <Route path="/dashboard" element={<Dashboard/>} />}
          {token && <Route path="/transfer" element={<Transfer />} />}
          {token && <Route path="/" element={<Dashboard/>} />}
          {token && <Route path="*" element={<Dashboard/>} />}
          {!token && <Route path="*" element={<Login/>} />}
        </Routes>
      </Router>
        
    </div>
  )
}

export default App
