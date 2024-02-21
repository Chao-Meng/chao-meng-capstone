import "./Table.scss";
const Table = () => {
  const data = {
    type: "Temperature alarm",
    content: "Temperature above 26°C, Fl Lobby.",
    time: "01-26 12:05",
  };

  return (
    <table className="table">
      <thead>
        <tr className="table__tr">
          <th className="table__th">Type</th>
          <th className="table__th">Content</th>
          <th className="table__th">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table__td">{data.type}</td>
          <td className="table__td">{data.content}</td>
          <td className="table__td">{data.time}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
