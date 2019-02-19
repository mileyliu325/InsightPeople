import React from 'react'

import './TitleTag.css'

const TitleTag = ({title}) => {
    let tag = null
    switch(title){
        case 'admin':
        tag = (
            <div className='admin_tag'>
                {title}
            </div>
        )
        break;
        case 'leader':
        tag = (
            <div className='leader_tag'>
                {title}
            </div>
        )
        break;
        case 'staff':
        tag = (
            <div className='staff_tag'>
                {title}
            </div>
        )
        break;
        default:
    }
    return tag
}

export default TitleTag