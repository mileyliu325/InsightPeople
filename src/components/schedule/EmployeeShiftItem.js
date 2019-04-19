import React, { Component } from "react";
import styled from "styled-components";

import { Icon } from "@material-ui/core";

class EmployeeShiftItem extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const date = this.props.date;
    const time = this.props.time;
    const location = this.props.location;
    const area = this.props.area;
    return (
      <Container>
        <DateContainer>
          <IconContainer>
            <Icon>calendar_today</Icon>
          </IconContainer>
          <p>{date}</p>
        </DateContainer>
        <p>{time}</p>
        <p>{area}</p>
        <p>{location}</p>
      </Container>
    );
  }
}

export default EmployeeShiftItem;

const Container = styled.div`
  padding: 10px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  color: #007bff;
`;

const IconContainer = styled.div`
  padding-right: 5px;
`;
