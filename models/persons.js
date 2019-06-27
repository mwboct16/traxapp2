const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    address2: String,
    city: String,
    chosenState: String,
    zipCode: String,
    // Use GridFS to store binary data (example for this project AWS Rekognition Image data)
    // imageData: 
    dateJoined: Date,
});

const Persons = mongoose.model("Persons", personSchema)

module.exports = Persons;