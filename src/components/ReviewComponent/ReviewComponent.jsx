import { Card } from "react-bootstrap";
import "./ReviewComponent.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useRef, useState } from "react";
import Stars from "../Stars/Stars";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebase";

const imageListRef = ref(storage, "images/");

const ReviewComponent = (props) => {
  const [show, setShow] = useState(false);
  const [dot, setDot] = useState("...");

  const [imageList, setImageList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    for (let index = 0; index < props.review.length; index++) {
      if (props.review.length > 30) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };

  const modalHandler = () => {
    ref.current.click();
  };

  const ref = useRef(null);

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <>
      <Button
        className="d-none"
        ref={ref}
        variant="primary"
        onClick={handleShow}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ textAlign: "center" }}>
          {props.review}
          <br></br>
          {props.name}
        </Modal.Body>
      </Modal>
      <div className="reviewComponent">
        <a id="card" onClick={modalHandler}>
          <Card className="cardBack">
            <Card.Body className="cardBody">
              {props.review.length > 30 && (
                <Card.Text style={{ textAlign: "center",cursor: "pointer" }}>
                  {props.review.slice(0, 18)}
                  {dot}
                </Card.Text>
              )}
              {props.review.length < 30 && (
                <Card.Text style={{ textAlign: "center",cursor: "pointer" }}>
                  {props.review.slice(0, 28)}
                </Card.Text>
              )}
              <Card.Text style={{ textAlign: "center" }}>
                <Stars stars={props.stars} />
              </Card.Text>
              <Card.Text style={{ textAlign: "center" }}>
                <Card.Img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "100%",
                    objectFit: "cover",
                    border: "2px solid lightblue",
                  }}
                  variant="top"
                  src={props.imgurl}
                />
              </Card.Text>
              <Card.Text style={{ textAlign: "center" }}>
                {props.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>
    </>
  );
};

export default ReviewComponent;
