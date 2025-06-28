import { useRef, useEffect } from 'react';

export default function EditableCell({
  row, col, editingCell, setEditingCell, editCell
}) {
  const editing = editingCell && editingCell.rowId === row.id && editingCell.colId === col.id
  const inputRef = useRef(null)
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editing])

  return (
    <td
      onClick={() => setEditingCell({ rowId: row.id, colId: col.id })}
      className="px-6 py-4 cursor-pointer"
    >
      {editing ? (
        <input
          ref={inputRef}
          value={row[col.id]}
          onChange={e => editCell(row.id, col.id, e.target.value)}
          onBlur={() => setEditingCell(null)}
          className="border rounded p-1 w-full"
        />
      ) : (
        <span>{row[col.id]}</span>
      )}
    </td>
  );
}