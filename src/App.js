import "./styles.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/Page/HomePage/HomePage";
import EditorPage from "./Component/Page/EditorPage";
import Settings from "./Component/Page/Settings";
import Login from "./Component/Page/LoginPage/Login";
import Register from "./Component/Page/Register";
import Profile from "./Component/Page/ProfilePage/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor" element={<EditorPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
