const Eventsmodel = require("../models/events.model");

class EventsService {
  save = async (doc) => {
    const result = await doc.save();
    return result;
  };

  create = async (data) => {
    const newDoc = new Eventsmodel(data);
    const result = await this.save(newDoc);
    return result;
  };

  findById = async (id) => {
    const result = await Eventsmodel.find({_id:id});
    return result;
  };

  update=async(filter,data)=>{
    const result = await Eventsmodel.findOneAndUpdate(filter, data, { new: true });
    return res.json(result);
  };
  delByID=async(id)=>{
    const result = await Eventsmodel.findOneAndDelete({ _id: id });
    return res.json(result);
  };
  search=async(type,limit,page)=>{
    const typeValue = type || "event";
    const limitValue = limit || 2;
        const pageValue = page || 0;
        const result = await Eventsmodel.find().type(typeValue)
            .limit(limitValue).skip(pageValue);
        return result;
  }
}

module.exports = EventsService;
