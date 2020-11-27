import React, { useState } from "react";
import { Form, Input, message, Button, Select, Upload } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const WrittenAdvice = () => {
  const [exist] = useState(false);
  const history = useHistory();
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const submitRequest = () => {
    // message.success("تمّ إضافة طلب إستشارة جديد");
    history.push("/checkout")
  };
  return (
    <div className="written-advice">
      <div className="head">
        <div className="title">{exist ? "تعديل استشارة" : "استشارة جديدة"}</div>
        <div className="desc">
          {exist ? "استشارة بخصوص حقوق ملكية فكرية" : ""}
        </div>
      </div>
      <Form name="nest-messages" className="body" onFinish={submitRequest}>
        <div className="form">
          <div className="section-right">
            <Form.Item label="موضوع الاستشارة" rules={[{ required: true }]}>
              <Input placeholder="استشارة بخصوص حقوق ملكية فكرية" />
            </Form.Item>
            <Form.Item label="تصنيف الاستشارة">
              <Select>
                <Select.Option value=" استشارة بخصوص حقوق ملكية فكرية ">
                  استشارة بخصوص حقوق ملكية فكرية
                </Select.Option>
              </Select>
            </Form.Item>
            <Upload {...props}>
              <Button icon={<PaperClipOutlined />}>رفع ملف مرفق</Button>
            </Upload>
          </div>
          <div className="section-left">
            <Form.Item label="تفاصيل الاستشارة">
              <Input.TextArea placeholder="استشارة بخصوص حقوق ملكية فكرية" />
            </Form.Item>
          </div>
        </div>

        <Form.Item>
          <Button htmlType="submit" className="submit-button">
            ارسل طلب الاستشارة
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default WrittenAdvice;
