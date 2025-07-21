interface Props {
  action: (val: boolean) => void;
}

export const handleScrollToTop = ({ action }: Props) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  action(true);
};
