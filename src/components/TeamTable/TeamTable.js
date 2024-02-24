import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TeamTable.scss";

const TeamTable = () => {
  const [tableData, setTableData] = useState([]);
  const [newMember, setNewMember] = useState({
    id: "",
    name: "",
    phoneNumber: "",
    email: "",
    title: "",
  });

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/team");
        setTableData(response.data);
      } catch (error) {
        console.error("Error fetching team members", error);
      }
    };
    fetchMembers();
  }, []);

  const handleFormChange = (event) => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

  const addMember = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/team",
        newMember
      );
      setTableData([...tableData, response.data]);
      setNewMember({ id: "", name: "", phoneNumber: "", email: "", title: "" });
    } catch (error) {
      alert("An error occurred while adding the member.");
    }
  };

  const deleteMember = async (memberId) => {
    try {
      await axios.delete(`http://localhost:8080/team/${memberId}`);
      setTableData(tableData.filter((member) => member.id !== memberId));
    } catch (error) {
      alert("An error occurred while deleting the member.");
    }
  };
  return (
    <>
      <p className="team">Team members</p>
      <form onSubmit={addMember} className="team__form">
        <input
          type="text"
          name="id"
          className="team__input"
          value={newMember.id}
          onChange={handleFormChange}
          placeholder="ID"
          required
        />
        <input
          type="text"
          name="name"
          className="team__input"
          value={newMember.name}
          onChange={handleFormChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          className="team__input"
          value={newMember.phoneNumber}
          onChange={handleFormChange}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          className="team__input"
          value={newMember.email}
          onChange={handleFormChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="title"
          className="team__input"
          value={newMember.title}
          onChange={handleFormChange}
          placeholder="Title"
        />
        <button type="submit" className="team__button-add">
          Add Member
        </button>
      </form>
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
              <td>
                <button
                  onClick={() => deleteMember(row.id)}
                  className="team__button-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TeamTable;
