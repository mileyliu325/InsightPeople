import Putin_portrait from '../images/portraits/Putin.jpg'
import Tom_portrait from '../images/portraits/Tom.jpg'
import LingLing_portrait from '../images/portraits/LingLing.jpg'

const leave_request_1 = {
    _id:'#1',
    applicant:{
        people_id:'0002',
        name:'Tom',
        portrait:Tom_portrait,
        hours:'40',
        cost:'390.00'
    },
    start_date:'date1',
    end_date:'date2',
    leave_reason:'reason1',
    approver:null,
    approval_status:'pending',
    approval_message:''
}

const leave_request_2 = {
    _id:'#2',
    applicant:{
        people_id:'0002',
        name:'Tom',
        portrait:Tom_portrait,
        hours:'40',
        cost:'390.00'
    },
    start_date:'date3',
    end_date:'date4',
    leave_reason:'reason2',
    approver:{
        people_id:'0001',
        name:'Putin',
        portrait:Putin_portrait,
        hours:'30',
        cost:'500.00'
    },
    approval_status:'approved',
    approval_message:'ok'
}

const leave_request_3 = {
    _id:'#3',
    applicant:{
        people_id:'0003',
        name:'LingLing',
        portrait:LingLing_portrait,
        hours:'35',
        cost:'450.00'
    },
    start_date:'date1',
    end_date:'date2',
    leave_reason:'reason3',
    approver:null,
    approval_status:'pending',
    approval_message:''
}

const leave_request_4 = {
    _id:'#4',
    applicant:{
        people_id:'0003',
        name:'LingLing',
        portrait:LingLing_portrait,
        hours:'35',
        cost:'450.00'
    },
    start_date:'date3',
    end_date:'date4',
    leave_reason:'reason4',
    approver:{
        people_id:'0001',
        name:'Putin',
        portrait:Putin_portrait,
        hours:'30',
        cost:'500.00'
    },
    approval_status:'failed',
    approval_message:'no'
}

export {leave_request_1, leave_request_2, leave_request_3, leave_request_4}