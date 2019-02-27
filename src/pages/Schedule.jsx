import React, { Component } from "react";
import { Table } from "react-bootstrap";
import EmployeeDialog from "../components/EmployeeDialog";

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
        
      </div>
    );
  }
}

export default Schedule;
