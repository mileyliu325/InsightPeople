import React, { Component } from "react";
import styled from "styled-components";
import EmployeeSummary from "./EmployeeSummary";
import EmployeeCard from "./EmployeeCard";
import EmployeeItem from "./EmployeeItem";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import PeopleBlock from "../components/Table_PeopleBlock";

import { people_1 } from "../mockdata/people";

class EmployeeDialog extends Component {
  constructor(props) {
    super();
    this.state = {};
    console.log("props.employeeId:" + props.employeeId);
  }
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true, selecetedEmployeeId: "0001" });
    console.log(this.state.selecetedEmployeeId);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const id = this.props.employeeId;

    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.setState({ open: true, selecetedEmployeeId: id })}
        >
          <PeopleBlock people={people_1} />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-describedby="alert-dialog-description"
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContanier>
            <SummaryContainer>
              <EmployeeSummary
                name={people_1.name}
                position={"Sales Manager"}
                avatar={people_1.portrait}
              />
              {/* todo: menu */}
              <Button color="primary">Personal Detail</Button>
              <Button>Shifts</Button>
            </SummaryContainer>
            <DetailContainer>
              <TitleContainer>
                <Button onClick={this.handleClose}>X</Button>
                <Button variant="contained" size="small" color="primary">
                  Edit Profile
                </Button>
              </TitleContainer>

              <EmployeeCard />
            </DetailContainer>
          </DialogContanier>
        </Dialog>
      </div>
    );
  }
}
export default EmployeeDialog;

const DialogContanier = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 600px;
  height: 500px;
  background-color: #f1f1f1;
`;

const SummaryContainer = styled.div`
  padding-top: 10px;
  flex: 1;
  background-color: white;
`;

const DetailContainer = styled.div`
  padding-top: 10px;
  background-color: #f1f1f1;
  flex: 2;
`;

const TitleContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: right;
  flex-direction: row-reverse;
`;
const leftNavContainer = styled.div``;
const ShiftContanier = styled.div`
  font: 11;
  color: gray;
`;
