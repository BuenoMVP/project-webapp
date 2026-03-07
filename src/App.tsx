// import Button from './components/Button'
import Card from './components/Card'
import './App.css'
import { cardInfo } from './utils/cardInfo'

function App() {

  return (
    <body className='main'>
      <section className='content'>
        <div className='intro'>
          <h1>Central dos crias</h1>
        </div>
        <p className='motivation-box'>
          Se você chegou até aqui, existem apenas três possibilidades:
          <ol>
            <li>Você é um dos membros do grupo.</li>
            <li>Você é um dos membros do grupo, mas não deveria estar aqui.</li>
            <li>Você é um dos membros do grupo, mas definitivamente deveria estar fazendo algo melhor da vida.</li>
          </ol>
          <br />
          De qualquer forma… seja bem-vindo.
        </p>
        <div className="members">
          <h2>Descrição dos membros</h2>
          <ul>
            <li>O Fantasma – aparece uma vez por mês e some, sua maior participação é em eventos especiais,
              isso quando não está ocupado limpando o banheiro ou na igreja.</li>
            <li>O Virgem – preso em uma luta eterna pela perda do cabaço, seu maior objetivo é afogar o ganso ainda que
               mesmo um pato seja mais experiente que ele.
            </li>
            <li>O Velho – sua existência vem de tempos imemoriais, boatos dizem que ele é o responsável por 
              escrever o rascunho da biblia.
            </li>
            <li>O BRABO – sem dúvidas o mais brabo do grupo. Isso por si só já é altoexplicativo.</li>
          </ul>
        </div>
        <div className='container'>
          {cardInfo.map((card) => (
            <Card
              key={card.name}
              img_front={card.img_front}
              img_back={card.img_back}
              name={card.name}
              title={card.text}
            />
          ))}
        </div>
        <div className="stats">
          <h2>Estatísticas</h2>
          <p>Em breve...</p>
        </div>
      </section>
      {/* <Button text="qql coisa" action={() => console.log('Button clicked!')} /> */}
    </body>
  )
}

export default App
