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
    Header: "Sent To",
    accessor: "ThemName",
    Filter: ColumnFilter,
  },
  {
    Header: "Sent By",
    accessor: "us_name",
    Filter: ColumnFilter,
  },
  {
    Header: "File Name",
    accessor: "file_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Sent At",
    accessor: "created_at",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy @ hh:mm a");
    },
    Filter: DateFilter,
  },
];
