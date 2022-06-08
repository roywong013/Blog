import { useSelector } from "react-redux"

import Header from "../../Header";
import Banner from "../../Banner";
import Container from "../../Container/Container";

// import "../styles.css";

export default function HomePage() {
  let isLogin = useSelector((state) => state.login.isLogin)
  return (
    <div className="home-page">
      <Header />
      {!isLogin && <Banner />}
      <Container />
    </div>
  );
}
