import styles from "./ProductLists.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {rowProduct} from '../../data'
import { Link } from "react-router-dom";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Product",
    headerName: "Product",
    width: 220,
    renderCell:(params) => {
        return (
            <div className={styles.Productlist}>
                <img className={styles.Product_ava} src={params.row.avatar} alt="" />
                {params.row.productname}
            </div>
        )
    }
  },
  {
    field: "stock",
    headerName: "Stock",
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
    field: "price",
    headerName: "Price",
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
                <Link to={'/product/'+params.row.id}>

                    <button className={styles.edit}>Edit</button>
                </Link>

                <DeleteOutlinedIcon className={styles.delete}/>
            </>
        )
    }
  },
];


function ProductLists() {
  return (
    <div className={styles.Product_container}>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rowProduct}
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

export default ProductLists;
