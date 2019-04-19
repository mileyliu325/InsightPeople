import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios';
import styles from "react-virtualized/styles.css";
import { Column, Table, MultiGrid } from "react-virtualized";
import EmployeeDialog from "../components/EmployeeDialog";
import ShiftBlock from "../components/Table_ShiftBlock";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import moment from "moment";
import { array } from "prop-types";
const HOST = "http://127.0.0.1:3002/bulk/users";
//todo: resize count
const ROW_COUNT = 11;
const COLUMN_COUNT = 15;

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
    const peoplelist = this.state.data;
    const shiftTable = this.state.table;

    return (
     
      <div className={styles.Cell} key={key} style={style}>
       {/* left column - employee list*/}
        {columnIndex === 0 && rowIndex !== 0 && peoplelist && (
          < EmployeeDialog employee ={peoplelist[rowIndex-1]}/>
        )}
        {/* top row - dates */}
        {rowIndex === 0 && columnIndex !== 0 && (
          <div>
            {moment()
              .add(columnIndex - 1, "day")
              .format("ll")}
          </div>
        )}
         {/* shifttable - two demision array from [1,1]  */}
         {rowIndex !== 0 && columnIndex !== 0 && peoplelist && shiftTable && (
        <ShiftBlock shift={shiftTable[rowIndex-1][columnIndex]} />
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

  fetchPeople = async () => {
    //TODO: add auth permission 
    console.log("fetchdata....");
    axios
      .get("http://127.0.0.1:3002/bulk/users")
      .then(res => {
        const data = res.data;
        this.setState({data: data});
        this.fetchShiftsTable();
      })
      .catch(err => {
        console.warn("fetchPeopleErrpr", err);
      });
  };

 //todo:optimize alogrithm

  fetchShiftsTable = async () => {
   
    const table = new Array();

    for(let i = 0; i < ROW_COUNT-1; i++){
      table[i] = new Array();
      //people left row
      const person = this.state.data[i];
      for(let j = 0; j< COLUMN_COUNT-1; j++){
        //calendar top
        const cal = moment().add(j-1,"day").format("ll");

        table[i][j] = {
          people_id: person._id,
          people: person,
          date: cal
        }

        for(let k = 0; k <  person.shifts.length;k ++){
          //shifts' list
          if (moment(person.shifts[k].startTime).format("ll") === cal ){
          
            const startTime = person.shifts[k].startTime;
            const endTime = person.shifts[k].endTime;
            const shift_id = person.shifts[k]._id;
            const date = moment(startTime).format("ll");
            const start = moment(startTime).format("HH:mm");
            const end = moment(endTime).format("HH:mm");
            const area = person.shifts[k].area;
          
            table[i][j] = {
               people: person,
               shift_id: shift_id,
               date: date,
               start:start,
               task: area,
               end: end  
            }
          } 
        }        
        // console.log("table:"+JSON.stringify(table[i][j]));
      }
    }

    this.setState({table:table});
  }
  render() {

    return (
      
      <AutoSizer disableHeight>
        {({ width }) => (
          <MultiGrid
            {...this.state}
            cellRenderer={this._cellRenderer}
            columnWidth={230}
            columnCount={COLUMN_COUNT}
            enableFixedColumnScroll
            enableFixedRowScroll
            height={650}
            rowHeight={80}
            rowCount={ROW_COUNT}
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
  componentDidMount(){
    this.fetchPeople();
  } 
}
export default Schedule;
