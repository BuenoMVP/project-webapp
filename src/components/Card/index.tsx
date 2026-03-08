import { Link } from "react-router-dom";
import styles from "./style.module.css";

import type { CardProps } from "../../utils/props";

function Card(props: CardProps) {
  return (
    <Link className={styles.main} to={`/${props.url}`}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img
            src={props.img_front}
            alt="Card image front"
            className={styles.image}
          />
          <h2>{props.title}</h2>
        </div>
        <div className={styles.flipCardBack}>
          <img
            src={props.img_back}
            alt="Card image back"
            className={styles.image}
          />
          <h2>{props.name}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
