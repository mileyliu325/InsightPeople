import Putin_portrait from '../images/portraits/Putin.jpg'
import Tom_portrait from '../images/portraits/Tom.jpg'
import LingLing_portrait from '../images/portraits/LingLing.jpg'

const shift_1 = {
    people:{
        people_id:'0001',
        name:'Putin',
        portrait: Putin_portrait,
        hours:'30',
        cost:'500.00',
    }
}

const shift_2 = {
    people:{
        people_id:'0002',
        name:'Tom',
        portrait: Tom_portrait,
        hours:'40',
        cost:'390.00',
    },
    schedule:{
        title:'leader',
        start_time:'8:00am',
        end_time:'4:30pm'
    }
}

const shift_3 = {
    people:{
        people_id:'0003',
        name:'LingLing',
        portrait: LingLing_portrait,
        hours:'35',
        cost:'450.00',
    },
    schedule:{
        title:'staff',
        start_time:'10:00am',
        end_time:'6:30pm'
    }
}

export {shift_1, shift_2, shift_3}