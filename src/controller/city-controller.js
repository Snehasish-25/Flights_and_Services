const {CityService}=require("../services/index");
const{successCodes}=require("../utils/error-codes")
const cityService= new CityService();  //dynamicaly creating an instance of the CityService class

//POST /city
const create=async(req,res)=>{
    try {
        const city=await cityService.createCity(req.body);
        //Structuring the response body
        return res.status(successCodes.CREATED).json({
            data:city,
            success:true,
            message:"City created successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
    });
}
}

//DELETE /city/:id
const destroy=async (req,res)=>{
    try {
        const response=await cityService.deleteCity(req.params.id);
        return res.status(successCodes.OK).json({
            data:response,
            success:true,
            message:"City deleted successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            err:error
    });
}
}


//GET /city/:id
const get=async (req,res)=>{
    try {
        const city=await cityService.getCity(req.params.id);
        return res.status(successCodes.OK).json({
            data:city,
            success:true,
            message:"City fetched successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the city",
            err:error
    });
}
}

//GET  /city?name=Chen..   (may or may not contain some query params)
const getAll = async (req,res)=>{
    try {
        const cities=await cityService.getAllCities(req.query);
        return res.status(successCodes.OK).json({
            data:cities,
            success:true,
            message:"Cities fetched successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the cities",
            err:error
    });
}
}



//PATCH  /city/:id
const update=async (req,res)=>{
    try {
        const response=await cityService.updateCity(req.body,req.params.id);
        return res.status(successCodes.OK).json({
            data:response,
            success:true,
            message:"City updated successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error
    });
}
}

module.exports={
    create,
    destroy,
    update,
    get,
    getAll
};