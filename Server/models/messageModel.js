const mongoose = require("mongoose");


const MessageSchema = new mongoose.Schema({
    
    messageID: {
        type: Number,
        // required: true
    },
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        delivered : Boolean,
        read : Boolean
      },
      // datetime: {
      //   type: Date,
      //   default: Date.now(),
      // },
      users: {
        type: mongoose.Schema.ObjectId,
        ref: "useModel",
        // required: true,
      },
      // sender: { 
      //   type: mongoose.Schema.Types.ObjectId, 
      //   ref: 'User',
      //   required: true
      // },
},
{ timestamps: true }
)

module.exports = mongoose.model("Message", MessageSchema);