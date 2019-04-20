import React from "react";
import "./Table_PeopleBlock.css";
import Avatar from "@material-ui/core/Avatar";

class TableComponent_people extends React.Component {
  render() {
    return (
      <div className="people_block">
        <div className="portrait">
          <Avatar>{this.props.people.name[0]}</Avatar>
        </div>

        <div className="info_block">
          <span className="name_span">{this.props.people.name}</span>

          <span>
            {this.props.people.workinghours
              ? this.props.people.workinghours
              : 0}
            Hrs/${this.props.people.wage ? this.props.people.wage : 0}
          </span>
        </div>
      </div>
    );
  }
}

export default TableComponent_people;
