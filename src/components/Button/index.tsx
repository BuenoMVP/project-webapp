import styles from './style.module.css'

type ButtonProps = {
    text: string;
    action: () => void;
}

function Button(props: ButtonProps) {
    return (
        <div className={styles.main}>
            <button className={styles.button} onClick={() => props.action}>
                {props.text}
            </button>
        </div>
    )
}

export default Button;