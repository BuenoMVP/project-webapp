import styles from "./style.module.css";

type CardProps = {
  img_front: string;
  img_back: string;
  name: string;
  title: string;
};

function Card(props: CardProps) {
  return (
    <button className={styles.main}>
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
    </button>
  );
}

export default Card;
