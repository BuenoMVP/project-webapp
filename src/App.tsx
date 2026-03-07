// import Button from './components/Button'
import Card from './components/Card'
import image from '../public/images/test.png'
import './App.css'

function App() {

  return (
    <body className="main">
      <h1>Teste</h1>
      {/* <Button text="qql coisa" action={() => console.log('Button clicked!')} /> */}
      <Card img={image} />
    </body>
  )
}

export default App
