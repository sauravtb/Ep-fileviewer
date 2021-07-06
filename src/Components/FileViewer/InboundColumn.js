import { format } from "date-fns";
import { ColumnFilter, DateFilter } from "../Table/ColumnFilter";

export const Columns = [
  {
    Header: "Us Name",
    accessor: "us_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Them Name",
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
      return format(new Date(value), "dd/MM/yyyy @ HH:mm a");
    },
    Filter: DateFilter,
  },
];
