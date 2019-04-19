import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
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

class EmployeeDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "detail" };
    console.log("propsname:" + props.employee);
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
    return (
      <div>
        {this.props.employee && this.props.employee.name && (
          <div>
            <Button
              color="primary"
              onClick={() =>
                this.setState({
                  open: true,
                  selecetedEmployeeId: this.props.employee._id
                })
              }
            >
              <PeopleBlock people={this.props.employee} />
            </Button>

            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-describedby="alert-dialog-description"
              aria-labelledby="responsive-dialog-title"
            >
              {
                <DialogContanier>
                  <SummaryContainer>
                    <EmployeeSummary
                      name={this.props.employee.name}
                      position={this.props.employee.role}
                      // avatar={employee.portrait}
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
                  </SummaryContainer>{" "}
                  <DetailContainer>
                    <TitleContainer>
                      <Button onClick={this.handleClose}>
                        <Icon>close</Icon>
                      </Button>

                      {this.state.value === "detail" && (
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          Save
                        </Button>
                      )}
                      {this.state.value === "shifts" && (
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          Add Shift
                        </Button>
                      )}
                    </TitleContainer>
                    <EmployeeCard
                      type={this.state.value}
                      person={this.props.employee}
                    />
                  </DetailContainer>
                </DialogContanier>
              }
            </Dialog>
          </div>
        )}
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
