const express=require("express");
const CityController=require("../../controller/city-controller");
const AirportController=require("../../controller/airport-controller")
const FlightController=require("../../controller/flight-controller")
const AirplaneController=require("../../controller/airplane-controller")
const {FlightMiddlewares}=require("../../middlewares/index")
const router=express.Router();

router.post("/city",CityController.create);  //mapping the controllers with specific routes
router.get("/city/:id",CityController.get);
router.get("/city",CityController.getAll);
router.delete("/city/:id",CityController.destroy);
router.patch("/city/:id",CityController.update);


router.post("/airport",AirportController.create);  //mapping the controllers with specific routes
router.get("/airport/:id",AirportController.get);
router.get("/airport",AirportController.getAll);
router.delete("/airport/:id",AirportController.destroy);
router.patch("/airport/:id",AirportController.update);

router.post("/airplanes",AirplaneController.create);  //mapping the controllers with specific routes
router.get("/airplanes/:id",AirplaneController.get);
router.get("/airplanes",AirplaneController.getAll);
router.delete("/airplanes/:id",AirplaneController.destroy);
router.patch("/airplanes/:id",AirplaneController.update);

router.post("/flights",FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get("/flights",FlightController.getAllFlights);
router.get("/flights/:id",FlightController.getFlights);

module.exports=router;

