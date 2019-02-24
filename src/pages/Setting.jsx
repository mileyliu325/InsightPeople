import React, { Component } from 'react';

import { people_1, people_2, people_3 } from '../mockdata/people'
import { shift_1, shift_2, shift_3 } from '../mockdata/shift'

import Table_PeopleBlock from '../components/Table_PeopleBlock'
import Table_ShiftBlock from '../components/Table_ShiftBlock'

class Setting extends Component {
    render() {
      return (
        <div >
        Setting
        <Table_PeopleBlock people={people_1} />
        <Table_PeopleBlock people={people_2} />
        <Table_PeopleBlock people={people_3} />
        <Table_ShiftBlock shift={shift_1} />
        <Table_ShiftBlock shift={shift_2} />
        <Table_ShiftBlock shift={shift_3} />
        </div>
      );
    }
  }

export default Setting;