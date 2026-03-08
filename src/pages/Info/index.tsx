import styles from "./style.module.css";
import "../../App.css";

import Header from "../../components/header";
import type { InfoProps } from "../../utils/props";

function Info(props: InfoProps) {
  return (
    <div className="main">
      <section className="content">
        <Header url={props.url} />
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
                <p>Bocas beijadas: {props.kisses}</p>
                <p>Cervejas consumidas: {props.beers}</p>
              </div>
              <div>
                <p>Aniversário: {props.birthday}</p>
                <p>Dias até o aniversário: {props.daysUntilBirthday}</p>
                <p>Foras recebidos: {props.rejections}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
