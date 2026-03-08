import styles from './style.module.css';
import '../../App.css'

import type { InfoProps } from '../../utils/props';

function Info(props: InfoProps) {
  return (
    <div className='main'>
      <section className="content">
        <div className={styles.container}>
          <div className={styles.photoBox}>
            <img src={props.perfilImg} alt={props.name} />
          </div>
          <div className={styles.stats}>
            <p>Age: {props.age}</p>
            <p>Birthday: {props.birthday}</p>
          </div>
          <div className={styles.description}>
            <h2>Resumo</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;