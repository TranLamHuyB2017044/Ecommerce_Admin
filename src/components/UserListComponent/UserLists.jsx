import styles from "./UserLists.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {rows} from '../../data'
import { Link } from "react-router-dom";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 220,
    renderCell:(params) => {
        return (
            <div className={styles.userlist}>
                <img className={styles.user_ava} src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
        )
    }
  },
  {
    field: "Email",
    headerName: "Email",
    width: 250,
    editable: true,
  },

  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 150,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    sortable: true,
    width: 150,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell:(params) => {
        return (
            <>
                <Link to={'/user/'+params.row.id}>

                    <button className={styles.edit}>Edit</button>
                </Link>

                <DeleteOutlinedIcon className={styles.delete}/>
            </>
        )
    }
  },
];


function UserLists() {
  return (
    <div className={styles.user_container}>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          style={{fontSize:'1.5rem'}}
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
    </div>
  );
}

export default UserLists;
