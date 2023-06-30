import { useEffect, useState } from "react";
import "../styles/spinner.css";
import { Link } from "react-router-dom";

const Loader = () => {
  const [error, setError] = useState(false);
  const timeout = () => {
    setTimeout(() => {
      setError(true);
    }, 6000);
  };
  useEffect(timeout, []);

  return (
    <>
     { error &&
      <div>
        Unable to fetch quiz from server <br />{" "}
        <Link to={"/questioneerr/dashboard"}>Return Home</Link>
      </div>}
      <div className="spinner">
        Loading
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
        <div className="spinner-sector spinner-sector-yellow"></div>
      </div>
    </>
  );
};

export default Loader;
