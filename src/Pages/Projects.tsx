import { FaFigma } from "react-icons/all";
import { BiLinkAlt, RxGlobe } from "react-icons/all";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import ProjectsComponent from "../Page Component/Projects/ProjectsComponent";
import { motion } from "framer-motion";
import projectCardImage from "/src/assets/figma1.jpg";
import travelImage from "/src/assets/Travel_Landing page.jpg";
import restaurant from "/src/assets/figma6.jpg";
import amazon from "/src/assets/figma3.jpg";
import twitter from "/src/assets/figma4.jpg";
import futsal from "/src/assets/figma5.png";
import blood from "/src/assets/figma2.jpg";
import bankImage from "/src/assets/bank.png";
const Projects = () => {
  return (
    <ProjectsComponent
      projectContent={
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: "easeOut",
            }}
            variants={{
              hidden: {
                opacity: 0,
                y: -180,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 30, // Adjust the damping value as needed
                  stiffness: 200, // Adjust the stiffness value as needed
                },
              },
            }}>
            <Card
              cardTitle={"Online Apparel Store"}
              cardDescription={
                <p>
                  Landing page for a online apparel store , where you can look
                  for a wide range of fashionable clothing and accessories for
                  men, women, and children, all just a click away.
                </p>
              }
              cardImage={restaurant}
              cardLinks={
                <>
                  <Link to="https://www.figma.com/" target="_blank">
                    <FaFigma size={25} />
                  </Link>
                  <Link to="https://www.figma.com" target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1, duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -160,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                },
              },
            }}>
            <Card
              cardTitle="Le café"
              cardDescription={
                <p>
                  Le Café is a new coffee shop in Nepal's Lalitpur.I was
                  recently assigned to work on a Figma project for this coffee
                  shop. The design is modern and user-friendly, and it reflects
                  the brand identity of the coffee shop. As a UI/UX designer, I
                  was responsible for creating wireframes, designing the
                  interface, and ensuring a smooth user experience.
                </p>
              }
              cardImage={twitter}
              cardLinks={
                <>
                  <Link
                    to="https://www.figma.com/file/5jYK7Xp78mhgASdJdV7lLb/coffeeholic?type=design&node-id=0-1&t=qirIypfXnK0JROh1-0"
                    target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link
                    to="https://www.figma.com/file/5jYK7Xp78mhgASdJdV7lLb/coffeeholic?type=design&node-id=0-1&t=qirIypfXnK0JROh1-0"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>{" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -140,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 100,
                },
              },
            }}>
            <Card
              cardTitle="Grocery App"
              cardDescription={
                <p>
                  Grocery shopping e-commerce website. This is a mobile app for
                  purchasing fresh organic fruits and vegetables.
                </p>
              }
              cardImage={amazon}
              cardLinks={
                <>
                  <Link
                    to="https://www.figma.com/file/XINgPSLvKdPfdJDwAs7qaw/ecom?type=design&node-id=0-1&t=amknzs78WEdGlRYc-0"
                    target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link
                    to="https://www.figma.com/file/XINgPSLvKdPfdJDwAs7qaw/ecom?type=design&node-id=0-1&t=amknzs78WEdGlRYc-0"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>{" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -120,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                },
              },
            }}>
            <Card
              cardTitle="Business Card"
              cardDescription={
                <p>
                  Professionals need business cards to establish their identity
                  and promote their brand. This is the business card I designed
                  specifically for myself.
                </p>
              }
              cardImage={futsal}
              cardLinks={
                <>
                  <Link
                    to="https://www.figma.com/file/m31guwMxeV17AgLlUueIe1/business-card?type=design&node-id=0-1&t=T4awDgWMO2DYqnsA-0"
                    target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link
                    to="https://www.figma.com/file/m31guwMxeV17AgLlUueIe1/business-card?type=design&node-id=0-1&t=T4awDgWMO2DYqnsA-0"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />{" "}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -100,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                },
              },
            }}>
            <Card
              cardTitle="Product Slider"
              cardDescription={
                <p>
                  The product slider is modeled after the modern product
                  slider. 
                </p>
              }
              cardImage={blood}
              cardLinks={
                <>
                  <Link
                    to="https://www.figma.com/file/c43RfEkK7Uqah80MVNW9jJ/Intro-Slider-Tutorial?type=design&node-id=1-123&t=mgMM8p3CwV96vSDY-0"
                    target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link
                    to="https://www.figma.com/file/c43RfEkK7Uqah80MVNW9jJ/Intro-Slider-Tutorial?type=design&node-id=1-123&t=mgMM8p3CwV96vSDY-0"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -80,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                },
              },
            }}>
            <Card
              cardTitle="Landing Page for a Product"
              cardDescription={
                <p>
                  This is the homepage of an e-commerce website. It displays the
                  products in a modern manner by spinning them on a scroll.
                </p>
              }
              cardImage={projectCardImage}
              cardLinks={
                <>
                  <Link
                    to="https://www.figma.com/file/I9OXW9v3Kfob6lApb9Ruio/ecom?type=design&node-id=0-1&t=w8AieTDYobMHE3mq-0"
                    target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link
                    to="https://www.figma.com/file/I9OXW9v3Kfob6lApb9Ruio/ecom?type=design&node-id=0-1&t=w8AieTDYobMHE3mq-0 "
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -50,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                },
              },
            }}>
            <Card
              cardTitle="Travelog"
              cardDescription={
                <p>
                  Travelog is a travel agency's website. It enables users to
                  browse, select, and book their travel destination.
                </p>
              }
              cardImage={travelImage}
              cardLinks={
                <>
                  <Link to="https://www.figma.com/" target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link to="https://www.figma.com/ " target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -50,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                },
              },
            }}>
            <Card
              cardTitle="Mobile Banking App"
              cardDescription={<p>Login screen for a mobile banking app.</p>}
              cardImage={bankImage}
              cardLinks={
                <>
                  <Link to="https://www.figma.com/" target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link to="https://www.figma.com/ " target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>
        </>
      }
    />
  );
};

export default Projects;
