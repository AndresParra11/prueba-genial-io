import { useState } from "react";
import "./Payments.css";
import payments from "../../data/dataPayments";

const Payments = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedColumns, setSelectedColumns] = useState([
    "status",
    "email",
    "amount",
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3; // Define la cantidad de filas por página

  const optionsSelect = [
    {
      id: 1,
      value: "columns",
      label: "Columns",
    },
    {
      id: 2,
      value: "status",
      label: "Status",
    },
    {
      id: 3,
      value: "email",
      label: "Email",
    },
    {
      id: 4,
      value: "amount",
      label: "Amount",
    },
  ];

  const filteredPayments = payments.filter((payment) =>
    payment.email.toLowerCase().includes(filterText.toLowerCase())
  );

  const toggleSelectAll = () => {
    setSelectedRows(
      selectedRows.length === filteredPayments.length
        ? []
        : filteredPayments.map((payment) => payment.id)
    );
  };

  const toggleSelectRow = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleColumnSelectChange = (e) => {
    const selectedColumn = e.target.value;
    setSelectedColumns((prevSelectedColumns) => {
      if (selectedColumn === "columns") {
        return ["status", "email", "amount"];
      } else {
        return [selectedColumn];
      }
    });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredPayments.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="payments">
      <div className="payments__filters">
        <input
          className="payments__filter--input"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter emails..."
        />
        <select
          className="payments__filter--select"
          name=""
          id=""
          onChange={handleColumnSelectChange}
        >
          {optionsSelect.map((option) => (
            <option
              key={option.id}
              className="payments__filter--option"
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <table className="payments__table">
        <thead>
          <tr className="payments__table--row">
            <td className="payments__table--cell">
              <input
                className="payments__checkbox"
                type="checkbox"
                checked={selectedRows.length === filteredPayments.length}
                onChange={toggleSelectAll}
              />
            </td>
            {selectedColumns.map((column) => (
              <td className={`header__columns ${column}`} key={column}>
                {column}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((payment) => (
            <tr
              className={
                payment.id % 3 === 0
                  ? "payments__table--row rowFinal"
                  : "payments__table--row"
              }
              key={payment.id}
            >
              <td>
                <input
                  className="payments__checkbox"
                  type="checkbox"
                  checked={selectedRows.includes(payment.id)}
                  onChange={() => toggleSelectRow(payment.id)}
                />
              </td>
              {selectedColumns.map((column) => (
                <td
                  className={`payments__table--cell ${column} ${column}__cell`}
                  key={column}
                >
                  {payment[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="payments__summary">
        <p className="payments__description">
          {selectedRows.length} of {filteredPayments.length} row(s) selected.
        </p>
        <div className="payments__buttons">
          <button
            className="payments__button--previous"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="payments__button--next"
            onClick={handleNextPage}
            disabled={indexOfLastRow >= filteredPayments.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
