const express = require('express');
const app = express(); //express application

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

//method for getting all todos stored from'todosStorage'
app.get('/todos', (req, res) =>{
    try{
        res.send(todosStorage);
    }catch (error){
        res.statusCode(500).json({
            message: "An unexpected error occured on the server"
        });
    }
});

//Runs the localhost server and expose it on the specified port number
app.listen(`${port}`, () =>{
    console.log("The server is listening on port", `${port}`);
});