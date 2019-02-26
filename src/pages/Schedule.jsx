import React, { Component } from "react";
import { Table } from "react-bootstrap";
import EmployeeDialog from "../components/EmployeeDialog";
import PeopleBlock from "../components/Table_PeopleBlock";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { people_1, people_2, people_3 } from "../mockdata/people";

import EmployeeSummary from "../components/EmployeeSummary";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeItem from "../components/EmployeeItem";
class Schedule extends Component {
 
  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <EmployeeDialog employeeId={'0001'}/>
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
              <EmployeeDialog employeeId={'0002'}/>
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
              <EmployeeDialog employeeId={'0003'}/>
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
        ;
      </div>
    );
  }
}

export default Schedule;
