const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server')

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59c1235b6dfe3f28c05b022c')
  }, {
    $set: {
      name: 'Ugyen Jigten'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // db.close()

})
