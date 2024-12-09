import { useState } from "react";

function Task({
  task,
  dispatch,
}: {
  task: { name: string; isDone: boolean };
  dispatch: (action: { type: string; payload: string }) => void;
}) {
  const [isDone, setIsDone] = useState(task.isDone);

  const handleChangeState = () => {
    setIsDone(!isDone);
    dispatch({ type: "toogleStatus", payload: task.name });
  };

  return (
    <div className="bg-slate-400 w-80 rounded-md p-3">
      <p>{task.name}</p>
      <input type="checkbox" checked={isDone} onChange={handleChangeState} />
    </div>
  );
}

export default Task;
