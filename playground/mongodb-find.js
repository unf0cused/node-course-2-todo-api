// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59fdb83a13d5d532bca5bc60')
  // }).toArray().then((docs) =>
  // {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>
  // {
  //   console.log('Unable to fetch todos', err);
  // }
  // );

  // db.collection('Todos').find().count().then((count) =>
  // {
  //   console.log(`Todos count: ${count}`);
  // }, (err) =>
  // {
  //   console.log('Unable to fetch todos', err);
  // }
  // );

  var argument = process.argv[2];

  console.log('Searching for:', argument);
  
db.collection('Users').find({name: argument}).toArray().then((docs) =>
  {
    console.log(docs);
  }, (err) =>
  {
    console.log('Nope, can\'t do it');
  }
)

  //db.close();
});
