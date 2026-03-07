// import Button from './components/Button'
import Card from './components/Card'
import image from '../public/images/test.png'
import './App.css'

function App() {

  return (
    <body className='main'>
      <section className='content'>
        <h1>Central dos crias</h1>
        <div className='intro'>
          <h1>Bem-vindo ao meu site!</h1>
        </div>
        <div className='container'>
          <Card img={image} name='Card 1' />
          <Card img={image} name='Card 2' />
          <Card img={image} name='Card 3' />
          <Card img={image} name='Card 4' />
        </div>
      </section>
      {/* <Button text="qql coisa" action={() => console.log('Button clicked!')} /> */}
    </body>
  )
}

export default App
