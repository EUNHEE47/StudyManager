import React, { useState } from "react";
import NavBar from "../component/NavBar";

const Reservation = () => {
  const [timeBtn, setTimeBtn] = useState(false);
  let roomNumArr = ["Room1", "Room2"];
  let seatNumArr = [];
  let timeArr = [];

  for (let i = 1; i <= 8; i++) {
    seatNumArr.push(i);
  }

  for (let i = 1; i <= 24; i++) {
    timeArr.push(i);
  }

  const selectTime = (item) => {
    console.log(item);
    setTimeBtn(!timeBtn);
  };

  return (
    <div className="page-wrap">
      <NavBar />
      <div className="reservation">
        {roomNumArr.map((room) => (
          <ul className="mng-line">
            <li className="seat-title">{room}</li>
            {timeArr.map((time, index) => (
              <li
                className={timeBtn ? `time timeActive` : `time`}
                key={index}
                onClick={() => selectTime(time)}
              >
                {time}
              </li>
            ))}
          </ul>
        ))}
        {seatNumArr.map((seat) => (
          <ul className="mng-line">
            <li className="seat-title">{seat}</li>
            {timeArr.map((time) => (
              <li className="time">{time}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
