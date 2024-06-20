import Layout from '../components/Layout/Layout'
// import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/Banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{ backgroundImage: `url(${Banner})`, height: "800px" }}
      >
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Japan</p>
          <Link to="/menu">
            <button>今すぐ注文</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
