import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useFilters,
  useExpanded,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Collapse from "react-bootstrap/Collapse";
import { GlobalFilter } from "./GlobalFilter";

function FilesTable({ rowData, columnData }) {
  const columns = useMemo(() => columnData && columnData, [columnData]);
  const data = useMemo(() => rowData && rowData, [rowData]);

  useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    headerGroups,
    setPageSize,
    gotoPage,
    pageCount,
    visibleColumns,
    prepareRow,
  } = useTable(
    { columns, data },

    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <div
        style={{
          fontSize: "1rem",
          maxWidth: "90vw",
        }}
      >
        <p style={{ wordWrap: "break-word" }}>{row.original.file_plain_text}</p>
      </div>
    ),
    []
  );

  return (
    <MainDiv>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />*/}
      <Table bordered hover responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <React.Fragment>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        onClick={() => cell.row.toggleRowExpanded()}
                        aria-controls="collapse-text"
                        aria-expanded={row.isExpanded}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <Collapse in={row.isExpanded}>
                    <tr>
                      <td id="collapse-text" colSpan={visibleColumns.length}>
                        {renderRowSubComponent({ row })}
                      </td>
                    </tr>
                  </Collapse>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <Button
          variant="primary"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          size="sm"
        >
          {"<<"}
        </Button>{" "}
        <Button
          size="sm"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>{" "}
        <Button size="sm" onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </Button>{" "}
        <Button
          size="sm"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>{" "}
        <DropdownButton title={`Show ${pageSize}`} value={pageSize} size="sm">
          {[5, 10, 20, 30, 40].map((pageSize) => (
            <Dropdown.Item
              as="button"
              key={pageSize}
              value={pageSize}
              onClick={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              Show {pageSize}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </MainDiv>
  );
}

export default FilesTable;

const MainDiv = styled.span`
  width: 100%;
  th {
    text-align: left;
    background-color: #343a40;
    color: white;
  }
  tr {
    background-color: #f7f6fb;
    cursor: pointer;
  }
  tr:nth-child(even) {
    background-color: #dee4e9;
  }

  .pageInfo {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    color: #3e444a;

    & button {
      border-radius: 3px;
      margin-right: 0.3rem;
    }
    & span {
      margin-right: 0.3rem;
    }
    & input {
      border-radius: 3px;
    }
  }
`;
