import { useSelector } from "react-redux";

function Table() {
  const response = useSelector((state) => state.apiResponse);

  return (
    <>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f04" }}>
            <th style={{ border: "1px solid #000000", padding: "10px" }}>
              Title
            </th>
            <th style={{ border: "1px solid #000000", padding: "10px" }}>
              Description
            </th>
            <th style={{ border: "1px solid #000000", padding: "10px" }}>
              Category
            </th>
            <th style={{ border: "1px solid #000000", padding: "10px" }}>
              Price
            </th>
            <th style={{ border: "1px solid #000000", padding: "10px" }}>
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {response?.map((e) => (
            <tr key={e.id} style={{ backgroundColor: "#f9f9" }}>
              <td style={{ border: "1px solid #000000", padding: "10px" }}>
                {e.title}
              </td>
              <td style={{ border: "1px solid #000000", padding: "10px" }}>
                {e.description}
              </td>
              <td style={{ border: "1px solid #000000", padding: "10px" }}>
                {e.category}
              </td>
              <td style={{ border: "1px solid #000000", padding: "10px" }}>
                {e.price}
              </td>
              <td style={{ border: "1px solid #000000", padding: "10px" }}>
                {e.rating.rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Table;
