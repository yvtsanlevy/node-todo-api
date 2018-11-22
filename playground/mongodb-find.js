const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost;27017/todoApp', { useNewUrlParser: true }, (err,client)=> {
	if(err){
		return console.log("unable to connect to mongodb");
	}
	console.log('connect to mongodb server');
const db =client.db('todoApp');
// db.collection('todos').find({completed:false}).toArray().then((docs)=>{
//     console.log('todos');
//     console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('error,err');
// });

db.collection('todos').find()
.count().then((count)=>{
    console.log("todos count:",count);
  
},(err)=>{
    console.log('error,err');
});

	// client.close();
});
