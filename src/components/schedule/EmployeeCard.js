import React, { Component } from "react";
import styled from "styled-components";
import EmployeeItem from "./EmployeeItem";
import EmployeeShiftItem from "./EmployeeShiftItem";
import moment from "moment";
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
              <EmployeeItem
                icon={"phone_iphone"}
                content={
                  this.props.person.phone
                    ? this.props.person.phone
                    : "Add Mobile"
                }
              />
              <EmployeeItem
                icon={"email"}
                content={
                  this.props.person.email
                    ? this.props.person.email
                    : "Add Email"
                }
              />
            </CardContainer>
            <CardContainer>
              <h4>ADDRESS</h4>
              <EmployeeItem
                icon={"add_location"}
                content={
                  this.props.person.location
                    ? this.props.person.location
                    : "Add Main Address"
                }
              />
            </CardContainer>
            <CardContainer>
              <h4>OTHER</h4>
              <EmployeeItem
                icon={"calendar_today"}
                content={
                  this.props.person.birthday
                    ? moment(this.props.person.birthday).format("ll")
                    : "Add Birthday"
                }
              />
            </CardContainer>
          </Container>
        )}

        {type === "shift" && <button>Add shift</button>}

        {type === "shifts" && this.props.person.shifts.length && (
          <Container>
            {this.props.person.shifts.map((shift, shift_id) => (
              <CardContainer>
                <EmployeeShiftItem
                  key={shift_id}
                  date={moment(shift.startTime).format("ll")}
                  time={`${moment(shift.startTime).format("HH:mm")}-${moment(
                    shift.endTime
                  ).format("HH:mm")}`}
                  area={shift.area}
                />
              </CardContainer>
            ))}
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
