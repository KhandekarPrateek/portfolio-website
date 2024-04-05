import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
const Projects = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="project-container p-5" id="Projects">
      <div className="w-100 headers-timeline">
        <div className="d-flex timeline-small-header">
          <div class="divider-1 me-3">
            {" "}
            <span></span>
          </div>
          <h3 class="heading-1">Portfolio</h3>
        </div>
        <div className="contact-me pb-5 timeline-period">Projects</div>
      </div>
      <div>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">TENZIES</AccordionHeader>
            <AccordionBody accordionId="1" className="tenzies-accordion  ">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">MEME GENERATOR</AccordionHeader>
            <AccordionBody accordionId="2" className="meme-accordion">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">HANGMAN</AccordionHeader>
            <AccordionBody accordionId="3" className="hangman-accordion">
              <strong>This is thedion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">ARCADE MANIA</AccordionHeader>
            <AccordionBody accordionId="4" className="arcade-mania-accordion">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">MONSTER'S ROLODEX</AccordionHeader>
            <AccordionBody accordionId="5" className="rolodex-accordion">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">SCRIBBLE SPHERE</AccordionHeader>
            <AccordionBody
              accordionId="6"
              className="scribble-sphere-accordion" //change bg image to notes app
            >
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Projects;
