# Welcome to FLIGHTS And SEARCH SERVICE

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the folowing environment variable
     - `PORT=3000`
- Inside the `src/config` folder craete a new file `config.json` and then add the following json

```
{
  "development": {
    "username": <YOUR_DB_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```