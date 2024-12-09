import { useContext, useReducer, useState } from "react";
import Input from "./components/Input";

import { TaskContext } from "./hooks/context";
import Tasklist from "./components/TaskList";
import Filter from "./components/Filter";

function reducer(
  state: { name: string; isDone: boolean }[],
  action: { type: string; payload: string }
) {
  if (action.type === "addTask") {
    return [...state, { name: action.payload, isDone: false }];
  } else if (action.type === "toogleStatus") {
    return state.map((task) =>
      task.name === action.payload ? { ...task, isDone: !task.isDone } : task
    );
  }
  return state;
}

function App() {
  const tasks = useContext(TaskContext);
  const [state, dispatch] = useReducer(reducer, tasks);
  const [showState, setShowState] = useState("all");
  return (
    <main className="w-screen h-screen flex items-center">
      <section className="flex flex-col w-min mx-auto ">
        <Tasklist tasks={state} showState={showState} dispatch={dispatch} />
        <Filter setShowState={setShowState} showState={showState} />
        <Input dispatch={dispatch} />
      </section>
    </main>
  );
}

export default App;
