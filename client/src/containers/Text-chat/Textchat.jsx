import React,{useState} from "react";
import User from "../../assets/images/User.jpg";
import chat from "../../assets/images/chat.PNG";
import { Link } from "react-router-dom";
import ReportModal from "../../components/ReportModal";

const Textchat = () => {
  const [reportVisible,setReportVisible]=useState(false)
  return (
    <div className="Text-chat">
      <div className="Table">
        <table className="az">
          <tbody>
            <tr>
              <th>إستشارة كتابيّة</th>
            </tr>
            <tr>
              <td>استشارة بخصوص حقوق ملكية فكرية</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th> التاريخ</th>
            </tr>
            <tr>
              <td> 20.10.2020</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th> الحالة</th>
            </tr>
            <tr>
              <td> مفتوحة</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <div className="consultant">
                <img src={User} alt="Consultant" />
                <div>
                  <th> المستشار القانوني</th>
                  <tr> ابراهيم رمضان</tr>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
        <Link to="/dashboard">
          <button className="button-blue">أغلق الاستشارة</button>
        </Link>
        <Link to="/written-advice">
          <button className="button-blue">تعديل الاستشارة</button>
        </Link>
        <button className="Connexion " onClick={()=>setReportVisible(true)}>مشكلة في الاستشارة ؟</button>
      </div>
      <div className="chat">
        <img src={chat} alt="chat" />
      </div>
      <ReportModal visible={reportVisible} handleCancel={()=>{setReportVisible(false)}} handleOk={()=>{setReportVisible(false)}}/>
    </div>
  );
};

export default Textchat;
