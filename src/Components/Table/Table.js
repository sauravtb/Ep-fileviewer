import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS } from "./columns.js";
import Table from "react-bootstrap/Table";

function FilesTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

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
    prepareRow,
  } = useTable({ columns, data }, usePagination);

  const { pageIndex } = state;
  return (
    <React.Fragment>
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
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
      <BtnWrapper>
        <Button
          variant="dark"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </Button>
        <Button
          variant="dark"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </Button>
      </BtnWrapper>
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
    </React.Fragment>
  );
}

export default FilesTable;

const BtnWrapper = styled.div`
  display: flex;

  .btn {
    margin: 0 1rem;
  }
`;
