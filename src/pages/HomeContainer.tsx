import { FadeInSection } from "../animation/animation";
import Banner from "../components/banner/Banner";
import Capsule from "../components/capsule/Capsule";
import HomePageHeadline from "../components/homepageHeadline/HomePageHeadline";
import Salmon from "../components/salmon/Salmon";
import Section from "../components/section/Section";
import ourprojects from "../assets/images/ourprojects.jpg";
import ourservices from "../assets/images/ourservices.jpg";

const SectionContainer = () => {
  return (
    <>
      <Section type="sectionBox__yellow">
        <HomePageHeadline />
      </Section>
      <Section type="sectionBox__white">
        <FadeInSection>
          <Capsule
            modifier="home"
            image={ourservices}
            text="Our Services"
            linkText="Learn More"
            link="/services"
          />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <Capsule
            modifier="home"
            image={ourprojects}
            text="Our Projects"
            linkText="Learn More"
            link="/projects"
          />
        </FadeInSection>
      </Section>

      <Section type="sectionBox__salmon">
        <Salmon />
      </Section>

      <Section type="sectionBox__banner">
        <Banner text="Contact us for a free consultation — and let’s map out your path to better growing conditions and lower energy costs." />
      </Section>
    </>
  );
};

export default SectionContainer;
