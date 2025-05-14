import { ReactNode } from "react";
import Section from "../components/section/Section";

interface Props {
  children: ReactNode;
  headline?: string;
}

const Packages = ({ children, headline }: Props) => {
  return (
    <>
      <Section type="aranet">
        <h1>{headline}</h1>
      </Section>
      {children}
    </>
  );
};

export default Packages;
