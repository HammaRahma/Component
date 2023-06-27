import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';

function App() {
  const myName ='Rahma'
  return (

    <div className="App">
      <ProductCard/>

      <h1>hello {myName}</h1>
    </div>
    
  );
}

export default App;
