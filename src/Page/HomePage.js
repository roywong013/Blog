import Header from "../Component/Header";
import Banner from "../Component/Banner";
import Container from "../Component/Container/Container";
// import "../styles.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <Container />
    </div>
  );
}
