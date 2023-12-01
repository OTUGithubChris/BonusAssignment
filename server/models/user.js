let mongoose = require('mongoose');

let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username:
    {
        type:String,
        default:"",
        trim:true,
        required:"Username is required"
    },
    /*
    password:
    {
        type:String,
        default:"",
        trim:true,
        required:"Password is required"
    },
    */
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required:"displayName is required"
    },
    created:
    {
        type:Date,
        default:Date.now,
        trim:true,
    },
    update:
    {
        type:Date,
        default:Date.now,
    }
},
{
    collection:"user"
}
);

//config options for user model
let options = ({missingPasswordError:"Wrong/missing password"});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);