import NavBar from "../components/commons/NavBar";
import Header from "../components/commons/Header";
import Log from "../components/commons/Log";
import "../styles/home.css";
import SearchBar from "../components/commons/SearchBar";

export default function Home() {
  return (
    <div>
      <header className="header">
        <Header />
        <div className="link">
          <NavBar />
          <Log />
        </div>
      </header>
      <SearchBar />
    </div>
  );
}
