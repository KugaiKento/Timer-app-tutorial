import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTimer() {
  const [tasks, setTasks] = useLocalStorage<Record<string, string>>(
    "timers",
    {}
  );
  const [input, setInput] = useState("");

  const addTimer = () => {
    if (!input) return;
    const id = Date.now().toString();
    setTasks({ ...tasks, [id]: input });
    setInput("");
  };

  const removeTimer = (id: string) => {
    const updated = { ...tasks };
    delete updated[id];
    setTasks(updated);
  };

  return { tasks, input, setInput, addTimer, removeTimer };
}
