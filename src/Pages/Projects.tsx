import { FaFigma } from "react-icons/all";
import { BiLinkAlt, RxGlobe } from "react-icons/all";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import ProjectsComponent from "../Page Component/Projects/ProjectsComponent";
import { motion } from "framer-motion";
import projectCardImage from "/src/assets/figma1.jpg";
import restaurant from "/src/assets/figma6.jpg";
import amazon from "/src/assets/figma3.jpg";
import twitter from "/src/assets/figma4.jpg";
import futsal from "/src/assets/figma5.png";
import blood from "/src/assets/figma2.jpg";
const Projects = () => {
  return (
    <ProjectsComponent
      projectContent={
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Card
              cardTitle={"E-commerce mobile app"}
              cardDescription={
                <p>
                  The application allows users to browse products, add them to
                  the cart, and purchase them later.
                </p>
              }
              cardImage={restaurant}
              cardLinks={
                <>
                  <Link
                    to="https://www.figma.com/file/3zUEy0740DV8VVPWSygzru/E-commerce-mobile-app?type=design&node-id=0-1&t=PE3ejSBYJb4fhlFm-0"
                    target="_blank">
                    <FaFigma size={25} />
                  </Link>
                  <Link
                    to="https://www.figma.com/file/3zUEy0740DV8VVPWSygzru/E-commerce-mobile-app?type=design&node-id=0-1&t=PE3ejSBYJb4fhlFm-0"
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
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
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
                  <Link to="image.png" target="_blank">
                    <FaFigma className="transition duration-200 " size={25} />
                  </Link>
                  <Link to="image.png/" target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={25} />
                  </Link>
                </>
              }
            />
          </motion.div>{" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
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
        </>
      }
    />
  );
};

export default Projects;
