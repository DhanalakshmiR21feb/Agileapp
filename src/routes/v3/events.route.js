const express = require("express");
const eventValidation = require("../../validations/event.validator");

const {
    getEventById,
    searchBytypePage,
    creatNewEvent,
    updateEventById,
    deleteById
} = require("../../controllers/events.controller");

const router = express.Router();

//Gets an event by its unique id
router.get("/:id",getEventById);

//Gets an event by its recency & paginate results by page number and limit of events per page
router.get("/search",searchBytypePage);

//Creates an event and returns the Id of the event i.e. created
router.post("/",creatNewEvent);

//update an event
router.put("/:id",updateEventById);

//delete an event by id
router.delete("/:id",deleteById);

module.exports = router;
