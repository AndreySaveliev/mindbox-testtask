import { createContext } from "react";

const tasks = [
  { name: "Todo1", isDone: true },
  { name: "Todo2", isDone: false },
  { name: "Todo3", isDone: false },
  { name: "Todo4", isDone: true },
  { name: "Todo5", isDone: false },
];

export const TaskContext = createContext(tasks);
