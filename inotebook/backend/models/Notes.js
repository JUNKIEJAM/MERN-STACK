const mongoose = require('mongoose');
const router=express.Router();



const NotesSchema = new Schema({

    title :{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
     
    },
   
    tag: {
        type: String,
        default:'General'
         
    },

    date: {
        type: Date,
        default: Data.now
    },

    timestamp: {
        type: Data,
        required: Data.now
    }
});

module.exports=mongoose.model('notes',NotesSchema)