import './App.css';
import { Cabecalho } from './Components/Cabecalho/cabecalho';
import { Footer } from './Components/Footer/footer';
import { Body } from './Components/Body/body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div>
      <Cabecalho />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
