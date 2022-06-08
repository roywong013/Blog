import "./styles.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Component/Page/HomePage/HomePage";
import EditorPage from "./Component/Page/EditorPage/EditorPage";
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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
