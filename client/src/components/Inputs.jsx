import React from "react";
import { Form, Input, Select } from "antd";
const { Option } = Select;
export const Text = ({ label, name, value }) => {
  console.log(value)
  return (
    <Form.Item label={label} name={name}>
      <Input  />
    </Form.Item>
  );
};
export const TextArea = ({ label, name, value }) => {
  return (
    <Form.Item label={label} name={name}>
      <Input.TextArea  />
    </Form.Item>
  );
};

export const Number = ({ label, name, value }) => {
  return (
    <Form.Item label={label} name={name}>
      <Input
        onChange={(e) => /(\++\d+)/.test(Number(e.target.value))}
      />
    </Form.Item>
  );
};

export const Email = ({ label, name, value }) => {
  return (
    <Form.Item label={label} name={name}>
      <Input  />
    </Form.Item>
  );
};

export const Password = ({ label, name, value }) => {
  return (
    <Form.Item
      label={label}
      name={name}
    >
      <Input.Password />
    </Form.Item>
  );
};

export const List = ({ label, name }) => {
  return (
    <Form.Item label={label} name={name} hasFeedback>
      <Select allowClear>
        <Option value="1">قانون الاسرة</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </Form.Item>
  );
};
