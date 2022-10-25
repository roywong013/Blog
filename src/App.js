import "./styles.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Component/Page/HomePage/HomePage";
import EditorPage from "./Component/Page/EditorPage/EditorPage";
import Settings from "./Component/Page/Settings";
import Login from "./Component/Page/LoginPage/Login";
import Register from "./Component/Page/RegisterPage/Register";
import Profile from "./Component/Page/ProfilePage/Profile";
import { useSelector } from "react-redux";

export default function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {<Route path="/editor" element={isLogin ? <EditorPage /> : <Login />} />}
      {<Route path="/settings" element={isLogin ? <Settings /> : <Login />} />}
      {!isLogin && <Route path="/login" element={<Login />} />}
      {!isLogin && <Route path="/register" element={<Register />} />}
      {<Route path="/profile" element={isLogin ? <Profile /> : <Login />} />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
