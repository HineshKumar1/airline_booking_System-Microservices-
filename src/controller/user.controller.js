const {StatusCodes} = require('http-status-codes');

const hello = (req,res)=>{
   res.status(StatusCodes.CREATED).send({
    success: false,
    message: "Hi Hinesh Kumar"
   })
}

module.exports = {
    hello
}