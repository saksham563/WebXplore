import { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import pop from "../../assets/popvd.mp4";
import "./PopUp.css";

const PopUp = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: ""
  });
  const [errors, setErrors] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow();

    const intervalId = setInterval(() => {
      handleShow();
    }, 12000);

    return () => clearInterval(intervalId);
  }, []);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (formData.name.trim() === "") {
      formErrors.name = "Name is required";
      valid = false;
    }

    if (formData.email.trim() === "") {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Email is not valid";
      valid = false;
    }

    if (formData.phone.trim() === "") {
      formErrors.phone = "Phone number is required";
      valid = false;
    } else if (!validatePhone(formData.phone)) {
      formErrors.phone = "Phone number is not valid";
      valid = false;
    }

    if (formData.requirements.trim().length < 20) {
      formErrors.requirements = "Requirements must be at least 20 characters long";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5001/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          handleClose();
          setFormData({ name: '', email: '', phone: '', requirements: '' }); // Clear form after submission
        } else {
          alert('Error submitting form. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form. Please check your server.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="mod"
      backdrop="static"
      keyboard={false}
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="p-4">
        <Row className="align-items-center">
          <Col md={5} className="p-0 videpop">
            <video src={pop} className="h-100 w-100" autoPlay muted loop></video>
          </Col>

          <Col md={7} className="p-4">
            <h4 className="mb-4">Let's Grow Together!</h4>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={validated && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={validated && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={validated && errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Explain your requirements</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Minimum 50 characters"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  isInvalid={validated && errors.requirements}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.requirements}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="me-2">
                  Submit Now
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;