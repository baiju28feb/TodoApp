const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true } , (err, client) => {
  if(err){
    return console.log('uable to connect to monogodb');
  }
  // console.log('connected to mongodb server');
  // const db = client.db('TodoApp');
  //
  // db.collection('TodoApp').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err){
  //     return console.log('unable to add todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

    console.log('connected to mongodb server');
    const db = client.db('Users')

    db.collection('Users').insertOne({
      name: "baiju",
      age: 27,
      location:"bangalore"
      
    }, (err,result) => {
      if(err){
        return console.log('unable to add todo', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });



 client.close();
})
