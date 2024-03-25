import logoImg from './assets/logoImg.png';
import './App.css'
import Card from './components/card/Card';

import { useGeradorData } from './hooks/useGeradorData';

function App() {
  const senhaG = useGeradorData();
  
  

  return (
    <div className='container'>
      <img src={logoImg}></img>   
      
      <div className="card-grid"></div>
      <Card senha={senhaG} />
    </div>

  )
}

export default App
