import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Checkbox, Button } from "antd";
import { Text, Email, Password, Number } from "../../components/Inputs";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/ErrorNotice";

const Signup = () => {
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
  const history = useHistory();
  const [error, setError] = useState();
  const onFinish = async (values) => {
    try {
      setError(undefined)
      const newUser = {
        email: values.email,
        password: values.password,
        name: values.name,
        phone: values.phone,
        address: values.address,
      };
      await axios.post("/users/register", newUser);
      const loginRes = await axios.post("/login", {
        email: values.email,
        password: values.password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/dashboard");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="registration">
      <h1>تسجيل حساب جديد</h1>
      {error && (
        <div className="error-notice">
          <ErrorNotice err={error} />
        </div>
      )}
      <Form
        className="Container"
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <div className="Right-Signup">
          <Email label="البريد الالكتروني" name="email" />
          <Password label="كلمة السر" name="password" />
          <Number label="رقم الهاتف " name="phone" />
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : setError("الرجاء قبول الشروط العامة للإستعمال"),
              },
            ]}
          >
            <Checkbox>
              لقد قرأت و قبلت <a href="/">الشروط العامة للاستعمال</a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">التسجيل</Button>
          </Form.Item>
        </div>
        <div className="Left-Signup">
          <Text label="الاسم الكامل" name="name" />
          <Text label="مقر السكنى" name="address" />
        </div>
      </Form>
    </div>
  );
};

export default Signup;
