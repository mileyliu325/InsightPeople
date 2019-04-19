import React from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import TitleTag from "./TitleTag";
import Table_ShiftDialog from "./Table_ShiftDialog";

import "./Table_ShiftBlock.css";
class Table_ShiftBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      dialogFlag: false
    };
  }

  handleClick = e => {
    const eventId = e.currentTarget.id;
    eventId === "schedule" && this.setState({ dialogFlag: true });
    eventId === "save" && this.setState({ dialogFlag: false });
    eventId === "cancel" && this.setState({ dialogFlag: false });
  };

  render_selector = () => {
    let content = null;
    if (this.props.shift.shift_id) {
      const schedule = this.props.shift;
      content = (
        <div className="shift_block">
          <span>{schedule.start + " - " + schedule.end}</span>
          {/* <TitleTag title={schedule.task} /> */}
          <div className="edit_button" id="schedule" onClick={this.handleClick}>
            <Fab color="secondary" aria-label="Edit" size="small">
              <EditIcon />
            </Fab>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="shift_block_add">
          <Fab
            color="primary"
            aria-label="Add"
            size="small"
            color="inherit"
            id="schedule"
            onClick={this.handleClick}
          >
            <AddIcon />
          </Fab>
        </div>
      );
    }

    return (
      <div>
        {content}
        <Dialog id="dialogNotice" open={this.state.dialogFlag}>
          <DialogTitle>Shift Schedule</DialogTitle>
          <DialogContent>
            <Table_ShiftDialog shift={this.props.shift} />
          </DialogContent>
          <DialogActions>
            <Button id="save" onClick={this.handleClick} color="primary">
              save
            </Button>
            <Button id="cancel" onClick={this.handleClick} color="primary">
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  render() {
    return this.render_selector();
  }
}

export default Table_ShiftBlock;
