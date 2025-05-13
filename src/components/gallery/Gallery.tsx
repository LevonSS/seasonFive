import styles from "./Gallery.module.scss";

import { projectsImage } from "../../data/data";
import { _GALLERYPATH } from "../../helper/constants";
import { FadeInSection } from "../../animation/animation";

const Gallery = () => {
  return (
    <FadeInSection delay={0.3}>
      <div className={styles.container}>
        <div className={styles.gallery}>
          {projectsImage.map((item, index) => {
            return (
              <figure
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
        </div>
      </div>
    </FadeInSection>
  );
};

export default Gallery;
