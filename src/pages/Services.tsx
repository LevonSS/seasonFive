import Banner from "../components/banner/Banner";
import Capsule from "../components/capsule/Capsule";
import Section from "../components/section/Section";
import ServiceTypes from "../components/services/ServiceTypes";
import { serviceTypes } from "../data/data";

const Services = () => {
  return (
    <>
      <Section color="sectionBox__terakot">
        <h1>
          <span>Our Services</span>
        </h1>
        <p>
          We provide full-stack engineering solutions to modernize and optimize
          greenhouse environments. Every system is designed from the ground up
          to match the real needs of your crop and infrastructure.
        </p>
      </Section>
      <Section color="sectionBox__white" modifier="sectionBox__white--about">
        <Capsule image="boilerroom.jpg" />
      </Section>
      <Section color="sectionBox__white" modifier="sectionBox__white--mp0">
        {serviceTypes.map((type) => (
          <ServiceTypes key={type.type} {...type} />
        ))}
      </Section>
      <Section color="sectionBox__banner">
        <Banner text="Get in touch to discuss the best climate solutions for your greenhouse!" />
      </Section>
    </>
  );
};

export default Services;
