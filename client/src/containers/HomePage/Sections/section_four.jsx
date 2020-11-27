import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const fields = [
  {
    index: 1,
    subtext: "قانون الأُسرة",
    text: "زواج ، نفقة ، طلاق ، حضانة ، نسب ، ميراث ، وصيّة ، هبة ...",
    icon: "family-child.png",
  },
  {
    index: 2,
    subtext: "حـــــــــــــادث",
    text: "حادث مرور ، تسرّب مياه ، حريق ، حادث شغل…",
    icon: "alert-triangle.png",
  },
  {
    index: 3,
    subtext: "إستخلاص دين",
    text: "شيك ، كمبيالة ، إعتراف بدين ، دين تعاقدي …",
    icon: "user-cash-scale-unbalance-1.png",
  },
  {
    index: 4,
    subtext: "قــــانون جزائي",
    text: "تحيّل ، سرقة ، إعتداء جسدي ،  عنف ضد المرأة أو الطفل …",
    icon: "army-sword-fight.png",
  },
  {
    index: 5,
    subtext: "قــــــــــانون الشغل",
    text: "إبرام عقد شغل  ، طرد ، إستقالة، حادث شغل ، ضمان إجتماعي…",
    icon: "office-desk.png",
  },
  {
    index: 6,
    subtext: "قانون الأكرية",
    text: "كراء (سكني ، تجاري) أصل تجاري (بيع ، كراء ، رهن ) …",
    icon: "single-neutral-actions-home.png",
  },
  {
    index: 7,
    subtext: "قانون عقّاري",
    text: "بيع ، وعد بيع ، رهن، التسجيل ، ترسيم الملكية، تحيين ، تخصيص...",
    icon: "house-chimney-2.png",
  },
  {
    index: 8,
    subtext: "نزاعات الجوار",
    text: "إستحقاق الملكية ، حوز ، كف الشغب ، رفع المضرّة …",
    icon: "team-meeting-chat.png",
  },
  {
    index: 9,
    subtext: "قانون التأمين",
    text:
      "تأمين المسؤولية المدنية ، التأمين على الحياة ، التأمين على المرض ، التأمين البري / البحري…",
    icon: "task-list-add.png",
  },
  {
    index: 10,
    subtext: "القانون البنكي",
    text: "عقد قرض ، إعادة جدولة الديون ، حساب جاري، مسؤولية بنكيّة  ، عقلة …",
    icon: "credit-card-give.png",
  },
  {
    index: 11,
    subtext: "القانون الجبائي",
    text: "تصاريح ، مراجعة جبائية، توظيف إجباري  ، بطاقة إلزام…",
    icon: "cash-shield.png",
  },
  {
    index: 12,
    subtext: "قانون الشركات التجارية",
    text:
      "تأسيس شركة ، الترفيع في رأس المال  ، إنقاذ الشركات التي تمرّ بصعوبات إقتصادية …",
    icon: "office-outdoors.png",
  },
];

const section_four = () => {
  return (
    <div className="section-four">
      <div className="title">مجالات الإختصاص</div>
      <div className="subtitle">
        إستعن بمحامي مختصّ في أيّ مجال من المجالات القانونيّة التي تختارها{" "}
      </div>
      <div className="desc">
        <Row>
          {fields.map((e) => (
            <Col xs={24} md={12} lg={6} key={e.index}>
              <div className="desc_icon">
                <img src={require(`../../../assets/icons/${e.icon}`)} alt="" />
              </div>
              <div className="desc_text">{e.subtext}</div>
              <div className="desc_subtitle">{e.text}</div>
            </Col>
          ))}
        </Row>
      </div>
      <Link to="/sign-up">
        <button>التسجيل</button>
      </Link>
    </div>
  );
};

export default section_four;
