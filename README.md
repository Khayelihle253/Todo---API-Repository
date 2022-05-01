Description of the application:

General understanding
This is a task management application that allows you to see or add tasks that you need to do.
It also allows you to see the ones you have completed and the ones you have not completed.  

Technnical understanding
This is a simple todo API problem that allows the client/user to GET, POST, PUT and DELETE todo objects
stored within the application. 
Each todo object takes arguments for the attributes id, name, and completed.
The "id" attribute is an identifier for each todo object, "name" is where the client is required to specify 
the task that they need to do, and "complete" is a flag representing the completion status with values set to either true or false. 


How to build and run the code locally:

1) Download the project from GitHub on this link: https://github.com/Khayelihle253/Todo---API-Repository.git
   - unzip the file and open it with a code editor of your choice e.g Visual Studio Code

2) Make sure you have "Node js" installed on you machine, you can check this by running the command 'node -v'
  - If node if not installed, download and install it from https://nodejs.org/en/download/.

3) Once node js is installed, on the project directory run the command 'npm install' to install the application dependencies. This will create a "node_modules" folder with packages of the application dependencies found in package.json file. Once this is done move to step 4.

4)  Run the actual application with the following command 'node app'
  - The server will then run the application on localhost:8080 with "The server is listening on port 8080" displayed on the console to confirm that the server is listening
  - The application will then be ready to handle http requests (get, post, put and delete)

5) Now you can you use any API testing environment such as Postman, HTTPie or any to test the API/ application. 

6) The following are the API endpoints for testing the todo API:
   - GET (localhost:8080/todos)
   - POST (localhost:8080/todos)
   - PUT (localhost:8080/todos/)
   - DELETE (localhost:8080/todos/)

7) For the POST and PUT requests, the following JSON format should be used to push todo objects

    JSON example format:

    {
        "name": "Do more work",
        "completed": "false"
    }

8) If the previous steps are followed correctly, you will get appropriate results as expected.
  - You can also test with INCORRECT data/values to test all the implemented input VALIDATIONS! 
 

Dependencies:

All project dependencies are found in the "package.json" file, under "dependencies" section.
For this project we installed 'Express js' to make our API development easier, and more optimized.
 - This dependency contains many packages and folders that need to available for the application to 
   run, these can be found under "node_modules" folder after the command 'npm install' in run in the 
   terminal 
