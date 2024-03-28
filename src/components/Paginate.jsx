import Pagination from "react-bootstrap/Pagination";
import { usePagination, DOTS } from "../hooks/usePagination";

export default function Paginate(
  total,
  limit,
  dispatch,
  currentPage,
  setCurrentPage,
  setLimit
) {
  let active = currentPage;
  let items = [];

  const totalNumberofPages = (total / limit);

  console.log(totalNumberofPages);

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item
        key={number}
        value={number}
        active={number === active}
        onClick={() => dispatch(setCurrentPage(number))}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationRange = usePagination({
    currentPage,
    totalCount:total,
    siblingCount:1,
    pageSize:limit,
  })
  if(currentPage=== 0 || paginationRange.length<2){
    return null
  }
  return (
    <div className="flex d-flex justify-content-center">
      <Pagination>
      <Pagination.First
      disabled={currentPage===1}
      onClick={()=>{
        dispatch(setCurrentPage(1))
      }} />
      <Pagination.Prev
      disabled={currentPage===1}
      onClick={()=>{
        currentPage!=1?
        dispatch(setCurrentPage(currentPage-1)):null
      }}
      />
        {items}
        <Pagination.Next
        disabled={currentPage === totalNumberofPages}
         onClick={()=>{
          currentPage!=totalNumberofPages?
          dispatch(setCurrentPage(currentPage+1)):null
        }}
        />
      <Pagination.Last
      disabled={currentPage=== totalNumberofPages}
       onClick={()=>{
        dispatch(setCurrentPage(totalNumberofPages))
      }}
      />
        </Pagination>
      <select onChange={(e) => dispatch(setLimit(e.target.value))}>
        <option value={2} selected={limit === 2}>
          2
        </option>
        <option value={5} selected={limit === 5}>
          5
        </option>
        <option value={10} selected={limit === 10}>
          10
        </option>
      </select>
    </div>
  );
}
