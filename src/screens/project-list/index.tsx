import { SearchPanel } from "./serach-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import React from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";

import { useHttp } from "../../utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: String(cleanObject(debouncedParam)) }).then(
      setList
    );
  }, [debouncedParam]);
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
