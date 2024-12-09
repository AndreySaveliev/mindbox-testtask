function Filter({
  setShowState,
  showState,
}: {
  setShowState: (state: string) => void;
  showState: string;
}) {
  const handleShowAll = () => {
    setShowState("all");
  };

  const handleShowDone = () => {
    setShowState("done");
  };
  const handleShowActive = () => {
    setShowState("active");
  };

  return (
    <div className="flex flex-row gap-2 justify-between">
      <button
        onClick={handleShowAll}
        className={`bg-slate-300 p-2 rounded-md hover:opacity-70 ${
          showState === "all" ? "bg-slate-500" : ""
        }`}
      >
        все
      </button>
      <button
        onClick={handleShowDone}
        className={`bg-slate-300 p-2 rounded-md hover:opacity-70 ${
          showState === "done" ? "bg-slate-500" : ""
        }`}
      >
        завершенные
      </button>
      <button
        onClick={handleShowActive}
        className={`bg-slate-300 p-2 rounded-md hover:opacity-70 ${
          showState === "active" ? "bg-slate-500" : ""
        }`}
      >
        активные
      </button>
    </div>
  );
}

export default Filter;
