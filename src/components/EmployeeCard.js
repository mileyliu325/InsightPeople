import React, { Component } from "react";
import styled from "styled-components";
import EmployeeItem from "./EmployeeItem";
import EmployeeShiftItem from "./EmployeeShiftItem";
class EmployeeCard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    const type = this.props.type;
    return (
      <div>
        {type === "detail" && (
          <Container>
            <CardContainer>
              <h4>CONTACT</h4>
              <EmployeeItem icon={"phone_iphone"} content={"Add Mobile"} />
              <EmployeeItem icon={"email"} content={"Add Email"} />
            </CardContainer>
            <CardContainer>
              <h4>ADDRESS</h4>
              <EmployeeItem
                icon={"add_location"}
                content={"Add Main Address"}
              />
            </CardContainer>
            <CardContainer>
              <h4>OTHER</h4>
              <EmployeeItem icon={"calendar_today"} content={"Add Birthday"} />
            </CardContainer>
          </Container>
        )}
        {type === "shifts" && (
          <Container>
            <CardContainer>
              <EmployeeShiftItem
                date={"Tue 19 Feb"}
                time={"9am-5.30"}
                location={"at office"}
              />
            </CardContainer>
            <CardContainer>
              <EmployeeShiftItem
                date={"Tue 18 Feb"}
                time={"9am-5.30"}
                location={"at office"}
              />
            </CardContainer>
            <CardContainer>
              <EmployeeShiftItem
                date={"Tue 17 Feb"}
                time={"9am-5.30"}
                location={"at office"}
              />
            </CardContainer>
          </Container>
        )}
      </div>
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

const DateContainer = styled.div`
  color: blueviolet;
`;
const LocationContainer = styled.div`
  color: blueviolet;
`;
