import { useSelector, useDispatch } from "react-redux";
import Paginate from "./components/Paginate";
import Product from "./components/Product";
import { fetchProducts, setCurrentPage, setLimit } from "./slices/productSlice";
import { useEffect, useCallback } from "react";

function App() {
  const { products, limit, total, currentPage } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const list = useCallback(() => {
    dispatch(fetchProducts({ limit, page: currentPage }));
  }, [dispatch, currentPage, limit]);

  useEffect(() => {
    list();
  }, [list]);

  return (
    <div className="m-5">
      <h1 className="flex d-flex justify-content-center">Hello Mitro</h1>
      <Product products={products} />

      <Paginate
        setLimit={setLimit}
        dispatch={dispatch}
        total={total}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
