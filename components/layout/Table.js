import {useState} from "react";
import PropTypes from "prop-types";
import {
  useTable,
  usePagination,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
} from "react-table";
import styles from "/styles/Table.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const DataTable = (props) => {
  const [filter, setFilter] = useState(false);

   // Open filter menu
   const openFilter = () => {
    setFilter((prev) => !prev);
  };

  const instance = useTable(
    props,
    useFilters,
    useGroupBy,
    // useSortBy,
    useExpanded,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = instance;

  return (
    <>
      <table {...getTableProps()} className={`table shadow-sm ${styles.table}`}>
        {filter && <div className={`p-4 bg-white shadow-sm sticky-top ${styles.filter}`}><form>
          <div className="form-group">
            <label>Organization</label>
            <input type="text" className="form-control" placeholder="Organization" />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" className="form-control" placeholder="Phone Number" />
          </div>
          </form>
          <div className="d-flex justify-content-center mt-3">
          <button className={`px-3 me-4 ${styles.resetBtn}`}>Reset</button>
          <button className={`px-3 ${styles.filterBtn}`}>Filter</button></div>
          </div>}
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps()}
                  key={i}
                  className="px-4 py-2"
                >
                  {column.render("Header")}
                  <span className="ms-2">
                    <FontAwesomeIcon className={styles.filterIcon} icon={faFilter} onClick={openFilter} />
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={i}
                      className="py-4 px-4 text-muted"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <nav className={`d-flex justify-content-between`}>
        <div>
          Showing {parseInt(pageIndex + 1) * parseInt(pageSize)} out of{" "}
          {parseInt(pageSize) * parseInt(pageSize)}
        </div>
        <div className="d-flex">
          <button
            style={{ background: "rgba(33, 63, 125, 0.1)", border: "none" }}
            className="me-2 px-2"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            &#60;
          </button>
          <div>
            Page {pageIndex + 1} of {pageSize}
          </div>
          <button
            style={{ background: "rgba(33, 63, 125, 0.1)", border: "none" }}
            className="ms-2 px-2"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            &#62;
          </button>
        </div>
      </nav>
    </>
  );
};

DataTable.defaultProps = {
  columns: [],
  data: [],
  tableClass: "",
  headClass: "",
  showPagination: true,
};

DataTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

export default DataTable;
