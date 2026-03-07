import styles from './style.module.css'

type CardProps = {
    img: string;
    name: string;
}

function Card(props: CardProps) {
    return (
        <button className={styles.main}>
            <img src={props.img} alt="Card image" className={styles.image} />
            <h2>{props.name}</h2>
        </button>
    )
}

export default Card;