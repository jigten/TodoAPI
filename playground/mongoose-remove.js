const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// We will get the document that was delted back
// will remove the first document to match the query
// Todo.findOneAndRemove()

// findByIdAndRemove is the same as above but can only find by the ID
Todo.findByIdAndRemove('59d28ee66b23cd90db7b328f').then((todo) => {
  console.log(todo)
})
