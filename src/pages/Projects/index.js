import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import ProjectTile from "./ProjectTile";
import Tenzies from "../../assets/tenzies.png";
import HangMan from "../../assets/HangMan.png";
import ArcadeMania from "../../assets/ArcadeMania.png";
import NotesApp from "../../assets/NotesApp.png";
import Meme from "../../assets/Meme.png";
import MonstersRolodex from "../../assets/Rolodex.png";
const Projects = () => {
  const [open, setOpen] = useState("");
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
            <AccordionHeader targetId="6">
              <div className="accordion-title"> SCRIBBLE SPHERE</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="6"
              className="scribble-sphere-accordion my-accordion" //change bg image to notes app
            >
              <ProjectTile
                projectImage={NotesApp}
                ButtonText="Visit code"
                description={[
                  "Robust authentication and authorization protocols ensure user account security.",
                  "Efficiently store and manage notes within a secure environment.",
                  "Enhance user experience with two intuitively designed themes.",
                  "Seamlessly integrate the TinyMCE plugin for advanced text editing functionality.",
                ]}
                skills={[
                  "React",
                  "Firebase ",
                  "Reactstrap",
                  "Bootstrap",
                  "TinyMCE",
                  "Firestore",
                  "Github",
                ]}
                codeLink="https://github.com/KhandekarPrateek/Notes-App/tree/master"
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">
              <div className="accordion-title"> ARCADE MANIA</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="4"
              className="arcade-mania-accordion my-accordion"
            >
              <ProjectTile
                projectImage={ArcadeMania}
                ButtonText="Visit Website"
                description={[
                  "Ensured full responsiveness for accessibility on diverse devices.",
                  "Integrated React Router DOM for smooth navigation between game modules.",
                  "Developed games utilizing React Router DOM for seamless navigation.",
                ]}
                skills={["React", "Reactstrap", "Bootstrap", "Github"]}
                codeLink="https://prateeksarcademania.web.app/"
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="1">
              <div className="accordion-title">TENZIES</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="1"
              className="tenzies-accordion my-accordion "
            >
              <ProjectTile
                projectImage={Tenzies}
                ButtonText="Visit Code"
                description={[
                  "React.js-powered Tenzies game.",
                  "Dynamic data fetched via API integration.",
                  "Responsive design for seamless play on all devices.",
                  "Leveraged ES6+ features for efficient coding.",
                ]}
                skills={["React", "CSS", "Fetch API", "Github"]}
                codeLink="https://github.com/KhandekarPrateek/Tenzies-game"
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              <div className="accordion-title"> MEME GENERATOR</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="2"
              className="meme-accordion my-accordion"
            >
              <ProjectTile
                projectImage={Meme}
                ButtonText="Visit code"
                description={[
                  "React.js-based meme generator project.",
                  "Integrated meme API for dynamic content.",
                  "Implemented meme customization and download functionality.",
                  "Used HTML2Canvas library to get content offline",
                ]}
                skills={["React", "CSS", "Fetch API", "Github", "Reactstrap"]}
                codeLink="https://github.com/KhandekarPrateek/memeGenerator"
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              <div className="accordion-title"> HANGMAN</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="3"
              className="hangman-accordion my-accordion"
            >
              <ProjectTile
                projectImage={HangMan}
                ButtonText="Visit code"
                description={[
                  "Utilized API for dynamic word fetching, enhancing UX.",
                  "Proficient in API integration and data management.",
                  "Implemented interactive features with Reactstrap.",
                  "Showcased problem-solving skills in game development.",
                ]}
                skills={[
                  "React",
                  "Reactstrap",
                  "Bootstrap",
                  "Fetch API",
                  "Github",
                ]}
                codeLink="https://github.com/KhandekarPrateek/ArcadeMania"
              />
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="5">
              <div className="accordion-title">MONSTER'S ROLODEX</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="5"
              className="rolodex-accordion my-accordion"
            >
              <ProjectTile
                projectImage={MonstersRolodex}
                ButtonText="Visit code"
                description={[
                  "Utilized API for fetching monster images, enhancing visual appeal.",
                  "Demonstrated foundational skills in React.js, including state management.",
                  "Implemented dynamic filtering and search functionality.",
                  "Resulted in visually appealing and functional monster image exploration app.",
                ]}
                skills={["React", "Fetch API", "Github", "CSS"]}
                codeLink="https://github.com/KhandekarPrateek/monstersRolodex"
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Projects;
