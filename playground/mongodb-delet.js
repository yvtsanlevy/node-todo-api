const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost;27017/todoApp', { useNewUrlParser: true }, (err,client)=> {
	if(err){
		return console.log("unable to connect to mongodb");
	}
	console.log('connect to mongodb server');
const db =client.db('todoApp');


//deleteMany

// db.collection('todos').deleteMany({text:"new documant"}).then((res)=>
// 	{
// 		console.log(res);
// 	});

//deleteOne

// db.collection('todos').deleteOne({text:"aaa"}).then((res)=>
// 	{
// 		console.log(res);
// 	});

// findOneAndDelete

db.collection('todos').findOneAndDelete({completed:false}).then((res)=>
	{
		console.log(res);
	});
	// client.close();
});
