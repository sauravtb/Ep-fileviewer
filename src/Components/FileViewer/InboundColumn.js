import { format } from "date-fns";
import { ColumnFilter, DateFilter } from "../Table/ColumnFilter";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

export const Columns = [
  {
    Header: () => null,
    id: "expander",
    Cell: ({ row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? <FiArrowDown /> : <FiArrowRight />}
      </span>
    ),
  },
  {
    Header: "Received From",
    accessor: "ThemName",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Received By",
    accessor: "us_name",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "File Name",
    accessor: "file_name",
    Filter: ColumnFilter,
    tooltip: true,
    disableFilters: true,
  },
  {
    Header: "Received At",
    accessor: "file_received_at",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy @ hh:mm a");
    },
    Filter: DateFilter,
    disableFilters: true,
  },
];
