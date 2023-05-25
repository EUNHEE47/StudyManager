import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Login from "./page/Login";
import SubPage from "./page/SubPage";
import { Route, Routes } from "react-router-dom";
import Member from "./page/Member";
import Reservation from "./page/Reservation";
import SeatStatus from "./page/SeatStatus";
import Locker from "./page/Locker";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/subMain" element={<SubPage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/seat" element={<SeatStatus />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/locker" element={<Locker />} />
      </Routes>
    </div>
  );
}

export default App;
