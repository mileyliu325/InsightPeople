import React from 'react'

import './Table_PeopleBlock.css'

class TableComponent_people extends React.Component{
    render(){
        return(
            <div className='people_block'> 
                <img className='portrait' src={this.props.people.portrait} alt=''/>
                <div className='info_block'>
                    <span className='name_span'>{this.props.people.name}</span>
                    <span>{this.props.people.hours}Hrs/${this.props.people.cost}</span>
                </div>
            </div>
        )
    }
}

export default TableComponent_people