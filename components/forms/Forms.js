"use client";
import React, { useState } from "react";
import Select from "react-select";
import { Form, Button, Modal } from "react-bootstrap";
import BottomGlitter from "../StyledText/BottomGlitter";
import axios from "axios";
import QRCode from "qrcode";

const selectableList = [
  { text: 'Code N Tackle', value: 1 },
  { text: 'Tech Fusion', value: 2 },
  { text: 'Riddle ARcade', value: 3 },
  { text: 'Film Fiesta', value: 4 },
];

// const selectableList = ['Code N ==Tackle', 'Tech Fusion', 'Riddle ARcade', 'Film Fiesta']


const customStyles = {
  option: (provided) => ({
    ...provided,
    color: 'hsl(5, 100%, 60%)',
    background: 'black', 
  }),
};
export default function ContactForm() {
  const [formData, setFormData] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [qrCodeData, setQRCodeData] = useState(null); // Declare qrCodeData state variable

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultipleChange = (selectedOptions) => {
    if (selectedOptions.length <= 3) {
      setSelectedOptions(selectedOptions);
    } else {
      setShowWarning(true); // Show the warning popup
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Rest of your form submission logic...

    // Generate QR code from the form data
    const qrCodeDataURL = await QRCode.toDataURL(JSON.stringify(formData));

    // Update the state with the QR code data
    setQRCodeData(qrCodeDataURL);

    // Send the form data to your server
    axios
      .post("https://your-server-endpoint.com/submit", formData)
      .then((response) => {
        // Handle the response from the server, e.g., show a success message
        console.log("Server Response:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  };
// export default function ContactForm() {


//   const [formData,setFormData] = useState({})
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [showWarning, setShowWarning] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
  
//   const handleMultipleChange = (selectedOptions) => {
//     if (selectedOptions.length <= 3) {

//       setSelectedOptions(selectedOptions);
//     } else {
//       setShowWarning(true); // Show the warning popup
//     }
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const selectedOptionTexts = selectedOptions.map((option) =>
//       selectableList.find((item) => item.value === option.value)?.text
//     );
//     setFormData({
//       ...formData,
//       "eventInterest": selectedOptionTexts,
//     });

//     const qrCodeDataURL = await QRCode.toDataURL(JSON.stringify(data));

//     // Update the state with the QR code data
//     setQRCodeData(qrCodeDataURL);

//     // axios
//     //   .post("https://altruix-xadp.onrender.com/add", formData) // Replace with your server endpoint URL
//     //   .then((response) => {
//     //     // Handle the response from the server, e.g., show a success message
//     //     console.log("Server Response:", response.data);
//     //   })
//     //   .catch((error) => {
//     //     // Handle any errors that occur during the request
//     //     console.error("Error:", error);
//     //   });
//     // // Add your form submission logic here.
//   };
	return (
    <>
    <div className="flex flex-col items-center">
      <div className="sm:mt-12 mt-32">
        <BottomGlitter text="Register" />
      </div>
      <div className="w-3/5 sm:w-5/6 lg:w-4/5 lg:p-8 xl:w-4/5 sm:p-4 p-16 sm:mt-12 mt-24 bg-aneesh rounded-lg" >
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl sm:text-xl text-gray-800" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            minLength={3}
            maxLength={150}
            required
            name="name"
            onChange={handleInputChange}
            className="p-4 sm:p-2 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            placeholder="Enter Your Name"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl sm:text-xl text-gray-800" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            minLength={5}
            maxLength={150}
            required
            onChange={handleInputChange}
            className="p-4 sm:p-2 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            placeholder="Enter Your Email"
            autoComplete="off"
            id="email"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl sm:text-xl text-gray-800" htmlFor="phonenumber">
            Phone Number
          </label>
          <input
            required
            onChange={handleInputChange}
            minLength={10}
            maxLength={150}
            name="phoneNo"
            placeholder="Phone number"
            className="p-4 sm:p-2 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            id="phonenumber"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl sm:text-xl text-gray-800" htmlFor="collegename">
            College Name
          </label>
          <input
            required
            onChange={handleInputChange}
            minLength={3}
            maxLength={200}
            name="collegeName"
            placeholder="College Name"
            className="p-4 sm:p-2 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"

          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl sm:text-xl text-gray-800" htmlFor="collegeRegisterNumber">
          College Register Number
          </label>
          <input
            required
            onChange={handleInputChange}
            minLength={3}
            maxLength={200}
            name="collegeRegistrationNumber"
            placeholder="College Register Number"
            className="p-4 sm:p-2 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            id="collegeRegisterNumber"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl sm:text-xl text-gray-800" htmlFor="collegeRegisterNumber">
            Select Event
          </label>
          <Select
              placeholder = "Select maximum 3 event"
              value={selectedOptions}
              onChange={handleMultipleChange}
              options={selectableList.map((item) => ({
                value: item.value,
                label: item.text
              }))}
              isMulti
              maxMenuHeight={150} 
              styles ={customStyles}
              className="p-4 sm:p-2 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            />
        </div>

        <button
          type="submit"
          // disabled={loading}
          className="text-center px-4 py-2 w-40 bg-primary text-2xl text-aneesh font-medium mt-4 rounded-bl-lg rounded-tr-lg">
          Register
        </button>
      </form>
      </div>
      {qrCodeData && (
        <div className="text-center my-4">
          <img src={qrCodeData} alt="QR Code" />
        </div>
      )}
    </div>
    </>
	);
}

