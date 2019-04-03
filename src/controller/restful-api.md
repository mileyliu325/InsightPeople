#APIs

##People

- GET

/people/:id

/people

- POST

/people

Body:
{
    name:"",
    email:"",
    role:"",
    wage:"",
    phone:"",
    birthday:"",
    shifts:[]
}

- PUT

/people/:id

Body:
{
    name:"",
    email:"",
    role:"", 
    wage:"",
    phone:"",
    birthday:"",
    shifts:[]  
}

- DELETE

/people/:id

##Shift

- GET
/shift/:id

/shift

query:personalId OR date

- POST
/shift

Body {
    title:"",
    peopleId:"",
    date:"",
    startTime:"",
    endTime:"",
    position:"",
    location:"" 
}

- PUT
/shift/:id
Body {

    title:"",
    peopleId:"",
    startTime:"",
    endTime:"",
    position:"",
    location:"", 
}

- DELETE
/shift/:id

##Schedule

- GET
/schedule

query: fromDate AND toDate

