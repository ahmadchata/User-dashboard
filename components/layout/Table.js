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
  const instance = useTable(
    props,
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
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
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={i}
                  className="px-4 py-2"
                >
                  {column.render("Header")}
                  <span className="ms-2">
                    <FontAwesomeIcon icon={faFilter} />
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
