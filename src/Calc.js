import "./Calc.css";
import React from "react";

export default function Calc() {
  const [vote, setVote] = React.useState(0);

  function clickplus() {
    setVote(vote + 1);
  }

  function progr() {
    return 50 + (vote / 50) * 100;
  }

  function clickminus() {
    setVote(vote - 1);
  }
  return (
    <div>
      <div className="buttonfather">
        <button className="button b1" onClick={clickplus}>
          {" "}
          +{" "}
        </button>
        <button className="button b2" onClick={clickminus}>
          {" "}
          -{" "}
        </button>
      </div>
      <div>
        <div className="schet">
          <p>
            Количество голосов:{" "}
            <p
              className="textschet"
              style={{ color: vote > 0 ? "green" : "red" }}
            >
              {vote}
            </p>
          </p>
          <div className="progressbar">
            <div
              className="progress"
              style={{
                width: `${progr()}%`,
                height: "100%",
                background: vote > 0 ? "rgb(168, 255, 87)" : "red",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
