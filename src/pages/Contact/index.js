import React, { useRef, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    subject: "",
  });
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form, "form");
    emailjs
      .sendForm(
        "service_2ehn7vz",
        "template_bqvm311",
        document.getElementById("contact-form"),
        {
          publicKey: "3g40K7vzsdNfwdFl8",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    // e.target.reset();
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <Row className="contact-container " id="Contact">
      <Col sm={6} className=" d-flex align-items-center ">
        <div className="w-100">
          <div className="contact-header">CONTACT</div>
          <div className="contact-me pb-5">Get in Touch</div>
          <Form onSubmit={handleSubmit} ref={form} id="contact-form">
            <FormGroup>
              <Label for="from_name" hidden>
                Password
              </Label>
              <Input
                id="from_name"
                name="from_name"
                placeholder="Name"
                type="text"
                onChange={handleChange}
                value={formData.from_name}

                // required
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="reply_to" hidden>
                Email
              </Label>
              <Input
                id="reply_to"
                name="reply_to"
                placeholder="Email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="subject" hidden>
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="subject"
                onChange={handleChange}
                type="text"
                value={formData.subject}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="message" hidden>
                Message
              </Label>
              <Input
                id="message"
                name="message"
                placeholder="Message"
                type="textarea"
                onChange={handleChange}
                value={formData.message}
              />
            </FormGroup>{" "}
            <Button>Submit</Button>
          </Form>
        </div>
      </Col>
      <Col sm={6}>map</Col>
    </Row>
  );
};

export default Contact;
