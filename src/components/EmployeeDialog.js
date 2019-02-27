import React, { Component } from "react";
import styled from "styled-components";
import {
  Dialog,
  Button,
  Icon,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from "@material-ui/core";
import EmployeeSummary from "./EmployeeSummary";
import EmployeeCard from "./EmployeeCard";
import PeopleBlock from "../components/Table_PeopleBlock";
import { people_1 } from "../mockdata/people";
class EmployeeDialog extends Component {
  constructor(props) {
    super();
    this.state = { value: "detail" };
    console.log("props.employeeId:" + props.employeeId);
  }
  state = {
    open: false
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
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
              <LeftNavContainer>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="detail"
                      control={<Radio color="primary" />}
                      label="Personal Detail"
                    />
                    <FormControlLabel
                      value="shifts"
                      control={<Radio color="primary" />}
                      label="Shifts"
                    />
                  </RadioGroup>
                </FormControl>
              </LeftNavContainer>
            </SummaryContainer>

            <DetailContainer>
              <TitleContainer>
                <Button onClick={this.handleClose}>
                  <Icon>close</Icon>
                </Button>

                {this.state.value === "detail" && (
                  <Button variant="contained" size="small" color="primary">
                    Save
                  </Button>
                )}
              </TitleContainer>
              <EmployeeCard type={this.state.value} />
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
  height: 100%;
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
const LeftNavContainer = styled.div`
  padding-left: 20px;
`;
