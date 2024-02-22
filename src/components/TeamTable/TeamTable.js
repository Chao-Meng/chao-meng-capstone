import "./TeamTable.scss";
const TableComponent = () => {
  const tableData = [
    {
      id: "0001",
      name: "user1",
      phoneNumber: "123-456-7890",
      email: "example1@gmail.com",
      title: "admin",
    },
    {
      id: "0002",
      name: "user2",
      phoneNumber: "123-456-7890",
      email: "example2@gmail.com",
      title: "admin",
    },
    {
      id: "0003",
      name: "user3",
      phoneNumber: "123-456-7890",
      email: "example3@gmail.com",
      title: "admin",
    },
    {
      id: "0004",
      name: "user4",
      phoneNumber: "123-456-7890",
      email: "example4@gmail.com",
      title: "admin",
    },
    {
      id: "0005",
      name: "user5",
      phoneNumber: "123-456-7890",
      email: "example5@gmail.com",
      title: "admin",
    },
    {
      id: "0006",
      name: "user6",
      phoneNumber: "123-456-7890",
      email: "example6@gmail.com",
      title: "admin",
    },
    {
      id: "0007",
      name: "user7",
      phoneNumber: "123-456-7890",
      email: "example7@gmail.com",
      title: "admin",
    },
    {
      id: "0008",
      name: "user8",
      phoneNumber: "123-456-7890",
      email: "example8@gmail.com",
      title: "admin",
    },
    {
      id: "0009",
      name: "user9",
      phoneNumber: "123-456-7890",
      email: "example9@gmail.com",
      title: "admin",
    },
    {
      id: "0010",
      name: "user10",
      phoneNumber: "123-456-7890",
      email: "example10@gmail.com",
      title: "admin",
    },
    {
      id: "0011",
      name: "user11",
      phoneNumber: "123-456-7890",
      email: "example11@gmail.com",
      title: "admin",
    },
  ];

  return (
    <>
      <p className="team">Team members</p>
      <table className="team__table">
        <thead>
          <tr className="team__tr">
            <th className="team__th">ID</th>
            <th className="team__th">Name</th>
            <th className="team__th">Phone Number</th>
            <th className="team__th">Email</th>
            <th className="team__th">Title</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.email}</td>
              <td>{row.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
