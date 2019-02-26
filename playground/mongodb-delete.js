const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/Users', (err,db) => {
  if(err){
    return console.log('uable to connect to monogodb');
  }
    console.log('connected to mongodb server');

  db.collection('Users').findOneAndDelete(ObjectId('5c74df6b3476f30840719cf2')).then((result) => {
    console.log(result);
  })

});
