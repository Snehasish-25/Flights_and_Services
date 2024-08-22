const {CityRepository}=require("../repository/index");

//In the service layer we are calling/consuming the functions exposed to us by the repository layer
//In order to consume the functions we need to create an instance/object of the CityRepository class
class CityService{
    constructor()
    {
        this.cityRepository=new CityRepository();  //dynamically creating an instance/object of the CityRepository class
    }
    async createCity(data)  //the data passed as an argument here is an object
    {
        try {
            const response=await this.cityRepository.createCity(data);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
    async updateCity(data,cityId)
    {
        try {
            const response=await this.cityRepository.updateCity(data,cityId);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
    async getCity(cityId)
    {
        try {
            const response=await this.cityRepository.getCity(cityId);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);  
        }
    }
    async getAllCities(filter)
    {
        try {
            const response=await this.cityRepository.getAllCities({name:filter.name});
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);  
        }
    }


    async deleteCity(cityId)
    {
        try {
            const response=await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Some error occured at the service layer");
            throw(error);
        }
    }
}
module.exports=CityService;