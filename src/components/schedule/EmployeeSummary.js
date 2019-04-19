import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
class EmployeeSummary extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <AvatarContainer>
          <Avatar>{this.props.name[0]}</Avatar>
        </AvatarContainer>
        <NameContanier>
          <h2>{this.props.name}</h2>
        </NameContanier>
        <PositionContanier>
          <h4>{this.props.position}</h4>
        </PositionContanier>
      </Container>
    );
  }
}
export default EmployeeSummary;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

const NameContanier = styled.div`
  font: 13;
`;

const PositionContanier = styled.div`
  font: 11;
  color: gray;
`;
