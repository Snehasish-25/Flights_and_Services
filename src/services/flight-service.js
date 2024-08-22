const {FlightRepository,AirplaneRepository}=require("../repository/index");
const {compareTime,compareDate}=require("../utils/helper");

class FlightService{
  constructor()
  {
    this.flightRepository=new FlightRepository();
    this.airplaneRepository=new AirplaneRepository();
  }
  async createFlight(data)
  {
    try {
      if(!compareTime(data.arrivalTime,data.departureTime))
      {
        
        throw{error:"Arrival time cannot be less than departure time"};
      }
      if(!compareDate(data.arrivalTime,data.departureTime))
        {
          throw{error:"Arrival date cannot be less than departure date"};
        }
        const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
        const avlSeats=airplane.capacity;
        //console.log(data);
        const flight=await this.flightRepository.createFlight({...data,availableSeats:avlSeats});
        return flight;
    } catch (error) {
           console.log("Some error occured at the service layer");
            throw(error);  
    }
  }

  async getFlights(flightId)
  {
    try {
      const flight=await this.flightRepository.getFlights(flightId);
      return flight;
    } catch (error) {
      console.log("Some error occured at the service layer");
      throw(error);  
    }
  }

  async getAllFlights(data)
  {
    try {
      const flights=await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Some error occured at the service layer");
            throw(error);  
    }
  }
}
module.exports=FlightService;