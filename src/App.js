import "./styles.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/Page/HomePage";
import Editor from "./Component/Page/Editor";
import Settings from "./Component/Page/Settings";
import Login from "./Component/Page/Login";
import Register from "./Component/Page/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/settings" element={<Settings />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
