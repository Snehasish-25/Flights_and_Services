start script ko include kiye h package.json me
FlightsAndSearch wale folder ke andar aakar "npm start" karne se server start ho jayega
Aur nodemon globally install kiya hua h isliye kisi project me use alag se install karne ka need nahi h

//DOTENV AND ENVIRONMENT VARIABLES
-->Dotenv is a popular npm (Node Package Manager) package used in NodeJS applications to manage environment variables. Environment variables are values that are set outside of an application’s code and are accessible to the application during runtime. These variables often contain sensitive information like API keys, database connection strings, or configuration settings.

-->create a .env file in the root folder i.e in tye FLIGHTSANDSEARCH folder and not inside the src folder
-->The .env file contains key-value pairs and these key value pairs can be accesssible throughout the project.wherever we require them simply invoke the file.
      require("dotenv").config();
      process.env.<Variable_Name>

Since we don't want to make our index.js file clumsy with environment varible details so we acquire the environment variables written in .env file in the config folder in separate files and export them from there and require them in the indexe.js file

In industrial level projects there are more than 1.env file like .env(dev) ,.env(for production), .env(for testing)
The separate .env files contain configs accordingly

MySql2 helps in binding our sql server to the sequilize ORM.It provides us the necessary drivers to connect sequilize with mysql server

do npx sequelize init outside the src folder because if done inside the src folder it will overwrite the entire src folder and then move the models folder created due to npx sequelize init inside the src folder and delete the already created models folder

move the migrations,seeders folder inside the src and also the config.json file

Now inside the src folder write npx sequelize db:create-->This will create a database for us but before that we need to configure our DB in the config.json file

**Should we put our Db password inside .env file -->