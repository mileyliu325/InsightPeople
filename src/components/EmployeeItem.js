import React, { Component } from "react";
import styled from "styled-components";

import { Button, Input, Icon } from "@material-ui/core";
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
        <Input
          color="primary"
          onChange={() => this.setState({ content })}
          placeholder={content}
        />
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
