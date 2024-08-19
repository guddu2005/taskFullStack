const dotenv = require("dotenv");
const {MONGO_URL_KEY} = require("./constant");

dotenv.config();

const MONGO_URL = process.env[MONGO_URL_KEY];

module.exports ={
    MONGO_URL,
}