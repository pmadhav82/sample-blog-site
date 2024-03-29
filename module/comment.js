const {Schema, model} = require("mongoose");

const commentSchema = new Schema({
    text: {
        type:String,
        required:true
    },
    post:{
type: Schema.Types.ObjectId,
ref:"Posts"
    },
    parentComment:{
        type: Schema.Types.ObjectId,
        ref:"Comment",
        default:null
    },
    createdAt:{
type:Date,
default: Date.now()
    },
    replies:[{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    }]
})
 commentSchema.pre("find", function(next){
    this.populate({path:"replies"})
    next()
 })

const Comment = new model("Comment", commentSchema)

module.exports = Comment;