import { v4 as uuidv4 } from 'uuid';

let users = []; //change from const to let us change user array

export const getUsers = (req, res) => {

    res.send(users);
    
}

export const getUser = (req, res) => { //to route via Id

    const {id}  = req.params;
 
    const foundUser = users.find((user) => user.id === id);
 
     res.send(foundUser); //push feedback on the frontend
 }
export const createUser =  (req, res) => {

    const user = req.body;

    //const userWithId = {  ...user, id: uuidv4() };

    users.push({  ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`); //this is just to get feedback when our POSt route is reached successfully from the Client Side
}

export const deleteUser = (req, res) => {
    const {id}  = req.params;

    users = users.filter((user) => user.id !== id); //this filter out the id specified and then delete it

    res.send(`User with the id ${id} deleted from the database successfully`); //always use ` instead of ' when referencing an object
}

export const updateUser = (req, res) => {
    const {id} = req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated in the database successffuly`); 
    

}
