import styles from "./index.module.css";

export function Avatar({ image, hasBorder }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={image}
    />
  );
}
