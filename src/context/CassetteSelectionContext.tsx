import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CassetteSelectionValue = {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  selectCassette: (id: string, scrollToWork?: boolean) => void;
};

const CassetteSelectionContext = createContext<CassetteSelectionValue | null>(
  null,
);

export function CassetteSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectCassette = useCallback((id: string, scrollToWork = true) => {
    setSelectedId(id);
    if (scrollToWork && typeof document !== "undefined") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const value = useMemo(
    () => ({ selectedId, setSelectedId, selectCassette }),
    [selectedId, selectCassette],
  );

  return (
    <CassetteSelectionContext.Provider value={value}>
      {children}
    </CassetteSelectionContext.Provider>
  );
}

export function useCassetteSelection() {
  const ctx = useContext(CassetteSelectionContext);
  if (!ctx) {
    throw new Error(
      "useCassetteSelection must be used within CassetteSelectionProvider",
    );
  }
  return ctx;
}
