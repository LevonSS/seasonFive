import { FadeInSection } from "../animation/animation";
import Banner from "../components/banner/Banner";
import Capsule from "../components/capsule/Capsule";
import HomePageHeadline from "../components/homepageHeadline/HomePageHeadline";
import Salmon from "../components/salmon/Salmon";
import Section from "../components/section/Section";

const SectionContainer = () => {
  return (
    <>
      <Section color="sectionBox__yellow">
        <HomePageHeadline />
      </Section>
      <Section color="sectionBox__white">
        <FadeInSection>
          <Capsule
            modifier="home"
            image="photo2.jpg"
            text="Our Services"
            linkText="Learn More"
            link="/services"
          />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <Capsule
            modifier="home"
            image="ourprojects.jpg"
            text="Our Projects"
            linkText="Learn More"
            link="/projects"
          />
        </FadeInSection>
      </Section>

      <Section color="sectionBox__salmon">
        <Salmon />
      </Section>

      <Section color="sectionBox__banner">
        <Banner text="Contact us for a free consultation — and let’s map out your path to better growing conditions and lower energy costs." />
      </Section>
      
    </>
  );
};

export default SectionContainer;
