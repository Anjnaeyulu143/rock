// import React, { useState, useEffect } from "react";
// import { PlayGame } from "./components/PlayGame";

// export const App = () => {
//   const [score, setScore] = useState(0);
//   const [bool, setBool] = useState(true);
//   const [randomId, setRandomId] = useState("ROCK");
//   const [selectedId, setSelectedId] = useState("PAPER");
//   const [result, setResult] = useState("");

//   console.log(selectedId);
//   console.log(randomId);

//   useEffect(() => {
//     gameResults();
//   }, []);

//   const gameResults = () => {
//     // switch ((randomId, selectedId)) {
//     //   case selectedId === "PAPER" && randomId === "ROCK":
//     //     setResult("YOU WON");
//     //     break;
//     //   case selectedId === "SCISSORS" && randomId === "PAPER":
//     //     setResult("YOU WON");
//     //     break;
//     //   case selectedId === "ROCK" && randomId === "SCISSORS":
//     //     setResult("YOU WON");
//     //     break;
//     //   case selectedId === "ROCK" && randomId === "PAPER":
//     //     setResult("YOU LOSE");
//     //     break;
//     //   case selectedId === "PAPER" && randomId === "SCISSORS":
//     //     setResult("YOU LOSE");
//     //     break;
//     //   case selectedId === "SCISSORS" && randomId === "ROCK":
//     //     setResult("YOU LOSE");
//     //     break;
//     //   default:
//     //     setResult("IT IS DRAW");
//     // }
//     if (randomId === "ROCK" && selectedId === "PAPER") {
//       setResult("YOU WON");
//     } else if (randomId === "PAPER" && selectedId === "ROCK") {
//       setResult("YOU LOSE");
//     }
//   };

//   console.log(result);

//   return (
//     <div
//       style={{ backgroundColor: "#223a5f", minHeight: "100vh" }}
//       className="p-4"
//     >
//       <div
//         className="w-100 d-flex align-items-center justify-content-between p-4"
//         style={{ border: "2px solid white" }}
//       >
//         <ul className="text-white fs-5">
//           <li>ROCK</li>
//           <li>PAPER</li>
//           <li>SCISSORS</li>
//         </ul>
//         <div
//           className="bg-light d-flex flex-column align-items-center justify-content-center p-2"
//           style={{
//             minHeight: "5em",
//             maxWidth: "7em",
//             borderRadius: "10px",
//           }}
//         >
//           <h1 style={{ fontSize: "2rem" }}>Score</h1>
//           <h1>{score}</h1>
//         </div>
//       </div>
//       {bool ? (
//         <PlayGame setRandomId={setRandomId} setSelectedId={setSelectedId} />
//       ) : (
//         ""
//       )}
//       <div className="text-right">
//         <button className="btn btn-primary">Rules</button>
//       </div>
//     </div>
//   );
// };

import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const choicesList = [
  {
    id: "ROCK",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png",
  },
  {
    id: "SCISSORS",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png",
  },
  {
    id: "PAPER",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png",
  },
];

export class App extends Component {
  state = {
    score: 0,
    bool: true,
    randomId: "PAPER",
    selectedId: "ROCK",
    result: "",
  };

  updateBool = () => {
    this.setState({ bool: true });
  };

  componentDidMount() {
    this.gameResult();
  }

  gameResult = () => {
    const { randomId, selectedId } = this.state;
    if (selectedId === "PAPER" && randomId === "ROCK") {
      this.setState({ result: "YOU WIN" });
    } else if (selectedId === "ROCK" && randomId === "SCISSORS") {
      this.setState({ result: "YOU WIN" });
    } else if (selectedId === "SICCORS" && randomId === "PAPER") {
      this.setState({ result: "YOU WIN" });
    } else if (selectedId === randomId) {
      this.setState("IT IS DRAW");
    } else if (selectedId === "PAPER" && randomId !== "ROCK") {
      this.setState({ result: "YOU LOSE" });
    } else if (selectedId === "ROCK" && randomId !== "SCISSORS") {
      this.setState({ result: "YOU LOSE" });
    } else if (selectedId === "SICCORS" && randomId !== "PAPET") {
      this.setState({ result: "YOU LOSE" });
    } else {
      this.setState({ result: "" });
    }
  };

  random = (eachItem) => {
    const random = Math.ceil(Math.random() * choicesList.length);
    const randomNum = random - 1;

    const randomObject = choicesList[randomNum];
    this.setState({ randomId: randomObject.id });
    this.setState({ selectedId: eachItem.id });
    this.setState({ bool: false });
  };

  randerGameResult = () => {
    const { bool, randomId, selectedId, result } = this.state;

    const randomFilter = choicesList.filter(
      (eachItem) => eachItem.id === randomId
    );
    console.log(randomFilter);
    const selectedFilter = choicesList.filter(
      (eachItem) => eachItem.id === selectedId
    );
    console.log(selectedFilter);

    console.log(result);
    return (
      <>
        <div
          className="mt-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedFilter.map((eachItem) => (
            <div style={{ maxWidth: "10em" }}>
              <img
                src={eachItem.imageUrl}
                style={{ objectFit: "cover" }}
                className="w-100"
              />
            </div>
          ))}
          {randomFilter.map((eachItem) => (
            <div style={{ maxWidth: "10em" }}>
              <img
                src={eachItem.imageUrl}
                style={{ objectFit: "cover" }}
                className="w-100"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-success" onClick={() => this.updateBool()}>
            Play Again
          </button>
        </div>
      </>
    );
  };

  renderPlayGame = () => (
    <div
      className="mt-4"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {choicesList.map((eachItem) => (
        <div style={{ maxWidth: "10em" }}>
          <img
            src={eachItem.imageUrl}
            style={{ objectFit: "cover" }}
            className="w-100"
            onClick={() => this.random(eachItem)}
          />
        </div>
      ))}
    </div>
  );

  render() {
    const { score, bool, randomId, selectedId } = this.state;
    console.log(selectedId);
    console.log(randomId);
    return (
      <div
        style={{ backgroundColor: "#223a5f", minHeight: "100vh" }}
        className="p-4"
      >
        <div
          className="w-100 d-flex align-items-center justify-content-between p-4"
          style={{ border: "2px solid white" }}
        >
          <ul className="text-white fs-5">
            <li>ROCK</li>
            <li>PAPER</li>
            <li>SCISSORS</li>
          </ul>
          <div
            className="bg-light d-flex flex-column align-items-center justify-content-center p-2"
            style={{
              minHeight: "5em",
              maxWidth: "7em",
              borderRadius: "10px",
            }}
          >
            <h1 style={{ fontSize: "2rem" }}>Score</h1>
            <h1>{score}</h1>
          </div>
        </div>
        {bool ? this.renderPlayGame() : this.randerGameResult()}
        <div className="text-right">
          <Popup
            modal
            trigger={
              <button type="button" className="btn btn-primary">
                Trigger
              </button>
            }
          >
            {(close) => (
              <>
                <div>
                  <div className="text-right mb-1">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </div>

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="w-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    );
  }
}
