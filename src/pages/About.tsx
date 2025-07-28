import Banner from "../components/banner/Banner";
import Capsule from "../components/capsule/Capsule";
import Section from "../components/section/Section";
import abourImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <Section type="sectionBox__blue">
        <h1>
          <span>
            At Season5, we don’t just install equipment — we build climate
            strategies.
          </span>
        </h1>
      </Section>
      <Section type="sectionBox__white" modifier="sectionBox__white--about">
        <Capsule image={abourImg} />
      </Section>
      <Section
        type="sectionBox__white"
        modifier="sectionBox__white--mt0"
        yOffset={200}
      >
        <p>
          Our approach is based on the Plant Empowerment (GPE) philosophy:
          balancing energy, water, and CO₂ for stronger, healthier crops. By
          combining this with Digital Growing technologies and reliable
          engineering, we help growers get the most out of their greenhouses —
          efficiently, sustainably, and smartly.
        </p>
        <h4>Why Choose Season5?</h4>
        <ul>
          <li>
            Specialized in Greenhouse Engineering – 15+ years of experience in
            climate control
          </li>
          <li>
            Heating System Expertise – Over 12 projects across 14+ hectares
          </li>
          <li>
            Smart, Tailored Automation – Climate computers built for plant
            physiology
          </li>
          <li>
            Data-Driven Growing – Sensor-based optimization for yield and
            savings
          </li>
          <li>
            Focused on Your Needs – From basic retrofits to advanced AI
            monitoring
          </li>
        </ul>
        <p>
          At Season5, we don’t just build systems. We build environments where
          plants thrive, growers succeed, and data drives every decision.
        </p>
      </Section>
      <Section type="sectionBox__banner">
        <Banner text="Let’s design the future of your greenhouse together" />
      </Section>
    </>
  );
};

export default About;
