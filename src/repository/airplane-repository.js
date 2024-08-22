const CrudRepository=require("./crud-repository");
const {Airplane}=require("../models/index");

class AirplaneRepository extends CrudRepository{
    constructor()
    {
    //The super keyword is used to call the constructor (or other methods) of the parent class from the child class.
   //In the constructor of a child class, you must call super() before you can use this. 
   //This is because super() is responsible for initializing the parent class's properties that are inherited by the child class.
        super(Airplane);
    }

}


module.exports=AirplaneRepository;