const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost;27017/todoApp', { useNewUrlParser: true }, (err,client)=> {
	if(err){
		return console.log("unable to connect to mongodb");
	}
	console.log('connect to mongodb server');
const db =client.db('todoApp');


db.collection('todos').findOneAndUpdate({
	_id:new ObjectID('5bf68a691bf5cb749074c4b8')
},{
	$set:{
		completed:true
	}
},{
	returnOriginal: false
}).then((res)=>{
	console.log(res);
});

db.collection('todos').findOneAndUpdate({
	_id:new ObjectID('5bf68b971bf5cb749074c536')
},{
	$set:{
		text:"bbbb"
	},
	$inc:{
		quantity:-4
	}
},{
	returnOriginal: false
}).then((res)=>{
	console.log(res);
});


	// client.close();
});
