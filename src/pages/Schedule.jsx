import React, { Component } from "react";
import styled from "styled-components";
import styles from "react-virtualized/styles.css";
import { Column, Table, MultiGrid } from "react-virtualized";
import EmployeeDialog from "../components/EmployeeDialog";
import ShiftBlock from "../components/Table_ShiftBlock";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import moment from "moment";
// import List from 'react-virtualized/dist/commonjs/List';

import { shift_1, shift_2, shift_3 } from "../mockdata/shift";

const shiftlist = [
  shift_1,
  shift_2,
  shift_3,
  shift_1,
  shift_2,
  shift_3,
  shift_1,
  shift_2,
  shift_3,
  shift_1,
  shift_2,
  shift_3
];
const STYLE = {
  border: "1px solid #ddd",
  paddingTop: "10px"
};
const STYLE_BOTTOM_LEFT_GRID = {
  borderRight: "2px solid #aaa",
  backgroundColor: "#f7f7f7"
};
const STYLE_TOP_LEFT_GRID = {
  borderBottom: "2px solid #aaa",
  borderRight: "2px solid #aaa",
  fontWeight: "bold"
};
const STYLE_TOP_RIGHT_GRID = {
  borderBottom: "2px solid #aaa",
  fontWeight: "bold"
};

class Schedule extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      fixedColumnCount: 1,
      fixedRowCount: 1,
      scrollToColumn: 0,
      scrollToRow: 0
    };

    this._cellRenderer = this._cellRenderer.bind(this);
    this._onFixedColumnCountChange = this._createEventHandler(
      "fixedColumnCount"
    );
    this._onFixedRowCountChange = this._createEventHandler("fixedRowCount");
    this._onScrollToColumnChange = this._createEventHandler("scrollToColumn");
    this._onScrollToRowChange = this._createEventHandler("scrollToRow");
  }

  _cellRenderer({ columnIndex, key, rowIndex, style }) {
    console.log();
    return (
      <div className={styles.Cell} key={key} style={style}>
        {columnIndex === 0 && rowIndex !== 0 && (
          <EmployeeDialog employeeId={rowIndex} />
        )}
        {/* todo:date */}
        {rowIndex === 0 && columnIndex !== 0 && (
          <div>
            {moment()
              .add(columnIndex - 1, "day")
              .format("ll")}
          </div>
        )}
        {/* todo:shifts combine with people */}
        {rowIndex !== 0 && columnIndex !== 0 && (
          <ShiftBlock shift={shiftlist[rowIndex]} />
        )}
      </div>
    );
  }

  _createEventHandler(property) {
    return event => {
      const value = parseInt(event.target.value, 10) || 0;

      this.setState({
        [property]: value
      });
    };
  }

  render() {
    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <MultiGrid
            {...this.state}
            cellRenderer={this._cellRenderer}
            columnWidth={230}
            columnCount={15}
            enableFixedColumnScroll
            enableFixedRowScroll
            height={650}
            rowHeight={80}
            rowCount={10}
            style={STYLE}
            styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
            styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
            styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
            width={width}
            hideTopRightGridScrollbar
            hideBottomLeftGridScrollbar
          />
        )}
      </AutoSizer>
    );
  }
}

export default Schedule;
