import { auth } from "../Firebase";
import { Navigate, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const { _isInitialized } = auth;
  if (_isInitialized === false) {
    return <Navigate to="/login" />;
  }

  const signOutClick = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1 className="main-head">Hello World!!!</h1>
      <button className="button-el" onClick={() => signOutClick()}>
        SignOut
      </button>
    </div>
  );
};

export default Home;
