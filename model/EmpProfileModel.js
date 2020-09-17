var mongoose=require('mongoose');
var bcrypt=require('bcrypt');

var userschema=mongoose.Schema({

    
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'},
        
        ResumeHeadline:{
        type:String
    },
    Degree:{
        type:String
    },
    Specialization:{
        type:String
    },
    University:{
        type:String
    },
    PassoutYear:{
        type:Number
    },
    Grades:{
        type:String
    },
    Skill1:{
        type:String
    },
    Skill2:{
        type:String
    },
    Skill3:{
        type:String
    },
    ProjectTitle:{
        type:String
    },
    ProjectStatus:{
        type:String
    },
    ProjectStatus:{
        type:String
    },
    WorkingFrom:{
        type:String
    },
    WorkingTo:{
        type:String
    },
    ProjectDescription:{
        type:String
    },
    Title:{
        type:String
    },
    Institution:{
        type:String
    },
    PeriodFrom:{
        type:String
    },
    PeriodTo:{
        type:String
    },
    Description:{
        type:String
    },
    DateOfBirth:{
        type:String
    },
    Gender:{
        type:String
    },
    Gender:{
        type:String
    },
    MarritalStatus:{
        type:String
    },
    Address:{
        type:String
    },
    Pincode:{
        type:String
    },
    Hometown:{
        type:String
    }
    

})

mongoose.model('user2',userschema,'profiledata');