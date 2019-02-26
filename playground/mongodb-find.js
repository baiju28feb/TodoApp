const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/Users', (err,db) => {
  if(err){
    return console.log('uable to connect to monogodb');
  }
    console.log('connected to mongodb server');

    // db.collection('TodoApp').find('baiju').count().then((count) => {
    //   console.log(`count : ${count}` );
    // }, (err) => {
    //   console.log("connection issue", err)
    // });
 //client.close();
  db.collection('Users').find({name:"baiju"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })

});
