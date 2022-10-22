const mongoose = require("mongoose");
const validator = require("validator");
/*
"type:""event""
uid:18 (user id)
name: Name of the event
tagline: A proper tag-line for the event
schedule: (Date + time) Timestamp
description: String
files[image]: Image file (File upload)
moderator: A user who is going to host
category: Category of the event
sub_category: Sub category
rigor_rank: Integer value
attendees: Array of user Id's who is attending the event
"	
*/
const eventsSchema = new mongoose.Schema(
  {
    type:{ type: String, maxlength: 25 },
    name: { type: String, maxlength: 25 },
    tagline: { type: String, maxlength: 25 },
    schedule:{type:Date},
    description: { type: String, maxlength: 25 },
    image: {
      type: String,
      validate: (thisIsTheStringThatIAmTryingToSave) => {
        return validator.isURL(thisIsTheStringThatIAmTryingToSave);
      },
    },
    moderator: { type: String, maxlength: 25 },
    category: { type: String, maxlength: 25 },
    sub_category: { type: String, maxlength: 25 },
    rigor_rank:{ type: Number, maxlength: 25 },
    attendees:[{
        type: String
      }],
  },
  { timestamps: true } //to save created date and Updated date
);

const eventsModel = mongoose.model("Events", eventsSchema);

module.exports = eventsModel;
