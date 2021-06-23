import React from "react";

import { useTable } from "react-table";

function Table() {
  const columnNames = [
    "InboundFileKey",
    "UsKey",
    "UsCommonCode",
    "ThemKey",
    "ThemCommonCode",
    "Filename",
    "Plaintext",
    "ReceivedAt",
    "TransactionId",
    "Processed",
    "InboundFileId",
  ];

  const rowValues = [["ONE123"], ["TWO223"]];

  const data = React.useMemo(
    () =>
      rowValues.map((item) => {
        return {
          0: item,
          1: item,
          2: item,
          3: item,
          4: item,
          5: item,
          6: item,
          7: item,
          8: item,
          9: item,
          10: item,
        };
      }),
    []
  );

  const columns = React.useMemo(
    () =>
      columnNames.map((item, index) => {
        return {
          Header: item,
          accessor: index.toString(),
        };
      }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
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
  );
}

export default Table;
