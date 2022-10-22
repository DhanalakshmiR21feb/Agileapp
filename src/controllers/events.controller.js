const Events = require("../models/events.model");
const EventsService = require("../services/events.service");
const EventsServiceInstance = new EventsService();
/* */
/* */
const getEventById=async(req,res)=>{
  const { id } = req.params;
  try {
    const result = await EventsServiceInstance.findById({ _id: id });
    res.json(result)
  } catch (err) {
    res.status(500).json(err);
  }
}

const creatNewEvent=async(req,res)=>{
    try {
        const result = await EventsServiceInstance.create(req.body);
        res.json(result);
      } catch (err) {
        res.status(500).json(err);
      }
}
const updateEventById=async(req,res)=>{
    try {
       const { id } = req.params;
       const filter = {
         _id: id,
         };
      const data = req.body;
      const result = await EventsServiceInstance.update(filter,data);
      res.json(result);
    } catch (err) {
  res.status(500).json(err);
}
}
const deleteById=async(req,res)=>{
  try {
    const { id } = req.params;
    const result = await EventsServiceInstance.delByID({ _id: id });
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}

const searchBytypePage=async(req,res)=>{
  try {
    const { type,limit,page} = req.query;
    const result = await EventsServiceInstance.search({ _id: id });
    res.json(result);
  } catch (err) {
    res.sendstatus(400);
  }
}
module.exports = {
    getEventById,
    searchBytypePage,
    creatNewEvent,
    updateEventById,
    deleteById
  };
  