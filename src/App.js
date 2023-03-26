import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import {products}  from "./components/utilities/data-operation"

function App() {
  console.log(products)
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
