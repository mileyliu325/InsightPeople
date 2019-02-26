import React, { Component } from "react";
import styled from "styled-components";
import EmployeeItem from "./EmployeeItem";
class EmployeeCard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <CardContainer>
          <h4>CONTACT</h4>
          <EmployeeItem icon={"phone_iphone"} content={"Add Mobile"} />
          <EmployeeItem icon={"email"} content={"Add Email"} />
        </CardContainer>
        <CardContainer>
          <h4>ADDRESS</h4>
          <EmployeeItem icon={"add_location"} content={"Add Main Address"} />
        </CardContainer>
        <CardContainer>
          <h4>OTHER</h4>
          <EmployeeItem icon={"calendar_today"} content={"Add Birthday"} />
        </CardContainer>
      </Container>
    );
  }
}

export default EmployeeCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;
