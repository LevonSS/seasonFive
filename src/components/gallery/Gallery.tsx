import styles from "./Gallery.module.scss";

import { createPortal } from "react-dom";
import { FadeInSection } from "../../animation/animation";
import { projectsImage } from "../../data/data";
import { _GALLERYPATH } from "../../helper/constants";
import Modal from "../modal/Modal";
import { useState } from "react";

interface Info {
  text: string;
  image: string;
}

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projectinfo, setProjectInfo] = useState<Info>({ text: "", image: "" });

  const handleClick = (info: Info) => {
    setOpenModal(true);
    setProjectInfo(info);
  };

  return (
    <FadeInSection delay={0.3}>
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
                  src={`${_GALLERYPATH + item.image}`}
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
                setOpenModal={setOpenModal}
                text="Text Text"
                image={`${_GALLERYPATH + projectinfo.image}`}
              />,
              document.body
            )}
        </div>
      </div>
    </FadeInSection>
  );
};

export default Gallery;
