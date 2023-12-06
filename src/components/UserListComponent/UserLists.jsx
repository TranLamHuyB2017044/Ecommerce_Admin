import styles from "./UserLists.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest } from "../../request";

import { useState } from "react";
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={styles.userlist}>
          <p>{params.row._id}</p>
        </div>
      );
    },
  },
  {
    field: "user",
    headerName: "UserName",
    width: 180,
    renderCell: (params) => {
      return (
        <div className={styles.userlist}>
          <img className={styles.user_ava} src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "Email",
    headerName: "Email",
    width: 250,
    editable: true,
    renderCell: (params) => {
      return (
        <div className={styles.userlist}>
          <p>{params.row.email}</p>
        </div>
      );
    },
  },

  {
    field: "Phone",
    headerName: "Phone",
    sortable: false,
    width: 150,
    renderCell: (params) => {
      return (
        <div className={styles.userlist}>
          <p>{params.row.phone}</p>
        </div>
      );
    },
  },
  {
    field: "isAdmin",
    headerName: "IsAdmin",
    sortable: true,
    width: 150,
    renderCell: (params) => {
      return (
        <div className={styles.userlist}>
          <p>{String(params.row.isAdmin)}</p>
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row._id}>
            <button className={styles.edit}>Edit</button>
          </Link>

        </>
      );
    },
  },
];

function UserLists() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = publicRequest();

  useEffect(() => {
    const UserList = async () => {
      const respone = await api.get("/user/");
      setUser(respone.data);
      setLoading(false);
    };
    UserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.user_container}>
      {loading ? (
        <div className={styles.loading_spinner}></div>
      ) : (
        <Box sx={{ height: "400px", width: "100%" }} className={styles.Box}>
          <DataGrid
            className={styles.dataGrid}
            rows={user}
            getRowId={(user) => user._id}
            columns={columns}
            rowHeight={70}
            style={{ fontSize: "1.5rem" }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </div>
  );
}

export default UserLists;
