//Object.freeze is a method in JavaScript that allows you to freeze an object,
// meaning that you prevent any modifications to its properties. Once an object is frozen, 
//you cannot add new properties, delete existing properties, or change the values of existing properties. 
//This method is useful for creating immutable objects,
const clientErrorCodes=Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORISED:401,
    NOT_FOUND:404
})

const serverErrorCodes=Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501
})

const successCodes=Object.freeze({
    OK:200,
    CREATED:201
})

module.exports={
    clientErrorCodes,
    serverErrorCodes,
    successCodes
}