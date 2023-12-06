import styles from "./ProductLists.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import {rowProduct} from '../../data'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 250,
    renderCell: (params) => {
      return (
        <div className={styles.Productlist}>
          <p>{params.row._id}</p>
        </div>
      );
    },
  },
  {
    field: "Product",
    headerName: "Product",
    width: 400,
    renderCell: (params) => {
      return (
        <div className={styles.Productlist}>
          <img
            className={styles.Product_ava}
            src={params.row.img[3].url_img}
            alt=""
          />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "stock",
    headerName: "InStock",
    width: 120,
    editable: true,
    renderCell: (params) => {
      return (
        <div className={styles.Productlist}>
          <p>{params.row.inStock}</p>
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price (USD)",
    sortable: true,
    width: 120,
    renderCell: (params) => {
      return (
        <div className={styles.Productlist}>
          <p>{params.row.price}</p>
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
          <Link to={"/product/" + params.row._id}>
            <button className={styles.edit}>Edit</button>
          </Link>

        </>
      );
    },
  },
];

function ProductLists() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = publicRequest();
  useEffect(() => {
    const productList = async () => {
      const rs = await api.get("/product/");
      setProducts(rs.data);
      setLoading(false);
    };
    productList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.Product_container}>
      {loading ? (
        <div className={styles.loading_spinner}></div>
      ) : (
        <Box sx={{ height: "550px", width: "100%" }} className={styles.Box}>
          <DataGrid
            rows={products}
            rowHeight={70}
            getRowId={(row) => row._id}
            columns={columns}
            style={{ fontSize: "1.5rem" }}
            className={styles.DataGrid}
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

export default ProductLists;
