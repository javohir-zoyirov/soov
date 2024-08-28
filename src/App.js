import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "./image/logo-center.png";
import phone from "./image/Phone call.png";
import tg from "./image/Telegram.png";
import video from "./image/v1.mp4";
import { useState } from "react";
import tom1 from "./image/tom1.png";
import tom2 from "./image/tom2.png";
import tom3 from "./image/tom3.png";
import tom4 from "./image/tom4.png";
import tom5 from "./image/tom5.png";
import tom6 from "./image/tom6.png";
import tom7 from "./image/tom7.png";
import tom8 from "./image/tom8.png";
import tom9 from "./image/tom9.png";
import tom10 from "./image/tom10.png";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import "./i18n";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("uz");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [order, setOrder] = useState([]);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const orderBtn = () => {
    setOrder((prev) => [
      ...prev,
      {
        name: name,
        phone: phoneNumber,
        location: location,
      },
    ]);
  };
  console.log(order,"order");
  return (
    <div style={{height:'100vh'}} className="container-fluid fluid d-flex mx-auto flex-column justify-content-between">
      <div className="d-flex align-items-center justify-content-between mt-4">
        <img
          style={{ width: "210px", height: "39px", objectFit: "cover" }}
          src={logo}
          alt="logo"
        />
        <div className="nav-item p-0 m-0 dropdown1 position-relative d-inline-block">
          <button className="btn border-0 dropbtn d-flex align-items-center">
            <img
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
              }}
              src={
                language === "uz"
                  ? "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
                  : language === "en"
                  ? "https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo="
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png"
              }
            />
            <span className="ms-2">{language.toUpperCase()}</span>
          </button>

          <div className="dropdown-content">
            <div className={language === "uz" ? "d-none" : ""}>
              <button
                className={
                  language === "uz" ? "d-none dropdown-item" : "dropdown-item"
                }
                type="button"
                onClick={() => {
                  setLanguage("uz");
                  changeLanguage("uz");
                }}
              >
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                  src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
                />
                <span className="ms-2">Uz</span>
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  setLanguage("en");
                  changeLanguage("en");
                }}
                className={
                  language === "en" ? "d-none dropdown-item" : "dropdown-item"
                }
                type="button"
              >
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                  src="https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo="
                />
                <span className="ms-2">En</span>
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  setLanguage("ru");
                  changeLanguage("ru");
                }}
                className={
                  language === "ru" ? "d-none dropdown-item" : "dropdown-item"
                }
                type="button"
              >
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png"
                />
                <span className="ms-2">Ru</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-md-6 div1 d-flex justify-content-center align-items-center">
          <div>
            <p style={{ color: "#0763C0" }} className="fw-bold mt-4 text1">
              {t("text1")}
            </p>
            <p className="fw-bold my-4 text2" style={{ color: "#0763C0" }}>
              {t("text2")}
            </p>
            <button
              style={{ background: "#0763C0" }}
              className="btn fw-bold text-white button"
              onClick={showModal}
            >
              {t("button")}
            </button>
            <p style={{ color: "#0763C0" }} className="fw-bold mt-4 ltr">
              18,9 {t("l")}
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 div2 d-flex align-items-center justify-content-center">
          <video
            className="rotated-video"
            style={{ width: "100%" }}
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="d-flex align-items-center flex-wrap gap-3 mb-3 tgPhone">
        <a
          href="tel:+99833 444-55-50"
          style={{ cursor: "pointer", textDecoration: "none" }}
          className="d-flex align-items-center gap-3"
        >
          <img
            style={{ width: "24px", height: "24px" }}
            src={phone}
            alt="phone"
          />
          <p style={{ color: "#0763C0" }} className="p-0 m-0 fw-bold phone">
            +99833 444-555-0
          </p>
        </a>
        <a
          href="https://t.me/soov_bot"
          style={{ cursor: "pointer", textDecoration: "none" }}
          className="d-flex align-items-center gap-3"
        >
          <img
            style={{ width: "24px", height: "24px" }}
            src={tg}
            alt="telegram"
          />
          <p style={{ color: "#0763C0" }} className="p-0 m-0 fw-bold phone">
            t.me/soov_bot
          </p>
        </a>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={350}
      >
        <div className="text-center d-flex gap-4 align-items-center flex-column h-100">
          <p
            style={{ color: "#0763C0", fontSize: "40px" }}
            className="fw-bold w-100 p-0 m-0 zayavka"
          >
            {t("modaltext1")}
          </p>
          <p
            style={{ color: "#333334", fontSize: "20px" }}
            className="w-100 p-0 m-0 inputtext"
          >
            {t("modaltext2")}
          </p>
          <input
            style={{
              background: "#D4E9FA",
              fontSize: "15px",
              color: "#333334",
            }}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("input1")}
            className="form-control rounded-5 border-0 inputtext"
          />
          <input
            style={{
              background: "#D4E9FA",
              fontSize: "15px",
              color: "#333334",
            }}
            type="number"
            disabled = {name === ""}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={t("input2")}
            className="form-control rounded-5 border-0 inputtext"
          />
          <input
            style={{
              background: "#D4E9FA",
              fontSize: "15px",
              color: "#333334",
            }}
            disabled = {phoneNumber === ""}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t("input3")}
            className="form-control rounded-5 border-0 inputtext"
          />
          <button
            style={{
              background: "#0763C0",
              color: "white",
              fontSize: "18px",
            }}
            disabled={name ==="" || phoneNumber==="" || location===""}
            className="fw-bold rounded-5 border-0 px-4 py-2 "
            onClick={()=> {orderBtn();handleOk()}}
          >
            {t("btn")}
          </button>
        </div>
      </Modal>
      <img className="tom1" src={tom1} alt="#" />
      <img className="tom2" src={tom2} alt="#" />
      <img className="tom3" src={tom3} alt="#" />
      <img className="tom4" src={tom4} alt="#" />
      <img className="tom5" src={tom5} alt="#" />
      <img className="tom6" src={tom6} alt="#" />
      <img className="tom7" src={tom7} alt="#" />
      <img className="tom8" src={tom8} alt="#" />
      <img className="tom9" src={tom9} alt="#" />
      <img className="tom10" src={tom10} alt="#" />
    </div>
  );
}

export default App;
