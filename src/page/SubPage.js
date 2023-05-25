import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SubPage = () => {
  const navigate = useNavigate();
  let menus = [
    {
      name: "회원관리",
      path: "member",
    },
    {
      name: "좌석현황",
      path: "seat",
    },
    {
      name: "예약관리",
      path: "reservation",
    },
    {
      name: "사물함관리",
      path: "locker",
    },
  ];

  const goToPage = (selectMenu) => {
    for (let i = 0; i < menus.length; i++) {
      if (selectMenu === menus[i].path) {
        navigate(`/${menus[i].path}`);
      }
    }
  };

  return (
    <Container className="sub-wrap">
      <div className="current">
        <p>총 인원수 : 00</p>
        <p>이용중인 좌석 : 00</p>
      </div>
      <Row className="menu-box-wrap">
        {menus.map((item, index) => (
          <Col lg={3} md={6} sm={12} key={index}>
            <div className="menu-box" onClick={() => goToPage(`${item.path}`)}>
              <h5>{item.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubPage;
