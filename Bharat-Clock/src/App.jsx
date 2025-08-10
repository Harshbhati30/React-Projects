import './App.css'
import Head from './Component/Head'
import MidBody from './Component/MidBody'
import End from './Component/End'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return <div>
    <Head></Head>
    
    <div className="endcon">
      <MidBody></MidBody>
      <End></End>
    </div>
  </div>
}

export default App
