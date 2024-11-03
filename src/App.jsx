import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
