const {Flights} =require("../models/index");
const {Op}=require("sequelize");

class FlightRepository{
    #createFilter(data)  //# ka use kiya jata h private banane keliye
    {
        const filter={};  //This function creates the overall filter object
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId)
            {
                filter.departureAirportId=data.departureAirportId;
            }
            if(data.minPrice && data.maxPrice)  //yeh nahi dene par sirf maxPrice wala filter hi bas apply hoga
            {

                //Both ways possible
                
                // Object.assign(filter,{
                //     [Op.and]:
                //     [
                //     {price:{[Op.gte]:data.minPrice}},
                //    {price:{[Op.lte]:data.maxPrice}}
                //     ]
                // })

                Object.assign(filter,{
                    price:{[Op.between]:[data.minPrice,data.maxPrice]}
                })
            }
            else if(data.minPrice)
            {
                Object.assign(filter,{price:{[Op.gte]:data.minPrice}})
            }
           else if(data.maxPrice)
           {
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}})
           }
            return filter;
    }

    async createFlight(data)
    {
        try {
            const flight=await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
    async getFlights(flightId)
    {
        try {
            const flight=await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getAllFlights(filter)  //Jo bhi filtration criteria receive hua h as query params usko #createFilter wale function me pass kar do
        {
            try {
                const filterObject=this.#createFilter(filter);
                const flight=await Flights.findAll({
                    where:filterObject
                });
                console.log(flight);
                return flight;
            } catch (error) {
                console.log("Something went wrong in the repository layer");
                throw(error);
            }
        }
    
}
module.exports=FlightRepository;