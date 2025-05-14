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
      </Section>
      <Section type="sectionBox__gallery">
        <Gallery />
      </Section>
      <Section type="sectionBox__white" modifier="sectionBox__white--mt0">
        <p>
          In this day and age everyone has access to the same information &
          listings. Distribution is no longer a major value component that a
          real estate professional brings to the table. Without a doubt the most
          valuable thing in today’s real estate environment is proper counsel
          and representation. We are painstaking in our attention to detail when
          it comes to valuation, negotiation, and the marketing process.
        </p>
        <p>
          It is very easy to overpay or overlook details that seem insignificant
          but actually can dramatically affect the value of your property in the
          long run. It’s also easy to miss opportunities to maximize the value
          of your home on a sale without the right marketing and pricing
          strategy. If you are a buyer we are going to help you understand the
          fair value of the home and will never be afraid to tell you to walk
          away if we can’t get the price right. If you are a seller we are going
          to assist in being as analytical as possible to justify the highest
          value for your home. We have a proprietary marketing process with
          proven results to position your property ahead of the competitors in
          the marketplace. Our philosophy is simple: we believe our primary
          responsibility is educating our clients by providing the advice and
          representation we’d provide our own family. We’ve sold over $100M in
          real estate and have helped hundreds of people buy and sell property
          in the Chicagoland area.
        </p>
      </Section>
      <Section type="sectionBox__banner">
        <Banner text="Each project is a step toward a smarter future in horticulture." />
      </Section>
    </>
  );
};

export default Projects;
