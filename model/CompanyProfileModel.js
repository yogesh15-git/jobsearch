var mongoose=require('mongoose');
var bcrypt=require('bcrypt');

var userschema=mongoose.Schema({

    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'},
        
        AssistantManager:{
        type:String
    },
    CompanyName:{
        type:String
    },
    Email:{
        type:String
    },
    CompanyDescription:{
        type:String
    },
    City:{
        type:String
    },
    State:{
        type:String
    },
    Country:{
        type:String
    },
    Pincode:{
        type:String
    }
    

})

mongoose.model('usered',userschema,'companyprofile');