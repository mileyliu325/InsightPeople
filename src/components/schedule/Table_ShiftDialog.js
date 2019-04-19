import React from "react";
import TextField from "@material-ui/core/TextField";

import Table_PeopleBlock from "./Table_PeopleBlock";

class Table_ShiftDialog extends React.Component {
  render() {
    return (
      <div>
        {this.props.shift.people && (
          <Table_PeopleBlock people={this.props.shift.people} />
        )}

        <TextField id="title" label="title" fullWidth={true} />
        <TextField id="start_time" label="start time" fullWidth={true} />
        <TextField id="end_time" label="end time" fullWidth={true} />
      </div>
    );
  }
}

export default Table_ShiftDialog;
