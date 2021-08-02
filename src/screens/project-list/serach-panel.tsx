import React from "react";
import { Input, Select, Form } from "antd";
import styled from "@emotion/styled";

export interface User {
  token: string;
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SerachPanelProps {
  users: User[];
  param: { name: string; personId: string };
  setParam: (param: SerachPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SerachPanelProps) => {
  return (
    <MarginForm layout={"inline"}>
      <Form.Item>
        {/*setParam(Object.assign({},param,{name:evt.target.value}))*/}
        <Input
          placeholder={"项目名"}
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </MarginForm>
  );
};

const MarginForm = styled(Form)`
  margin-bottom: 2rem;
`;
