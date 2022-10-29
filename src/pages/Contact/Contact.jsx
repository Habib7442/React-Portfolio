import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Contact.scss";
import { Button } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from "react-router-dom";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.value;
    value = event.target.value;

    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://portfolio-1706d-default-rtdb.firebaseio.com/contactData.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored Successfully");
      } else {
        alert("Please fill all details");
      }
    } else {
      alert("Please fill all details");
    }
  };
  return (
    <>
      <div className="container-fluid contact">
      <Link className="anchor" to="/">
        <ArrowCircleLeftIcon /> Home Page
      </Link>
        <h1 className="title">Contact Me!</h1>
        <div className="right container">
          <form method="POST" className="right">
            <TextField
              className="text"
              id="standard-basic"
              label="First Name"
              variant="standard"
              name="firstName"
              value={userData.firstName}
              onChange={postUserData}
              color="secondary"
              InputLabelProps={{ className: "textfield-label" }}
              required
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              name="lastName"
              value={userData.lastName}
              onChange={postUserData}
              color="secondary"
              InputLabelProps={{ className: "textfield-label" }}
              style={{color:"white"}}
              required
            />
            <TextField
              id="standard-basic"
              label="Phone"
              variant="standard"
              name="phone"
              value={userData.phone}
              onChange={postUserData}
              type="number"
              color="secondary"
              InputLabelProps={{ className: "textfield-label" }}
              required
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              value={userData.email}
              onChange={postUserData}
              type="email"
              color="secondary"
              InputLabelProps={{ className: "textfield-label" }}
              required
            />
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              name="address"
              value={userData.address}
              onChange={postUserData}
              color="secondary"
              InputLabelProps={{ className: "textfield-label" }}
              required
            />
            <TextField
              id="standard-basic"
              label="Message"
              variant="standard"
              name="message"
              value={userData.message}
              onChange={postUserData}
              color="secondary"
              InputLabelProps={{ className: "textfield-label" }}
              required
            />
            <Button type="submit" href="#text-buttons" onClick={submitData}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
