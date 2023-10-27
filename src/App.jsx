import ProductList from "./components/ProductList";
import Paginate from "./components/Paginate";
function App() {
  return (
    <div className="container mt-2">
      <h1 className="text-center" >Hello Mitro</h1>
      <ProductList/>
   <Paginate/>
    </div>
  );
}

export default App;
