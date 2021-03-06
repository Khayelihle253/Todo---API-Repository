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
app.post('/todos', (req, res) => { 
    try {
        const body = req.body;

        const todoObject = {
            id: id,
            name: body.name, 
            completed: body.completed
        }

        //name and copleted status null validation
        if(todoObject.name === "" || todoObject.completed === ""){ 
            throw Error ("Error: There must exist a 'todo' with a corresponding 'completed' status")
        }

        if(todoObject.name === "I'm lazy"){
            throw Error("Error: You are not allowed to be lazy");
        }
        
        //post, with "completed" status validation
        if (todoObject.completed === "true" || todoObject.completed === "false"){
            todosStorage.push(todoObject);
            res.sendStatus(200);
        }else{
            throw Error("Error: 'completed' must either be true or false");
        }

        id += 1; //increment the id to the next number

    } catch (error) { 
        res.status(500).json({
            message: error.message
        });
 
    }
});


//method for replacing or updating a todo on the 'todosStorage'
app.put('/todos/:id', (req, res) => {
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

        //put validations
        if(todo === null){
            throw Error ("You are attempting to update a non-existing todo, do a 'POST' instead")
        }
        if(todo.name === "I'm lazy"){
            throw Error("Error: You are not allowed to be lazy");
        }

        if(todo.name === "" || todo.completed === ""){ 
            throw Error ("Error: There must exist a 'todo' with a corresponding 'completed' status")
        }

        //put, with "completed" status validation
        if (todo.completed === "true" || todo.completed === "false"){
            res.sendStatus(200);
        }else{
            throw Error("Error: 'completed' must either be true or false")
        }        

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

});


//method for deleting a todo from the 'todosStorage'
app.delete('/todos/:id', (req, res) => {
    try {
        const id = Number(req.params.id);

        let index = null;
        todosStorage.forEach(todoElement => {
            if(todoElement.id === id){
                index = id;
            }
        });

        if (index !== null){
            todosStorage.splice(index, 1); // At position "index", remove 1 item
            res.sendStatus(200);
        }else{
            throw Error ("You are attempting to delete a non-existing todo")
        }
        

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