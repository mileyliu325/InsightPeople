import React, { Component } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Button, Icon } from "@material-ui/core";
class EmployeeItem extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const icon = this.props.icon;
    const content = this.props.content;
    return (
      <ItemContainer>
        <IconContainer>
          <Icon>{icon}</Icon>
        </IconContainer>
        <Button color="primary">{content}</Button>
      </ItemContainer>
    );
  }
}

export default EmployeeItem;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-content: space-between;
`;

const IconContainer = styled.div`
  margin-top: 8px;
`;
