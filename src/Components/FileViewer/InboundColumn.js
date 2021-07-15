import { format } from "date-fns";
import { ColumnFilter, DateFilter } from "../Table/ColumnFilter";

export const Columns = [
  {
    Header: () => null,
    id: "expander",
    Cell: ({ row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? "👇" : "👉"}
      </span>
    ),
  },
  {
    Header: "Received From",
    accessor: "ThemName",
    Filter: ColumnFilter,
  },
  {
    Header: "Received By",
    accessor: "us_name",
    Filter: ColumnFilter,
  },
  {
    Header: "File Name",
    accessor: "file_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Received At",
    accessor: "file_received_at",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy @ hh:mm a");
    },
    Filter: DateFilter,
  },
];
