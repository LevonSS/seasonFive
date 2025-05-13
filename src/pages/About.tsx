import Banner from "../components/banner/Banner";
import Capsule from "../components/capsule/Capsule";
import Section from "../components/section/Section";

const About = () => {
  return (
    <>
      <Section color="sectionBox__blue">
        <h1>
          <span>
            At Season5, we don’t just install equipment — we build climate
            strategies.
          </span>
        </h1>
      </Section>
      <Section color="sectionBox__white" modifier="sectionBox__white--about">
        <Capsule image="bre-final-office.jpg" />
      </Section>
      <Section color="sectionBox__white" modifier="sectionBox__white--mp0">
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
      <Section color="sectionBox__banner">
        <Banner text="Let’s design the future of your greenhouse together" />
      </Section>
      {/* <div>
      <script>!function(a,m,o,c,r,m){a[o+c]=a[o+c]{setMeta:function(p){this.params=(this.params[]).concat([p])}},a[o+r]=a[o+r]function(f){a[o+r].f=(a[o+r].f[]).concat([f])},a[o+r]({id:"1503442",hash:"8bf67c583a4281883e3e8968af22607a",locale:"ru"}),a[o+m]=a[o+m]function(f,k){a[o+m].f=(a[o+m].f[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");</script><script id="amoforms_script_1503442" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1746892119"></script>
      </div> */}
    </>
  );
};

export default About;
