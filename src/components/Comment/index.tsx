import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { CommentProps } from "../../interfaces/ICommentProps";
import { Avatar } from "../Avatar";
import styles from "./index.module.css";

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [applaudCount, setApplaudCount] = useState(0);

  function handleDeleteComment() {
    if (onDeleteComment) {
      onDeleteComment(content);
    }
  }

  function handleApplaudComment() {
    setApplaudCount((currentApplaudCount) => currentApplaudCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/rodrigordgfs.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Shinoda</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:23:14">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleApplaudComment}>
            <ThumbsUp />
            Aplaudir <span>{applaudCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
