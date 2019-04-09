#APIs

##People

- GET
/people/:id

- POST
/people

    request body:
    {
        name:"",
        email:"",
        role:"",
        wage:"",
        phone:"",
        birthday:"",
        shifts:[
            {
                startTime: Date,
                endTime: String,
                taskId: String
            },
            ....
        ]
    }

- PUT
/people/:id

    request Body:
    {
        name:"",
        email:"",
        role:"", 
        wage:"",
        phone:"",
        birthday:"",
        shifts:[
            {
                startTime: Date,
                endTime: String,
                taskId: String
            },
            ....
        ]
    }

- DELETE
/people/:id

## Bulk People
/bulk/people/:ids

## Tasks

- GET
/task/:id

- POST
/task

    request body {
        title:"",
        postPerson:"",
        assignTo:[],
        dueDate: ""
    }

- PUT
/task/:id

    request body {
        title:"",
        postPerson:"",
        assignTo:[],
    }

- DELETE
/task/:id

## Bulk Tasks
/bulk/task/:ids

