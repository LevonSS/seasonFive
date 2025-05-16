import Banner from "../components/banner/Banner";
import Gallery from "../components/gallery/Gallery";
import Section from "../components/section/Section";

const Projects = () => {
  return (
    <>
      <Section type="sectionBox__blue">
        <h1>
          <span>Projects</span>
        </h1>
        <p>
          Over the years, Season5 has implemented a wide range of climate
          control solutions - from compact systems in small greenhouses to
          complex retrofits for large-scale operations. Each project is an
          opportunity to apply our technical expertise in heating, cooling,
          automation, and data-driven cultivation. Below are some of our recent
          highlights
        </p>
      </Section>
      <Section type="sectionBox__gallery">
        <Gallery />
      </Section>
      <Section type="sectionBox__white" modifier="sectionBox__white--mt0">
        <p>
          We help growers upgrade their greenhouses to the next level - smarter,
          more efficient, and fully tailored to their needs. We’re proud of
          every project we complete, helping growers create the ideal climate
          for their crops. Let’s discuss how we can support your greenhouse.
        </p>
      </Section>
      <Section type="sectionBox__banner">
        <Banner text="Each project is a step toward a smarter future in horticulture." />
      </Section>
    </>
  );
};

export default Projects;
