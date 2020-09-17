var mongoose=require('mongoose');
var bcrypt=require('bcrypt');

var userschema=mongoose.Schema({

    PostDescription:{
        type:String
    },
   
    

})

mongoose.model('user4',userschema,'collect');