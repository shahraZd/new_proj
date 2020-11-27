import React from "react";
import Paypal from "../../assets/images/paypal.png";
import { Menu, Dropdown, Button, message } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Mounth = (
  <Menu>
    <Menu.Item key="1">جانفي</Menu.Item>
    <Menu.Item key="2">فيفري</Menu.Item>
    <Menu.Item key="3">مارس</Menu.Item>
    <Menu.Item key="4">أفريل</Menu.Item>
    <Menu.Item key="5">ماي</Menu.Item>
    <Menu.Item key="6">جوان</Menu.Item>
    <Menu.Item key="7">جويلية</Menu.Item>
    <Menu.Item key="8">أوت</Menu.Item>
    <Menu.Item key="9">سبتمبر</Menu.Item>
    <Menu.Item key="10">أكتوبر</Menu.Item>
    <Menu.Item key="11">نوفمبر</Menu.Item>
    <Menu.Item key="12">ديسمبر</Menu.Item>
  </Menu>
);

const Year = (
  <Menu>
    <Menu.Item key="1">2020</Menu.Item>
    <Menu.Item key="2">2021</Menu.Item>
    <Menu.Item key="3">2022</Menu.Item>
    <Menu.Item key="4">2023</Menu.Item>
    <Menu.Item key="5">2024</Menu.Item>
    <Menu.Item key="6">2025</Menu.Item>
    <Menu.Item key="7">2026</Menu.Item>
    <Menu.Item key="8">2027</Menu.Item>
    <Menu.Item key="9">2028</Menu.Item>
    <Menu.Item key="10">2029</Menu.Item>
    <Menu.Item key="10">2030</Menu.Item>
  </Menu>
);
const packs = [
  {
    id: 1,
    title: "إستشارة",
    price: "29TND",
  },
  {
    id: 2,
    title: "عرض : 3 إستشارات",
    price: "69TND",
  },
  {
    id: 3,
    title: "عرض : بلا حدود",
    price: "99TND/M",
  },
];
const Payement = () => {
  const [isChecked, setIsChecked] = useState(0);
  const history = useHistory();
  const onClick = () => {
    message.success("تمّ إضافة طلب إستشارة جديد");
    history.push("/dashboard");
  };
  return (
    <div className="Payement">
      <div className="Left">
        <span className="title"> اختر خطة الاشتراك المناسبة لك</span>

        <div className="pricing">
          {packs.map((e) => (
            <div onClick={()=>setIsChecked(e.id)} className={isChecked===e.id?"card-type checked":"card-type"} key={e.id}>
              <CheckOutlined />
              <span className="title">{e.title}</span>
              <span className="price">{e.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="Right">
        <span className="title">اختر طريقة الدفع المناسبة لك</span>
        <span className="under-title">
          يمكنك الدفع عبر باي بال او عبر استعمال بطاقتك البنكية
        </span>
        <div className="payement-logo">
          <img src={Paypal} alt="Paypal" />
        </div>
        <div className="payement-information">
          <div className="up">
            <span className="Date">
              <span className="title">تاريخ الصلوحية </span>
              <br />
              <span className="SetDate">
                <Dropdown overlay={Mounth}>
                  <Button>
                    Mounth &nbsp;&nbsp; <DownOutlined />
                  </Button>
                </Dropdown>
                |
                <Dropdown overlay={Year}>
                  <Button>
                    Year &nbsp;&nbsp; <DownOutlined />
                  </Button>
                </Dropdown>
              </span>
            </span>
            <span className="Card-number">
              <span>رقم البطاقة</span> <br />
              <input type="text" />
            </span>
          </div>

          <div className="down">
            <span className="cvc">
              <span>CVC</span> <br />
              <input type="text" />
            </span>
            <span className="Name-card">
              <span>اسم حامل البطاقة</span> <br />
              <input type="text" />
            </span>
          </div>
        </div>
        <button className="pay" onClick={onClick}>
          Finaliser
        </button>
      </div>
    </div>
  );
};

export default Payement;
