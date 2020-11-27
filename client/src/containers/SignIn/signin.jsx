import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Button } from "antd";
import { Email, Password } from "../../components/Inputs";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import ErrorNotice from "../../components/ErrorNotice";
const SignIn = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const onFinish = async (values) => {
    try {
      setError(undefined)
      const loginRes = await axios.post("/login", {
        email: values.email,
        password: values.password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      loginRes.data.user.role==="USER"?
      history.push("/dashboard"):
      history.push("/dashboardPro")

    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="login">
      <h1>الدخول</h1>
      {error && (
        <div className="error-notice">
          <ErrorNotice err={error} />
        </div>
      )}
      <Form
        className="container"
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
            <Email label="البريد الالكتروني" name="email" />
            <Password label="كلمة السر" name="password" />

            <Form.Item>
              <Button htmlType="submit" className="button-blue">
                الدخول
              </Button>
            </Form.Item>
            <Link to="/sign-up" className="Connexion">
              التسجيل
            </Link>
      </Form>
    </div>
  );
};

export default SignIn;
