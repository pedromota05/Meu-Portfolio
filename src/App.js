import './App.css';
import { Cabecalho } from './Components/Cabecalho/cabecalho';
import { Footer } from './Components/Footer/footer';
import { Body } from './Components/Body/body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div id="top">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>  
        <Cabecalho />
        <Body />
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
