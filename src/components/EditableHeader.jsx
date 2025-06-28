import { useRef, useEffect } from 'react';

export default function EditableHeader({
  col, editingHeader, setEditingHeader, editHeader
}) {
  const editing = editingHeader === col.id
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editing])

  return (
    <th className="px-6 py-3 cursor-pointer" onClick={() => setEditingHeader(col.id)}>
      {editing ? (
        <input
          ref={inputRef}
          value={col.name}
          onChange={e => editHeader(col.id, e.target.value)}
          onBlur={() => setEditingHeader(null)}
          className="border rounded p-1 w-full"
        />
      ) : (
        <span>{col.name}</span>
      )}
    </th>
  );
}