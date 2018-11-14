import Navbar from "../components/Navbar";
import Head from "../components/Meta";
import Button from "../components/Button";

const login = (props) => (
  <div>
    <Head />
    <Navbar />
    <div>
      <Button label="Login" />
    </div>
    <div>
      <Button label="Register" />
    </div>
    <input type="text" id="todo"/>
  </div>
);

login.getInitialProps = async function () {
  // const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  // const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);
  console.log("getInitialPrps")

  return {
    users: ["christina", "tommy"]
  };
};

export default login