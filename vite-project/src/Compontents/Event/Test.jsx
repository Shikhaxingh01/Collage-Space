
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import axios from 'axios';

function EventForm() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    location: '',

    categoryColor: '',
    price: '',
    about: '',
    catchyLine: '',
    presentedBy: '',
    organizedBy: '',

    isAwarded: false,
    awards: [],
    activities: [],
    eventHighlights: [],

    celebrityAppearances: [],

    contactInfo: { phone: '', email: '' },

    eventGuide: { language: [], duration: [], eligibleYears: [] },

    detailedVenue: '',

    termsAndConditions: [],
  });

  async function uploadImage() {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bbdEvent");
    data.append("cloud_name", "dpslk1rvv");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dpslk1rvv/image/upload",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setUrl(res.data.url);
      console.log(res.data.url)
      alert("Image uploaded successfully.");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleNestedChange(e, field) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [name]: value },
    }));
  }

  function handleArrayChange(e, field) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        [field]: [...prev[field], e.target.value],
      }));
      e.target.value = "";
    }
  }

  function handleAddInput(field) {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  }

  function handleInputChange(e, index, field) {
    const updatedArray = [...formData[field]];
    updatedArray[index] = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: updatedArray }));
  }

  function handleRemoveInput(index, field) {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, [field]: updatedArray }));
  }

  async function finalSubmit() {
    if (!url) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      let image_url = url;
      const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/event/addevent`,
        { ...formData, image_url },
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Event submitted successfully.");
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("Event submission failed.");
    }
  }

  return (
    <div className="h-full bg-slate-50 text-black p-10">
      <h3 className="text-5xl text-center p-5">Event Form</h3>

      <div className="max-w-4xl border rounded-md p-5 mx-auto space-y-4">
        {/* Image Upload */}
        <div>
          <label>Event Image (Required): *</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={uploadImage} className="border rounded-md bg-blue-500 text-white px-2 ml-2">
            Upload
          </button>
          {url && <p className="text-green-600">Image uploaded successfully.</p>}
        </div>

        {/* Basic Details */}
        <div>
          <label>Title (Required): *</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div>
          <label>Category (Required): *</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </div>

        <div>
          <label>Category Colour (Required): *</label>
          <input type="color" name="categoryColor" value={formData.categoryColor} onChange={handleChange} />
        </div>

        <div>
          <label>Date (Required): *</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div>
          <label>Location (Required): *</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>



       {/* Price */}
<div>
  <h4>Price: *</h4>
  <input 
    type="text" 
    name="price" 
    value={formData.price} 
    onChange={handleChange} 
  />
</div>

{/* About */}
<div>
  <h4>About: *</h4>
  <textarea 
    name="about" 
    value={formData.about} 
    onChange={handleChange} 
  />
</div>
{/**/}
<div>
  <h4>Catchy Line: *</h4>
  <textarea 
    name="catchyLine"
    value={formData.catchyLine} 
    onChange={handleChange} 
  />
</div>

{/* Presented By */}
<div>
  <h4>Presented By: *</h4>
  <input 
    type="text" 
    name="presentedBy" 
    value={formData.presentedBy} 
    onChange={handleChange} 
  />
</div>

{/* Organized By */}
<div>
  <h4>Organized By: *</h4>
  <input 
    type="text" 
    name="organizedBy" 
    value={formData.organizedBy} 
    onChange={handleChange} 
  />
</div>

{/* Detailed Venue */}
<div>
  <h4>Detailed Venue: *</h4>
  <textarea
   
    name="detailedVenue" 
    value={formData.detailedVenue} 
    onChange={handleChange} 
  />
</div>





        {/* Contact Info */}
        <div>
          <h4>Contact Information:</h4>
          <label>Phone (Required): *</label>
          <input type="text" name="phone" value={formData.contactInfo.phone} onChange={(e) => handleNestedChange(e, "contactInfo")} />
          
          <label>Email (Required): *</label>
          <input type="email" name="email" value={formData.contactInfo.email} onChange={(e) => handleNestedChange(e, "contactInfo")} />
        </div>

        {/* Event Highlights */}
        <div>
          <h4>Event Highlights (Required): *</h4>
          {formData.eventHighlights.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input type="text" value={item} onChange={(e) => handleInputChange(e, index, "eventHighlights")} />
              <button onClick={() => handleRemoveInput(index, "eventHighlights")} className="bg-red-500 text-white px-2 rounded-md">❌</button>
            </div>
          ))}
          <button onClick={() => handleAddInput("eventHighlights")} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
            ➕ Add More
          </button>
        </div>
   

{/* isAwarded */}
<div>
  <h4>Is Awarded? *</h4>
  <select
    name="isAwarded"
    value={formData.isAwarded ? 'true' : 'false'}
    onChange={(e) => setFormData({ ...formData, isAwarded: e.target.value === 'true' })}
  >
    <option value="false">No</option>
    <option value="true">Yes</option>
  </select>
</div>


         {/*Awards*/}
        { formData.isAwarded && <div>
  <h4>Awards (Required): *</h4>
  {formData.awards.map((item, index) => (
    <div key={index} className="flex items-center space-x-2">
      <input 
        type="text" 
        value={item} 
        onChange={(e) => handleInputChange(e, index, "awards")} 
      />
      <button 
        onClick={() => handleRemoveInput(index, "awards")} 
        className="bg-red-500 text-white px-2 rounded-md"
      >
        ❌
      </button>
    </div>
  ))}
  <button 
    onClick={() => handleAddInput("awards")} 
    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
  >
    ➕ Add More
  </button>
</div>}

       {/*Activities Section  */}

       <div>
  <h4>Activities (Required): *</h4>
  {formData.activities.map((item, index) => (
    <div key={index} className="flex items-center space-x-2">
      <input 
        type="text" 
        value={item} 
        onChange={(e) => handleInputChange(e, index, "activities")} 
      />
      <button 
        onClick={() => handleRemoveInput(index, "activities")} 
        className="bg-red-500 text-white px-2 rounded-md"
      >
        ❌
      </button>
    </div>
  ))}
  <button 
    onClick={() => handleAddInput("activities")} 
    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
  >
    ➕ Add More
  </button>
</div>


{/* Celebrity Appearances */}
<div>
  <h4>Celebrity Appearances: *</h4>
  {formData.celebrityAppearances.map((item, index) => (
    <div key={index} className="flex items-center space-x-2">
      <input 
        type="text" 
        value={item} 
        onChange={(e) => {
          const updatedArray = [...formData.celebrityAppearances];
          updatedArray[index] = e.target.value;
          setFormData((prev) => ({ ...prev, celebrityAppearances: updatedArray }));
        }} 
      />
      <button 
        onClick={() => handleRemoveInput(index, "celebrityAppearances")} 
        className="bg-red-500 text-white px-2 rounded-md"
      >
        ❌
      </button>
    </div>
  ))}
  <button 
    onClick={() => handleAddInput("celebrityAppearances")} 
    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
  >
    ➕ Add More
  </button>
</div>



        {/*Terms and Conditions */}
        <div>
         <h4>Terms and Conditions (Required): *</h4>
         {formData.termsAndConditions.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
          <input 
           type="text" 
           value={item} 
           onChange={(e) => handleInputChange(e, index, "termsAndConditions")} 
          />
           <button onClick={() => handleRemoveInput(index, "termsAndConditions")} className="bg-red-500 text-white px-2 rounded-md">❌</button>
           </div>
          ))}
          <button onClick={() => handleAddInput("termsAndConditions")} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"> ➕ Add More</button>
         </div>
   

        {/* Submit Button */}
        <button onClick={finalSubmit} className="bg-green-500 text-white px-4 py-2 rounded-md mt-5">
          Submit Event
        </button>
      </div>
    </div> 

  );
}

export default EventForm;
