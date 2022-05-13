import "./styles.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Editor from "./Page/Editor";
import Header from "./Component/Header.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/SignIn" element={<Header />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
}
