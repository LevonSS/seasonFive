import { ReactNode } from "react";
import Section from "../components/section/Section";

interface Props {
  children: ReactNode;
  headline?: string;
  type: string;
}

const Packages = ({ children, headline, type }: Props) => {
  return (
    <>
      <Section type={type}>
        <h1>{headline}</h1>
      </Section>
      {children}
    </>
  );
};

export default Packages;
