import './App.css';
import FAQ from './components/FAQ';
import Flashcard from './components/Flashcard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App px-[104px]">
      <Navbar/>
      <Flashcard/>
      <FAQ/>
    </div>
  );
}

export default App;
