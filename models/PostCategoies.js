import { Schema, model } from "mongoose";


const PostCategoiesSchema = new Schema({
    name: {type:String, required:true},
   
},
{
    timestamps: true
});


const PostCategoies = model("PostCategoies", PostCategoiesSchema);
export default PostCategoies;