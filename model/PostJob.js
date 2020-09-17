var mongoose=require('mongoose');
var bcrypt=require('bcrypt');

var userschema=mongoose.Schema({

    PostDescription:{
        type:String
    },
    Company:{
        type:String
    },
    Experience:{
        type:String
    },
    Location:{
        type:String
    },
    JobDescription:{
        type:String
    },
    Status:{
        type:String
    },
    Openings:{
        type:String
    },
    PostTime:{
        type:String
    }
    

})

mongoose.model('user3',userschema,'PostJob');