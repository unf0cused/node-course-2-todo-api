const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a03a54babcec72c70bdfccf11';

// if(!ObjectID.isValid(id))
// {
//     console.log('ID not valid');
// }

// Todo.find(
//     {
//         _id: id
//     }
// ).then((todos) => 
// {
//     console.log('Todos', todos);
// });

// Todo.findOne(
//     {
//         _id: id
//     }
// ).then((todo) => 
// {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => 
// {
//     if(!todo)
//     {
//         return console.log("ID not found");
//     }
//     console.log('Todo by ID', todo)
// }).catch((e) => console.log(e))

User.findById('5a00c9a26f20531f5cb24659').then((user) => {
    console.log(user)
}).catch((e) => {console.log('got that error')});