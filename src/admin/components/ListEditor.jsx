import { useState } from "react";

// collapsible: show one row's fields at a time, for long lists with many fields.
export default function ListEditor({ items, onChange, renderFields, newItem, itemLabel, collapsible = false }) {
  const [openRow, setOpenRow] = useState(null);

  function updateAt(index, patch) {
    const next = items.map((it, i) => (i === index ? { ...it, ...patch } : it));
    onChange(next);
  }

  function removeAt(index) {
    setOpenRow(null);
    onChange(items.filter((_, i) => i !== index));
  }

  function moveAt(index, dir) {
    const target = index + dir;
    if (target < 0 || target >= items.length) return;
    const next = items.slice();
    [next[index], next[target]] = [next[target], next[index]];
    if (openRow === index) setOpenRow(target);
    else if (openRow === target) setOpenRow(index);
    onChange(next);
  }

  function add() {
    setOpenRow(items.length);
    onChange([...items, { ...newItem }]);
  }

  return (
    <div className="list-editor">
      {items.map((item, i) => (
        <div className="list-editor-row" key={i}>
          <div className="list-editor-row-head">
            <span>{itemLabel(item) || `Item ${i + 1}`}</span>
            <div className="list-editor-row-actions">
              {collapsible && (
                <button type="button" aria-expanded={openRow === i} onClick={() => setOpenRow(openRow === i ? null : i)}>
                  {openRow === i ? "Close" : "Edit"}
                </button>
              )}
              <button type="button" onClick={() => moveAt(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" onClick={() => moveAt(i, 1)} disabled={i === items.length - 1}>↓</button>
              <button type="button" className="danger" onClick={() => removeAt(i)}>Delete</button>
            </div>
          </div>
          {(!collapsible || openRow === i) && (
            <div className="list-editor-row-fields">{renderFields(item, (patch) => updateAt(i, patch))}</div>
          )}
        </div>
      ))}
      <button type="button" className="list-editor-add" onClick={add}>+ Add</button>
    </div>
  );
}
