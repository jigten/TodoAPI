const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

var userID = '59d11b8273a8807036b314af'
// var id = '59d22aec1deb617818658c05'
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID is not valid')
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found!')
//   }
//
//   console.log('Todo By Id', todo)
// }).catch((e) => console.log(e))

User.findById(userID).then((user) => {
  if(!user) {
    return console.log('No user with that ID found!')
  }

  console.log('User by ID', user)
}).catch((e) => console.log(e))
