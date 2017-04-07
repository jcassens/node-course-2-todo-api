const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB Server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').find(
    {_id: new ObjectID('58d91f596b656c11ccb8370b')
    }).toArray().then((docs) => {
    console.log('ToDos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todo records', err);
  });

   //db.close();
 });
