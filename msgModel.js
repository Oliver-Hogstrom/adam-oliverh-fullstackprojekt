const  mongoose  = require("mongoose")


const msgSchema = new mongoose.Schema({
    msg: String,
    name: String
  });

  const Msg = mongoose.model('msg', msgSchema)

  exports.createMsg = (msg, name) =>{
      let message = new Msg({
          msg: msg,
          name: name
        })
        return message
  }

  exports.getAllMessages = async () => {
    let messages = await Msg.find({})
    return messages
}