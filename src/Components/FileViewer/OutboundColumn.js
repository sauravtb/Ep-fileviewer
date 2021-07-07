import { format } from "date-fns";
import { ColumnFilter, DateFilter } from "../Table/ColumnFilter";

export const Columns = [
  {
    Header: "Sent To",
    accessor: "ThemName",
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
