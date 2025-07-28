import styles from "./Gallery.module.scss";

import { createPortal } from "react-dom";
import { FadeInSection } from "../../animation/animation";
import { projectsImage } from "../../data/data";
import Modal from "../modal/Modal";
import { useState } from "react";

interface Info {
  title: string;
  text: string;
  image: string;
}

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isActive, setisActive] = useState(false);
  const [projectinfo, setProjectInfo] = useState<Info>({
    title: "",
    text: "",
    image: "",
  });

  const handleClick = (info: Info) => {
    setOpenModal(true);
    setTimeout(() => setisActive(true), 0);
    setProjectInfo(info);
  };

  return (
    <FadeInSection delay={0.3} y={200}>
      <div className={styles.container}>
        <div className={styles.gallery}>
          {projectsImage.map((item, index) => {
            return (
              <figure
                onClick={() => handleClick(item)}
                className={`${styles.item} ${styles[`item--${index + 1}`]}`}
                key={item.image}
              >
                <img
                  src={item.image}
                  alt="Gallery image 1"
                  className={styles.img}
                  loading="lazy"
                />
              </figure>
            );
          })}
          {openModal &&
            createPortal(
              <Modal
                isActive={isActive}
                setisActive={setisActive}
                setOpenModal={setOpenModal}
                title={projectinfo.title}
                text={projectinfo.text}
                image={projectinfo.image}
              />,
              document.body
            )}
        </div>
      </div>
    </FadeInSection>
  );
};

export default Gallery;
