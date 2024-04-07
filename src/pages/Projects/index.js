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
import Monsters from "../../assets/ArcadeMania.png";
import ScriblleSphere from "../../assets/ArcadeMania.png";
import Meme from "../../assets/Meme.png";
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
                projectImage={Monsters}
                ButtonText="Visit code"
                description={[
                  "Developed a full-stack notes app using React, Reactstrap Bootstrap, Firebase Authentication, and Firestore database.",
                  "Implemented CRUD functionality for creating, reading, updating, and deleting notes, enhancing user productivity.",
                  "Utilized Reactstrap Bootstrap for responsive UI design, ensuring seamless user experience across devices.",
                  "Integrated Firebase Authentication for secure user authentication, safeguarding user data.",
                  "Utilized Firestore database for efficient data storage and retrieval, ensuring scalability and performance.",
                  "Implemented dark mode toggling feature using React Helmet for enhanced user customization.",
                  "Incorporated TinyMCE code editor for rich text editing capabilities, offering a user-friendly note-taking experience.",
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
                  "Developed a collection of Hangman, Tenzies, and Meme Generator games using React Router DOM.",
                  "Ensured full responsiveness across various devices and screen sizes, enhancing accessibility.",
                  "Integrated React Router DOM for seamless navigation between different game modules, providing a smooth user experience.",
                ]}
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
                  "Engaged with React.js community for insights.",
                ]}
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
                  "Demonstrated state management proficiency.",
                  "Implemented meme customization and download functionality.",
                ]}
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
                  "Created a Hangman game project using React.js and Reactstrap.",
                  "Utilized a word API to dynamically fetch words for gameplay, enhancing user experience.",
                  "Demonstrated proficiency in integrating external APIs and managing API data within the application.",
                  "Implemented interactive features and user-friendly UI components with Reactstrap, enhancing accessibility and engagement.",
                  "Showcased problem-solving skills in developing game logic and user interactions.",
                  "Resulted in a fully functional Hangman game, combining technical skills with creative gameplay.",
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
                projectImage={Monsters}
                ButtonText="Visit code"
                description={[
                  "Developed Monsters Rolodex, my first React project.",
                  "Utilized API for fetching monster images, enhancing visual appeal and diversity.",
                  "Demonstrated foundational skills in React.js, including component creation and state management.",
                  "Implemented dynamic filtering and search functionality for efficient navigation through the monster collection.",
                  "Showcased growth and learning in web development through the completion of the project.",
                  "Resulted in a visually appealing and functional application for exploring a diverse range of monster images.",
                ]}
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
