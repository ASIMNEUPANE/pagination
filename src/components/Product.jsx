import { Table } from "react-bootstrap";

export default function Product({products}) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>price</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          products.map((product,index) => {
            return (
              <tr key ={product?._id}>
                <td>{index+1}</td>
                <td>{product?.name}</td>
                <td>{product?.price}</td>
                <td>{product?.quantity}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
