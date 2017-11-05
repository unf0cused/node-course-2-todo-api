// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate(
  //   {
  //     _id: new ObjectID('59ff8a4455fc9cb98e6006ba')
  //   },
  //   {
  //     $set: 
  //     {
  //       completed: true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   }
  // ).then((result) => 
  // {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate(
    {
      name: 'Jennifer'
    },
    {
      $set:
      {
        name: 'Jennifer'
      },
      $inc:
      {
        age: 1
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => 
  {
    console.log(result)
  })

  //db.close();
});
