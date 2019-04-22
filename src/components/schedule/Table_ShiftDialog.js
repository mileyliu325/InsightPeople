import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Table_PeopleBlock from "./Table_PeopleBlock";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Table_ShiftDialog extends React.Component {
  state = {
    task: "",
    open: false,
    start: this.props.shift.start ? this.props.shift.start : "07:30",
    end: this.props.shift.end ? this.props.shift.end : "09:30"
  };
  // handleChange = event => {
  //   console.log(
  //     `shiftdialog handlechange:${event.target.name}:${event.target.value}`
  //   );
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        {this.props.shift.people && (
          <Table_PeopleBlock people={this.props.shift.people} />
        )}

        {/* task list */}

        <form autoComplete="off" fullWidth={true}>
          <Button onClick={this.handleOpen}>Open the select</Button>
          <FormControl>
            <InputLabel htmlFor="demo-controlled-open-select">Task</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.task}
              onChange={this.props.handleChange}
              inputProps={{
                name: "task",
                id: "demo-controlled-open-select"
              }}
              // onChange={this.props.handleSelect}cccf
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {this.state.data &&
                this.state.data.map(task => (
                  <MenuItem value={task._id}>{task.title}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </form>

        <TextField
          id="start_time"
          label="start time"
          type="time"
          defaultValue={this.state.start}
          className={styles.textField}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            name: "start",
            step: 300 // 5 min
          }}
          fullWidth={true}
          onChange={this.props.handleChange}
        />
        <TextField
          id="end_time"
          label="end time"
          type="time"
          defaultValue={this.state.end}
          className={styles.textField}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            name: "end",
            step: 300 // 5 min
          }}
          fullWidth={true}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
  componentDidMount() {
    this.fetchTasks();
  }
  //todo: redux

  fetchTasks = async () => {
    //TODO: add auth permission
    console.log("fetchtasks....");
    axios
      .get("http://127.0.0.1:3002/bulk/tasks")
      .then(res => {
        const data = res.data;

        this.setState({ data: data });
      })
      .catch(err => {
        console.warn("fetchTaskErrpr", err);
      });
  };

  // componentDidUpdate(){
  //   const date = this.props.date;
  //   const startTime = this.state.startTime;
  //   const endTime = this.state.endTime;
  //   const people_id = this.props.shift.people_id;
  //   const task_id = "";
  //   console.log(`${date},${startTime},${endTime},${people_id},${task_id}`);
  // }
}

export default Table_ShiftDialog;
