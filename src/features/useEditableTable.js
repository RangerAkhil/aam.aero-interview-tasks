import { useState } from 'react';
import { nanoid } from 'nanoid';
import { tableData, tableColumnData } from "@/data/table";

export default function useEditableTable() {
  const [columns, setColumns] = useState(tableColumnData);

  const [data, setData] = useState(tableData);

  const [editingCell, setEditingCell] = useState(null);
  const [editingHeader, setEditingHeader] = useState(null);

  function addRow() {
    const newRow = { id: nanoid() };
    columns.forEach(col => { newRow[col.id] = '' });
    setData([...data, newRow]);
  }

  function deleteRow(rowId) {
    setData(data.filter(row => row.id !== rowId));
  }

  function editCell(rowId, colId, value) {
    setData(data.map(row =>
      row.id === rowId ? { ...row, [colId]: value } : row
    ));
  }

  function editHeader(colId, value) {
    setColumns(columns.map(col =>
      col.id === colId ? { ...col, name: value } : col
    ));
  }

  function addColumn() {
    const colId = nanoid();
    setColumns([...columns, { id: colId, name: 'New Column' }]);
    setData(data.map(row => ({ ...row, [colId]: '' })));
  }

  return {
    columns, data, editingCell, editingHeader,
    setEditingCell, setEditingHeader,
    addRow, deleteRow, editCell, editHeader, addColumn
  };
}