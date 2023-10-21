import { useEffect, useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";

function IpAdress() {
  const [ipAddress, setIpAddress] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("loading");

  function getIpAdress() {
    setStatus("loading");
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_l9rDHDyitisbDGLUNf0fMc9O7hg7N"
      )
      .then((response) => {
        setIpAddress(response.data);
        setError(false);
        setStatus("success");
      })
      .catch(() => {
        setError(true);
        setStatus("error");
      });
  }

  useEffect(() => {
    getIpAdress();

    const now = DateTime.local();
    const formattedNow = now.toFormat("yyyy-MM-dd HH:mm:ss");
    setCurrentTime(formattedNow);
  }, []);

  return (
    <div>
      {status === "success" ? (
        <>
          {" "}
          <h2>Where are you?</h2>
          <p>My Ip Adress is: {ipAddress.ip}</p>
          <p>Current Date and Time: {currentTime}</p>
          <p>My country is: {ipAddress.location.country}</p>
          {error ? <p>Could not get the IP adress!!</p> : null}
        </>
      ) : status === "loading" ? (
        <div>Loading</div>
      ) : (
        <div>Something went wrong</div>
      )}
    </div>
  );
}

export default IpAdress;

//<p>My country is: {ipAddress.location.country}</p>
