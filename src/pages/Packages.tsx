import { ReactNode } from "react";
import Section from "../components/section/Section";

interface Props {
  children: ReactNode;
  headline?: string;
  description?: string;
  type: string;
}

const Packages = ({ children, headline, description, type }: Props) => {
  return (
    <>
      <Section type={type}>
        {headline && <h1>{headline}</h1>}
        {description && <p>{description}</p>}
      </Section>
      {children}
    </>
  );
};

export default Packages;
