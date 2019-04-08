#APIs

##People

- GET
/people/:id

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
    shifts:[]}

- DELETE
/people/:id

## Bulk People
/bulk/people/:ids

## Tasks

- GET
/task/:id

- POST
/task

Body {
    title:"",
    postPerson:"",
    assignTo:[],
    dueDate: ""
}

- PUT
/task/:id

Body {
    title:"",
    postPerson:"",
    assignTo:[],
}

- DELETE
/task/:id

## Bulk Tasks
/bulk/task/:ids

