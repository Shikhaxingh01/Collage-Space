const Announcement = require('../model/announcement');

exports.getannouncement = async(req,res)=>{
    try{
      const data = await Announcement.find({});
      res.status(200).json({announcements:data});
    }
    catch(e)
    {
        res.status(500).json({message:"Error in fetching Message"});
    }
    
}

exports.addAnnouncement = async(req,res)=>{
  try {
    const { title, content, category } = req.body;

    if (!title || !content || category === undefined) {
        return res.status(400).json({ message: "Title, content, and category are required." });
    }

    // Auto-generate ID
    const latest = await Announcement.findOne().sort({ id: -1 });
    const id = latest ? latest.id + 2 : 1;
    // Set current date and default endDate (e.g., +7 days)
    const date = new Date();
    const endDate = new Date();
    endDate.setDate(date.getDate() + 7);

  

    const newAnnouncement = new Announcement({
        id,
        date,
        endDate,
        title,
        content,
        category,
       
    });

    await newAnnouncement.save();
    res.status(201).json({ message: "Announcement added successfully", announcement: newAnnouncement });
} catch (error) {
    console.error("Error adding announcement:", error);
    res.status(500).json({ message: "Error in adding announcement" });
}
};