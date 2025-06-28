import { useState } from "react";
import EditableCell from "./EditableCell";
import EditableHeader from "./EditableHeader";
import RowActionMenu from "./RowActionMenu";

export default function EditableTable(props) {
  const {
    columns, data, editingCell, editingHeader,
    setEditingCell, setEditingHeader,
    addRow, deleteRow, editCell, editHeader, addColumn
  } = props
  const [menuOpenRowId, setMenuOpenRowId] = useState(null)

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th className="p-2"></th>
            {columns.map(col => (
              <EditableHeader
                key={col.id}
                col={col}
                editingHeader={editingHeader}
                setEditingHeader={setEditingHeader}
                editHeader={editHeader}
              />
            ))}
            <th className="px-6 py-3">
              <button
                onClick={addColumn}
                className="w-10 h-10 flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 group"
              >
                <span className="transition-all ease-in duration-75   rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent">
                  +
                </span>
              </button>


            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr
              key={row.id}
              className="bg-gray-800 border-gray-700 hover:bg-gray-600"
            >
              <td className="p-2 w-4">
                <RowActionMenu
                  open={menuOpenRowId === row.id}
                  onOpen={() => setMenuOpenRowId(row.id)}
                  onClose={() => setMenuOpenRowId(null)}
                  onDelete={() => {
                    deleteRow(row.id)
                    setMenuOpenRowId(null)
                  }}
                />
              </td>
              {columns.map(col => (
                <EditableCell
                  key={col.id}
                  row={row}
                  col={col}
                  editingCell={editingCell}
                  setEditingCell={setEditingCell}
                  editCell={editCell}
                />
              ))}
              <td />
            </tr>
          ))}
          <tr>
            <td colSpan={columns.length + 2}>
              <button
                onClick={addRow}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 ml-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
              >
                <span className="relative px-4 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                  + Add Row
                </span>
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}