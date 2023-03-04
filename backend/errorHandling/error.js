const handleError=(err,req,res,next)=>{
    const message=err.message;
    const status=err.status;
    res.status(status).send({
        message:message
    })
 }
 module.exports = handleError;
 