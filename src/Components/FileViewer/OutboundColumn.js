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
    Header: "Sent To",
    accessor: "ThemName",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Sent By",
    accessor: "us_name",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "File Name",
    accessor: "file_name",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Sent At",
    accessor: "created_at",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy @ hh:mm a");
    },
    Filter: DateFilter,
    disableFilters: true,
  },
];
