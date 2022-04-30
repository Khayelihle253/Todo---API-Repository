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

        if(todoObject.name === "I'm lazy"){
            throw Error("You are not allowed to be lazy");
        }
        
        todosStorage.push(todoObject);
        res.sendStatus(200);

        id += 1; //increment the id to the next number

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