const{Op}=require("sequelize");
const {City} =require("../models/index");

class CityRepository{

    async createCity({name})//obj destructuring  //{name:New Delhi}
    {
        try {
            const city=await City.create({name});  //why async-await -->because Js doesn't know how to connect with the DB(Interacting with the DB means interacting with a server outside the current server which requires some kind of TCP connection and hence asynchronous) ,it is an async task so handling it using promise based syntax;
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async updateCity(data,cityId) //here data is an object
    {
        try {
            //The below approach works fine but it returns an array having 1 element which indicates the no of rows affected
            // const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // })

            //But if we want the details of the updated city then we can follow the below approach
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save;
            
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
    async deleteCity(cityId)
    {
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getCity(cityId)
    {
        try {
            const city=await City.findByPk (cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getAllCities(filter)  //this filter can be an empty object also,if filter is empty then show all the cities else show the cities based on the filter
    {
        try {
            if(filter.name)
            {
                const cities=await City.findAll({
                    where:{
                        name:
                        {
                            [Op.startsWith]:filter.name  //require the Op object from sequelize
                        }
                    }
                })
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
}
module.exports=CityRepository;