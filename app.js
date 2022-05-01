const express = require('express');
const app = express(); //express application

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //middleware that parses json

const port = 8080 //port where the application will be exposed

// todosStorage will store all todos
var todosStorage = [
    {
        //default todo object in an uncompleted state
        id: 0,
        name: "Do some work",
        completed: false
    }
]

//method for getting all todos stored from the 'todosStorage'
app.get('/todos', (req, res) =>{
    try{
        res.send(todosStorage);
    }catch (error){
        res.statusCode(500).json({
            message: error.message
        });
    }
});


var id = 1 //next object to be added/posted to the todosStorage should start with 1

//method for adding a todo to the 'todosStorage'
app.post('/todo', (req, res) => { 
    try {
        const body = req.body;

        const todoObject = {
            id: id,
            name: body.name, 
            completed: body.completed
        }

        //name and copleted status null validation
        if(todoObject.name === "" || todoObject.completed === ""){ 
            throw Error ("Error: There must exist a todo with a status")
        }

        if(todoObject.name === "I'm lazy"){
            throw Error("Error: You are not allowed to be lazy");
        }
        
        //post, with "completed" status validation
        if (todoObject.completed === "true" || todoObject.completed === "false"){
            todosStorage.push(todoObject);
            res.sendStatus(200);
        }else{
            throw Error("Error: completed must either be true or false")
        }

        id += 1; //increment the id to the next number

    } catch (error) { 
        res.status(500).json({
            message: error.message
        });
 
    }
});


//method for replacing or updating a todo on the 'todosStorage'
app.put('/todo/:id', (req, res) => {
    try {
        const id = Number(req.params.id) //convert input id to number since id's from 'todosStorage' are also numbers
        const body = req.body;

        var todo = null;
        todosStorage.forEach(todoElement => {
            if(todoElement.id === id){
                todo = todoElement;
                todo.id = todoElement.id
                todo.name = body.name;
                todo.completed = body.completed;
            }
        });

        res.sendStatus(200);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

});


//Runs the localhost server and expose it on the specified port number
app.listen(`${port}`, () =>{
    console.log("The server is listening on port", `${port}`);
});