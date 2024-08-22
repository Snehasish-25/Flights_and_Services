const {FlightService}=require("../services/index");
const{successCodes}=require("../utils/error-codes")

const flightService=new FlightService();

const create=async (req,res)=>{
    try {
       // console.log(req.body);
       //Suppose agar user req ke body me unnecessary fields send kar raha h then we dont want to bloat our request body therefore accumulating only the required fields inside an object
       let flightRequestData={

        flightNumber:req.body.flightNumber,
        airplaneId:req.body.airplaneId,
        departureAirportId:req.body.departureAirportId,
        arrivalAirportId:req.body.arrivalAirportId,
        arrivalTime:req.body.arrivalTime,
        departureTime:req.body.departureTime,
        price:req.body.price

       }
        const flight=await flightService.createFlight(flightRequestData);
        //Structuring the response body
        return res.status(successCodes.CREATED).json({
            data:flight,
            success:true,
            message:"Flight created successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
    });
}
}

const getFlights=async (req,res)=>{
    try {
        const flight=await flightService.getFlights(req.params.id);
        return res.status(successCodes.OK).json({
            data:flight,
            success:true,
            message:"Flight retrieved successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the flight",
            err:error
    });
    }
}

const getAllFlights=async(req,res)=>{
    try {
        const flights=await flightService.getAllFlights(req.query);
        //Structuring the response body
        return res.status(successCodes.OK).json({
            data:flights,
            success:true,
            message:"Flights rerieved successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the flights",
            err:error
    });
}
}
module.exports={
    create,
    getAllFlights,
    getFlights
}