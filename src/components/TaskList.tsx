import Task from "./Task.js";
function Tasklist({
  tasks,
  showState,
  dispatch,
}: {
  tasks: { name: string; isDone: boolean }[];
  showState: string;
  dispatch: (action: { type: string; payload: string }) => void;
}) {
  const doneTasks = tasks.filter((task) => task.isDone);
  const activeTasks = tasks.filter((task) => !task.isDone);

  return (
    <div className="flex flex-col gap-3 overflow-y-scroll overflow-x-hidden h-[600px] w-96 items-center">
      {showState === "done" && doneTasks.length === 0 && <p className="">done 0</p>}
      {showState === "active" && activeTasks.length === 0 && <p className="">active 0</p>}
      {tasks.map((task) => {
        if (showState === "all") {
          return <Task task={task} dispatch={dispatch} />;
        } else if (showState === "done") {
          return task.isDone && <Task task={task} dispatch={dispatch} />;
        } else if (showState === "active") {
          return !task.isDone && <Task task={task} dispatch={dispatch} />;
        }
      })}
    </div>
  );
}

export default Tasklist;
