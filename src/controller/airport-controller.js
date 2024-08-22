const {AirportService}=require("../services/index");
const {successCodes}=require("../utils/error-codes")
const airportService=new AirportService();

//POST /airport
const create=async(req,res)=>{
    try {
        const airport=await airportService.createAirport(req.body);
        //Structuring the response body
        return res.status(successCodes.CREATED).json({
            data:airport,
            success:true,
            message:"Airport created successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a airport",
            err:error
    });
}
}

//DELETE  /airport/:id
const destroy=async(req,res)=>{
    try {
        const airport=await airportService.deleteAirport(req.params.id);
        //Structuring the response body
        return res.status(successCodes.OK).json({
            data:airport,
            success:true,
            message:"Airport deleted successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the airport",
            err:error
    });
}
}

//PATCH  /airport/:id
const update=async(req,res)=>{
    try {
        const airport=await airportService.updateAirport(req.body,req.params.id);
        //Structuring the response body
        return res.status(successCodes.OK).json({
            data:airport,
            success:true,
            message:"Airport updated successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the airport",
            err:error
    });
}
}

//GET  /airport/:id
const get=async(req,res)=>{
    try {
        const airport=await airportService.getAirport(req.params.id);
        //Structuring the response body
        return res.status(successCodes.OK).json({
            data:airport,
            success:true,
            message:"Airport fetched successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the airport",
            err:error
    });
}
}

const getAll=async(req,res)=>{
    try {
        const airports=await airportService.getAllAirports(req.query);
        //Structuring the response body
        return res.status(successCodes.OK).json({
            data:airports,
            success:true,
            message:"Airports fetched successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to feetch the airports",
            err:error
    });
}
}

module.exports={
    get,
    getAll,
    destroy,
    create,
    update
}