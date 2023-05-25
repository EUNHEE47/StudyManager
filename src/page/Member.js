import React from "react";
import NavBar from "../component/NavBar";
import { Container, Pagination, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Member = () => {
  return (
    <div className="page-wrap">
      <NavBar />
      <div className="member">
        <Container>
          <div className="member-search-box">
            <input type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <Table className="member-table">
            <thead>
              <tr>
                <th>회원번호</th>
                <th>이름</th>
                <th>아이디</th>
                <th>사용가능시간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
          <Pagination className="member-pagenation">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Container>
      </div>
    </div>
  );
};

export default Member;
