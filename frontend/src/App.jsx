import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlayList from "./pages/PlayList";
import MyAccount from "./pages/MyAccount";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
