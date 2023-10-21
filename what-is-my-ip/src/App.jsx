import "./App.css";
import IpAdress from "./components/IpAdress";
import Map from "./components/Map";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <div>
        {isShown ? (
          <div className="background">
            <Map />
          </div>
        ) : (
          <Card
            style={{
              width: "18rem",
              border: "1px solid black",
              padding: "10px",
            }}
            className="card"
          >
            <Card.Img
              variant="top"
              src="https://flagcdn.com/w320/ch.png"
              width="280px"
            />
            <Card.Body>
              <IpAdress />
            </Card.Body>
            <Button variant="primary" onClick={handleClick}>
              Show map
            </Button>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
