const Event =  require('../model/event');


  exports.getAllEvents = async (req, res) => {
    try { 
      // console.log("Hello");
      const events = await Event.find({});  
      res.status(200).json({ events });
    } catch (error) {
      res.status(500).json({ message: "Error fetching events" });
    }
  };
  
  exports.getEventById = async (req, res) => {
    try {
      const { id } = req.params;
      console.log("Received ID:", id);
      

      const events = await Event.find({});  

      // Find event by converting both to string for comparison
      const event = events.find((event) => event.id.toString() === id.toString());
  
      
  
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
  
      res.status(200).json({ event });
    } catch (error) {
      res.status(500).json({ message: "Error fetching event details" });
    }
  };
  
  exports.addEvent = async (req, res) => {
    try{
      console.log(req.body );
      const latestEvent = await Event.findOne().sort({ id: -1});
      let id = latestEvent? latestEvent.id + 1 : 1;
      console.log(id);
      
      // Destructure data from req.body
    const { title, image_url, termsAndConditions } = req.body;

    

    // Now pass each field explicitly (best practice)
    const newEvent = await Event.create({
      id,
      ...req.body
    });
      console.log(newEvent)
      console.log(id)

     
      res.status(201).json({ msg:" Event added SucessFully " , event: newEvent  });

    }
    catch(e){
     console.log("Error occured",e);
     res.status(500).json({ message: "Error adding Event " });
    }
  };
