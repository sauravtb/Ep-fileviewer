import React, { useMemo } from "react";
import { useTable, usePagination, useFilters } from "react-table";
import styled from "styled-components";
import Table from "react-bootstrap/Table";

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
    headerGroups,
    setPageSize,
    gotoPage,
    pageCount,
    prepareRow,
  } = useTable({ columns, data }, useFilters, usePagination);

  const { pageIndex, pageSize } = state;

  return (
    <MainDiv>
      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}

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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
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
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </MainDiv>
  );
}

export default FilesTable;

const MainDiv = styled.span`
  width: 100%;
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
