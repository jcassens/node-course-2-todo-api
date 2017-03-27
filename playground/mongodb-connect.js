const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB Server');
  }
  console.log('Connected to MongoDB Server');
  // db.collection('Todos').insertOne({
  //   text:'Something else to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });
  //
  //

db.collection('Users').insertOne({
  name: 'jeff.cassens@gmail.com',
  age: 58,
  location: 'Summerville, SC 29483'
}, (err, result) => {
  if(err) {
    return console.log('Unable to add User', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2))
});

  db.close();
});
