
const {AirportRepository}=require("../repository/index");

class AirportService{
    constructor()
    {
        this.airportRepository=new AirportRepository();
    }
    async createAirport(data)
    {
        try {
            const response=await this.airportRepository.createAirport(data);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
    async deleteAirport(airportId)
    {
        try {
            const response=await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
    async updateAirport(data,airportId)
    {
        try {
            const response=await this.airportRepository.updateAirport(data,airportId);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
    async getAirport(airportId)
    {
        try {
            const response=await this.airportRepository.getAirport(airportId);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
    async getAllAirports(filter)
    {
        try {
            const response=await this.airportRepository.getAllAirports({name:filter.name});
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
}

module.exports=AirportService;