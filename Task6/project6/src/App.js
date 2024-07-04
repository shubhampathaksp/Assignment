
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Main/>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
