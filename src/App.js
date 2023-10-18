import "./App.css";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

import Archived from "./components/Archived/Archived";
import Trashed from "./components/Trashed/Trashed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/archive" element={<Archived />} />
        <Route path="/trash" element={<Trashed />} />
      </Routes>
    </div>
  );
}

export default App;
