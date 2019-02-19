import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit'
import TitleTag from './TitleTag'

import './Table_ShiftBlock.css'

class Table_ShiftBlock extends React.Component{
    content_selector = () => {
        if(this.props.shift) {
            return(
                <div className='shift_block'>
                    <span>
                        {this.props.shift.start_time + ' - ' + this.props.shift.end_time}
                    </span>
                    <TitleTag title={this.props.shift.title} />
                    <div className='edit_button'>
                        <Fab color="secondary" aria-label="Edit" size='small'>
                            <EditIcon />
                        </Fab>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className='shift_block_add'>
                    <Fab color="primary" aria-label="Add" size='small' color='inherit'>
                        <AddIcon />
                    </Fab>
                </div>
            )
        }
    }
    render(){
        return this.content_selector()
    }
}

export default Table_ShiftBlock