const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost;27017/todoApp', { useNewUrlParser: true }, (err,client)=> {
	if(err){
		return console.log("unable to connect to mongodb");
	}
	console.log('connect to mongodb server');

    // const db = client.db('todoApp')
    // db.collection('todos').insertOne({
    //  text:'somthing to do',
    //  completed: false

    // },(err,res) =>{
    // 	if(err){
    // 		return console.log('unable to insert todo',err)
    // 	}

    // 	console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    const db =client.db('users');
    db.collection('users').insertOne({
    	name:'yvtsan',
    	age:26,
    	location:'israel'

    },(err,res)=>{
    	if(err){
    		return console.log('error',err);
    	}
    		console.log(JSON.stringify(res.ops, undefined, 2));
    });

	client.close();
});
