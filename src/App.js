import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
        <div className='container-fluid'>
          <div className="row">
              <Header></Header>
          </div>
            <Products></Products>
        </div>
    </div>
  );
}

export default App;
