import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Button } from "antd";
import { Text, Email, Number } from "../../components/Inputs";
import UserContext from "../../context/userContext";

const Update = ({ user = {} }) => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const { setUserData } = useContext(UserContext);
  // const [values, setValues] = useState({
  //   name: user.name,
  //   email: user.email,
  //   phone: user.phone,
  //   address: user.address,
  // });
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };
  const onFinish = async (values) => {
    // try {
    //   const newUser = await axios.put("/update", {
    //     name: values.name,
    //     email: values.email,
    //     phone: values.phone,
    //     address: values.address,
    //   });
    //   setUserData({
    //     user: newUser.data.user,
    //   });
    // } catch (err) {
    //   console.log(err.response.data.msg)
    // }
    console.log(values)
  };

  return (
    <div className="registration">
      <h1>تعديل الحساب</h1>
      <Form
        className="Container"
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        initialValues={{
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
        }}
      >
        <div className="Right-Signup">
          <Email label="البريد الالكتروني" value={user.email} name="email" />
          <Number label="رقم الهاتف " value={user.phone} name="phone" />
          <Form.Item>
            <Button htmlType="submit">احفظ</Button>
          </Form.Item>
        </div>
        <div className="Left-Signup">
          <Text label="الاسم الكامل" value={user.name} name="name" />
          <Text label="مقر السكنى" value={user.address} name="address" />
        </div>
      </Form>
    </div>
  );
};

export default Update;
