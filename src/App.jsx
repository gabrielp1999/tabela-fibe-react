import './App.css';
import Main from './Components/Main';
import Navbar from './Components/NavBar';


function App() {
  document.title = 'Tabela Fipe';
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
