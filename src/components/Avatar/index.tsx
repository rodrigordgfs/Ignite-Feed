import { AvatarProps } from "../../interfaces/IAvatarProps";
import styles from "./index.module.css";

export function Avatar({ hasBorder, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
