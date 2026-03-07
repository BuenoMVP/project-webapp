import styles from './style.module.css'

type CardProps = {
    img: string
}

function Card(props: CardProps) {
    return (
        <button className={styles.main}>
            <img src={props.img} alt="Card image" className={styles.image} />
        </button>
    )
}

export default Card;