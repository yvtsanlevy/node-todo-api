var mongoose= require('mongoose')

var Todo= mongoose.model('Todo', {
	text:{
		type: String,
		require:true,
		minlength:1,
		trim:true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default:null
	}
});

var newTodo =new Todo({
	text:'helllo',
	completed:false,
	completedAt:12
});

newTodo.save().then((doc)=>{
	console.log('Saved todo',doc);
},(err) =>{
	console.log('unable to save todo')
});

module.exports = {Todo};