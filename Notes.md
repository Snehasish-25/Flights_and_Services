start script ko include kiye h package.json me
FlightsAndSearch wale folder ke andar aakar "npm start" karne se server start ho jayega
Aur nodemon globally install kiya hua h isliye kisi project me use alag se install karne ka need nahi h

//DOTENV AND ENVIRONMENT VARIABLES
-->Dotenv is a popular npm (Node Package Manager) package used in NodeJS applications to manage environment variables. Environment variables are values that are set outside of an application’s code and are accessible to the application during runtime. These variables often contain sensitive information like API keys, database connection strings, or configuration settings.

-->create a .env file in the root folder i.e in tye FLIGHTSANDSEARCH folder and not inside the src folder
-->The .env file contains key-value pairs and these key value pairs can be accesssible throughout the project.wherever we require them simply invoke the file.
      require("dotenv").config();
      process.env.<Variable_Name>

Since we don't want to make our index.js file clumsy with environment varible details so we acquire the environment variables written in .env file in the config folder in separate files and export them from there and require them in the index.js file or wherever required

In industrial level projects there are more than 1.env file like .env(dev) ,.env(for production), .env(for testing)
The separate .env files contain configs accordingly

MySql2 helps in binding/connecting our sql server to the sequelize ORM.It provides us the necessary drivers to connect sequelize with mysql server.

do npx sequelize init outside the src folder because if done inside the src folder it will overwrite the entire src folder and then move the models folder created due to npx sequelize init inside the src folder and delete the already created models folder

move the migrations,seeders folder inside the src and also the config.json file

Now inside the src folder write npx sequelize db:create-->This will create a database for us but before that we need to configure our DB in the config.json file

**Should we put our Db password inside .env file --> No because we cannot access that password inside our config.json using process.env.<>.The environment variables can be accessible inside .js files only.

--> MVC pattern is a pattern to segregate your logic inside one service and if we put all the services inside one single folder it becomes monolith.

//CLASS-2,3,4

//Create City Model(Model is like a blueprint of the actual table)
write npx sequelize model:generate --name <name of the model> --attribute name:String 
Do this inside the src folder.This will generate a model file and a migration file .

-->Model create karne ke baad bhi woh table database me show nahi kar raha h,Why?
because it has only created JS classes for us ,the classes are not synced with the database.

-->If we want to make some changes to our tables we can do it before applting the migrations.Once the changes are done both at the JS level and DB level(in the migrations file) run the below command

**npx sequelize db:migrate(This will apply the migrations to our db and the necessary tables will be created)

Just like you use version control systems such as Git to manage changes in your source code, you can use migrations to keep track of changes to the database. With migrations you can transfer your existing database into another state and vice versa: Those state transitions are saved in migration files, which describe how to get to the new state and how to revert the changes in order to get back to the old state.

name ka value ko agar (allowNull:false) mark krte h
1.Only in the migrations file-->then it will be reflected in the tables
2.Only in the models file then not reflected in the tables only present at Js level
3.Done at both places->reflected in table as well as js level.

If the constraint is only at the database level and not in the JS level,then suppose we insert an entry into the table where we don't pass any value of name,then it will actually initiate a db call and then the db will throw an error,so basically we wasted a db call(resource wastage).

-->Now in order to interact with the model we use the repository folder
The repository layer requires the necessary model and then exposes/creates "async" functions to interact(CRUD operations) with the DB.

-->The repository layer exposes the functions req to interact with the DB,The service layer actually calls/invokes the functions exposed.The service layer contains the core business logic.

-->After the service layer we write the controller which 
(receives the req-->calls the respective functions from the service layer-->receives the response from that function -->prepares the response body and sends it to the client either in form of JSON or html(aka server side rendering))

-->After the controller we write the routes in the routes folder using the express.Router() function,
Jo sabse top level route path prefix hoga like [/api] usko index.js file me likhenge and rest inside the routes folder

//CLASS-5

Next we create the airports model,migrations and table.
-->In the migrations of the Airport table we do the below changes
cityId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"Cities",
          key:"id",
          as:"cityId"
        },
        allowNull:false
      }
we do this in order to link/associate the airports table with the city table.

-->Now we can insert data inside the airport without actually craeting the APIs as we did in case of cities table rather we can use the seeder folder to seed the data 
-->For seeding data into the airports table we need to follow the below steps
1.write npx sequelize seed:generate --name <name of the seeder file> inside the src folder
2.Create the seeding keeping in my the attributes of the airports table.
3.wite npx sequelize db:seed:all to apply the data of the seed file into the airports table,

-->Now suppose we want to get the list of all the airports associated with a particular cityId ,in that case the raw SQl query will be
**select * from airports join cities on airports.cityID=cities.id where cities.id=<id of the city>

But if we want to do the same using sequelize,then there are two ways to do that
1.Write raw sql queries using sequelize.query()
2.By the below code 
    app.listen(PORT,async()=>{
        console.log(`Server started on port ${PORT}`);
         if(process.env.SYNC_DB)
         db.sequelize.sync({alter:true});  
        //we need to sync with the db inorder to get access to certain functions like city.getAirports()
        
         const city=await City.findOne({
             where:{
                 id:21
             }
         })
         const airports=await city.getAirports();
         console.log(city,airports);
    })

-->We can pass default values to our attributes so that in case we don't pass any value to that attribute it is not null,But we must pass value to every attribute in case we are seeding the files

//Class-6(Implementing other Services part-1)

-->At first we create the flights model,and make the necessary updations in the models and migrations,then apply the migrations.The flights database has 1 attribute that is the availableSeats which it gets from the airplanes model
-->Then we write the repository for the flights model,in this case we prepare a separate createFilter function that creates the filter Object for us and we pass it in our getAllFlights function

-->createFilter function me price ko handle karne ke liye operators ka use kar rahe h thoda complex h
-->If we dont apply the minPrice && maxPrice wala condition then woh maxPrice wale condition se overwrite ho jaa raha h
