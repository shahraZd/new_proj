import React, { useState } from "react";
import { List } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [list] = useState([
    {
      title: "إستشارة مباشرة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,
      type: "video",
    },
    {
      title: "إستشارة هاتفيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: false,
      type: "phone",
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,
      type: "text",
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,  type: "text",
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,  type: "text",
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: false,
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: false,
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,  type: "text",
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: false,
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,
    },
    {
      title: "إستشارة كتابيّة",
      desc: "استشارة بخصوص حقوق ملكية فكرية",
      date: "20.10.2020",
      time: "13h:00",
      state: true,
    },
  ]);
  return (
    <div className="dashboard">
      <div className="action-btn">
        <div className="consulting">
          <div className="icon">
            <img
              src={require("../../assets/icons/keyboard.png")}
              alt="keyboard istichara"
            />
          </div>
          <div className="title">إستشارة كتابيّة</div>
          <Link to="/written-advice" className="btn">
            استشر الان
          </Link>
        </div>
        <div className="consulting">
          <div className="icon">
            <img
              src={require("../../assets/icons/phone-question.png")}
              alt="keyboard istichara"
            />
          </div>
          <div className="title">استشارة صوتية</div>
          <Link to="/book" className="btn">
            حجز موعد مجاني
          </Link>
        </div>
      </div>
      <div className="display-list">
        <div className="title">قائمة الاستشارات</div>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Link
                  to={"/written-advice"}
                  key="edit"
                  className={item.state ? "edit" : "edit end-icon"}
                  style={item.type === "text" ? { opacity: 1 } : { opacity: 0 }}
                >
                  <EditOutlined />
                </Link>,
              ]}
            >
              <Link
                to={
                  item.type === "video"
                    ? "/video-not-ready"
                    : item.type === "phone"
                    ? "/phone-not-ready"
                    : "text-chat"
                }
                className={item.state ? "list" : "list end"}
              >
                <div className="list-content">
                  <div className="list-content_title">{item.title}</div>
                  <div className="list-content_desc">{item.desc}</div>
                </div>
                <div className="list-content date">
                  <div className="list-content_title">التاريخ</div>
                  <div className="list-content_desc">{item.date}</div>
                </div>
                <div className="list-content date">
                  <div className="list-content_title">الحالة</div>
                  <div className="list-content_desc state">
                    {item.state ? "مفتوحة" : "منتهية"}
                  </div>
                </div>
              </Link>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Dashboard;
