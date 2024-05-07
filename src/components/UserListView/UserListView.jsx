import { useContext } from "react";
import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserListView = () => {
  const navigation = useNavigate();
  const { filteredUsers, setFilter } = useContext(UserContext);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ [name]: value });
  };

  const handleRowClick = (params) => {
    navigation(`/user/${params.row.id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "phoneNumber", headerName: "Phone Number", width: 150 },
    { field: "age", headerName: "Age", width: 90 },
    { field: "gender", headerName: "Gender", width: 120 },
  ];

  return (
    <div>
      <TextField
        name="firstName"
        onChange={handleFilterChange}
        style={{ width: "100%", marginBottom: "20px" }}
        placeholder="Search By Name"
      />

      <DataGrid
        rows={filteredUsers}
        columns={columns}
        pageSize={5}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default UserListView;
