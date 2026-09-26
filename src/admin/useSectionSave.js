import { useCallback, useState } from "react";

export function useSectionSave(onSave) {
  const [status, setStatus] = useState("");
  const save = useCallback(
    async (value) => {
      setStatus("Saving…");
      try {
        await onSave(value);
        setStatus("Saved.");
      } catch (e) {
        setStatus(`Error: ${e.message}`);
      }
    },
    [onSave]
  );
  return { status, save };
}
