import Pagination from "react-bootstrap/Pagination";

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

  const totalNumberofPages = Math.ceil(total / limit);

  for (let number = 1; number <= totalNumberofPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => dispatch(setCurrentPage(number))}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="flex d-flex justify-content-center">
      <Pagination>{items}</Pagination>
      <select onChange={(e) => dispatch(setLimit(e.target.value))}>
        <option value={2} selected={limit === 2}>
          2
        </option>
        <option value={5} selected={limit === 5}>
          5
        </option>
        <option value={10} selected={limit === 10}>
          6
        </option>
      </select>
    </div>
  );
}
