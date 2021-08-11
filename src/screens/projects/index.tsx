import { Link, Navigate, Routes } from "react-router-dom";
import { Route } from "react-router";
import { BoardScreen } from "../Board";
import { TasksScreen } from "../Taks";
export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScren</h1>
      <Link to={"board"}>看板</Link>
      <Link to={"tasks"}>任务组</Link>
      <Routes>
        <Route path={"/board"} element={<BoardScreen />} />
        <Route path={"/tasks"} element={<TasksScreen />} />
        <Navigate to={window.location.pathname + "/board"} />
      </Routes>
    </div>
  );
};
