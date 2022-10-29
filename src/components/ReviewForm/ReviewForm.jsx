import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import "./ReviewForm.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const imageListRef = ref(storage, "images/");

const ReviewForm = (props) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [url, setUrl] = useState("");
  const [userReview, setUserReview] = useState({
    review: "",
    name: "",
    email: "",
    stars: "",
    imgurl: "",
  });

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        setUrl(url);
      });
    });
    alert("Image Uploaded Successfully");
  };

  const postUserReview = (event) => {
    userReview[event.target.name] = event.target.value;
    setUserReview({ ...userReview, userReview });
  };

  const submitReview = async (e) => {
    const { review, name, email, stars, imgurl } = userReview;
    if (review && name && email && stars && imgurl) {
      const res = await addDoc(collection(props.db, "reviews"), {
        review: userReview.review,
        name: userReview.name,
        email: userReview.email,
        stars: userReview.stars,
        imgurl: userReview.imgurl,
      }).catch(function (error) {
        alert("Something went wrong !");
      });

      if (res) {
        setUserReview({
          review: "",
          name: "",
          email: "",
          stars: "",
          imgurl: "",
        });
        alert("Review Submitted Successfully !");
      } else {
        alert("Please fill all details");
      }
    } else {
      alert("Please fill all details");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("Url Copied");
    setUrl("")
  };

  return (
    <div className="reviewForm container-fluid">
      <Link className="anchor" to="/">
        <ArrowCircleLeftIcon /> Home Page
      </Link>
      <h1 className="reviewTitle">Give Your Valuable Review</h1>
      <div className="uploadImg">
        <span className="mx-3">Upload Your Image</span>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button className="btn btn-success" onClick={uploadImage}>
          Upload Image
        </button>
      </div>
      <div className="imgUrl container">
        <span>
          <b>Image Url</b> : <br />
          <br />
          <div className="url">
            <input type="text" className="w-100" value={url} onChange={(event) => {
              setUrl(event.target.value)
            }} />
          </div>
        </span>
        <button onClick={handleCopy} className="btn btn-warning my-2">
          Copy URL
        </button>
      </div>
      <form method="POST" className="right container">
        <TextField
          className="text"
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          value={userReview.name}
          onChange={postUserReview}
          color="secondary"
          InputLabelProps={{ className: "textfield-label" }}
          required
          style={{ color: "white", marginTop: "10px" }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          value={userReview.email}
          onChange={postUserReview}
          color="secondary"
          InputLabelProps={{ className: "textfield-label" }}
          style={{ marginTop: "10px" }}
          type="email"
          required
        />
        <TextField
          id="standard-basic"
          label="Review"
          variant="standard"
          name="review"
          value={userReview.review}
          onChange={postUserReview}
          color="secondary"
          InputLabelProps={{ className: "textfield-label" }}
          style={{ marginTop: "10px" }}
          required
        />
        <TextField
          id="standard-basic"
          label="Stars (Give ratings out of 5)"
          variant="standard"
          name="stars"
          type="number"
          value={userReview.stars}
          onChange={postUserReview}
          color="secondary"
          InputLabelProps={{ className: "textfield-label" }}
          inputProps={{ pattern: "[0-5]" }}
          style={{ marginTop: "10px" }}
          required
        />
        <TextField
          id="standard-basic"
          label="Image Url (Paste Image Url from above)"
          variant="standard"
          name="imgurl"
          type="text"
          value={userReview.imgurl}
          onChange={postUserReview}
          color="secondary"
          InputLabelProps={{ className: "textfield-label" }}
          style={{ marginTop: "10px" }}
          required
        />

        <Button
          type="submit"
          onClick={submitReview}
          href="#text-buttons"
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
