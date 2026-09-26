export default function ListEditor({ items, onChange, renderFields, newItem, itemLabel }) {
  function updateAt(index, patch) {
    const next = items.map((it, i) => (i === index ? { ...it, ...patch } : it));
    onChange(next);
  }

  function removeAt(index) {
    onChange(items.filter((_, i) => i !== index));
  }

  function moveAt(index, dir) {
    const target = index + dir;
    if (target < 0 || target >= items.length) return;
    const next = items.slice();
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  function add() {
    onChange([...items, { ...newItem }]);
  }

  return (
    <div className="list-editor">
      {items.map((item, i) => (
        <div className="list-editor-row" key={i}>
          <div className="list-editor-row-head">
            <span>{itemLabel(item) || `Item ${i + 1}`}</span>
            <div className="list-editor-row-actions">
              <button type="button" onClick={() => moveAt(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" onClick={() => moveAt(i, 1)} disabled={i === items.length - 1}>↓</button>
              <button type="button" className="danger" onClick={() => removeAt(i)}>Delete</button>
            </div>
          </div>
          <div className="list-editor-row-fields">{renderFields(item, (patch) => updateAt(i, patch))}</div>
        </div>
      ))}
      <button type="button" className="list-editor-add" onClick={add}>+ Add</button>
    </div>
  );
}
