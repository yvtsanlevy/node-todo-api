var mongoose= require('mongoose')

var User= mongoose.model('User', {
	name:{
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
var user =new User({
	name:'h'
});

user.save().then((doc)=>{
	console.log('Saved todo',doc);
},(err) =>{
	console.log('unable to save todo')
});
module.exports={User}