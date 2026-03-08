import styles from "./style.module.css";
import "../../App.css";

import type { InfoProps } from "../../utils/props";

function Info(props: InfoProps) {
  return (
    <div className="main">
      <section className="content">
        <div className={styles.container}>
          <div className={styles.photoBox}>
            <img src={props.perfilImg} alt={props.name} />
          </div>
          <div className={styles.infos}>
            <div className={styles.infoTitleBox}>
              <p className={styles.infoTitleText}>{props.title.toUpperCase()}</p>
              <h1 className={styles.infoNameText}>{props.name}</h1>
              <span></span>
            </div>
            <div className={styles.infoDescriptionBox}>
              <p>{props.description}</p>
            </div>
            <div className={styles.infoStatusBox}>
              <div>
                <p>Idade: {props.age} anos</p>
                <p>Bocas beijadas: 123412</p>
                <p>Cervejas consumidas: 12341234</p>
              </div>
              <div>
                <p>Aniversário: {props.birthday}</p>
                <p>Dias até o aniversário: 1234</p>
                <p>Foras recebidos: 5678</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
