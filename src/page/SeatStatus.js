import NavBar from "../component/NavBar";

const SeatStatus = () => {
  let roomArr = ["Room1", "Room2"];
  let searArr = [];

  for (let i = 1; i <= 8; i++) {
    searArr.push(i);
  }

  return (
    <div className="page-wrap">
      <NavBar />
      <div className="seat">
        <div className="inner-seat">
          {roomArr.map((box) => (
            <div className="room-num-box">{box}</div>
          ))}
        </div>
        <div className="inner-seat">
          {searArr.map((box) => (
            <div className="seat-num-box">{box}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatStatus;
