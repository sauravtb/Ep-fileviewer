import { format } from "date-fns";
import { ColumnFilter, DateFilter } from "../Table/ColumnFilter";

export const Columns = [
  {
    Header: "Received From",
    accessor: "ThemName",
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
