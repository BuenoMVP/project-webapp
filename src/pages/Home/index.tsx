// import Button from './components/Button'
import Card from '../../components/Card/index';
import styles from './style.module.css';
import { cardInfo } from '../../utils/cardInfo';

function Home() {
  return (
    <div className="main">
      <section className="content">
        <div className={styles.intro}>
          <h1>CENTRAL DOS CRIAS</h1>
        </div>
        {/* <p className={styles.motivationBox}>
          Se você chegou até aqui, existem apenas duas possibilidades:
          <ol>
            <li>Você não tem nada melhor para fazer.</li>
            <li>Você até tem coisa melhor para fazer, mas quer procrastinar.</li>
          </ol>
          <br />
          De qualquer forma… seja bem-vindo.
        </p> */}
        {/* <div className="description">
          <h2>Objetivo</h2>
          <p>
            Informações sobre
            nossos membros e atividades.
          </p> 
        </div>*/}
        <div className={styles.members}>
          <h2>Descrição dos membros</h2>
          <ul>
            <li>
              O Fantasma - aparece uma vez por mês e some, sua maior
              participação é em eventos especiais, isso quando não está ocupado
              limpando o banheiro ou na igreja.
            </li>
            <li>
              O Virgem - preso em uma luta eterna pela perda do cabaço,
              seu maior objetivo é afogar o ganso ainda que mesmo um pato seja
              mais experiente que ele.
            </li>
            <li>
              O Velho - sua existência vem de tempos imemoriais, boatos
              dizem que ele é o responsável por escrever o rascunho da biblia.
            </li>
            <li>
              O Guerreiro - de um garoto que vivia com a mão desmunhecada até um dos mais brabos 
              militares, embora tenha trocado recentemente o fuzil por uma mamadeira e fraldas.
            </li>
            <li>
              O Comerciante - envolvido com atividades no mercado negro há tempos,
              seu maior talento é transformar qualquer oportunidade de negócio em uma dívida.
            </li>
            <li>
              O BRABO - sem dúvidas o mais brabo do grupo. Isso por si
              só já é autoexplicativo.
            </li>
          </ul>
        </div>
        <div className={styles.cardContainer}>
          {cardInfo.map((card) => (
            <Card
              key={card.name}
              img_front={card.img_front}
              img_back={card.img_back}
              name={card.name}
              title={card.title}
              url={card.url}
            />
          ))}
        </div>
        <div className="stats">
          <h2>ESTATÍSTICAS</h2>
          <p>Em breve...</p>
        </div>
      </section>
      {/* <Button text="qql coisa" action={() => console.log('Button clicked!')} /> */}
    </div>
  );
}

export default Home;
