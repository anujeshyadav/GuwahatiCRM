import React, { useEffect, useState } from "react";
import UserContext from "./Context";
import {
  CreateAccountView,
  CurrencyConvertor,
  ViewCompanyDetails,
} from "../ApiEndPoint/ApiCalling";
import xmlJs from "xml-js";

const State = (props) => {
  const [crateUserXmlView, setcreateUserXmlView] = useState({});
  const [CompanyDetails, setCompanyDetails] = useState({});
  const [Mode, setMode] = useState("semi-dark");

  const [PartsCatalougueCart, setPartsCatalougueCart] = useState([]);
  const [UserInformatio, setUserInformatio] = useState({});
  const [PartsCatloguelength, setPartsCatloguelength] = useState(0);
  const [Currencyconvert, setCurrencyconvert] = useState("");
  const [myCustomColor, SetmyCustomColor] = useState("");
  const [PresentCurrency, setPresentCurrency] = useState("USD_$");
  const [Userlanguage, setUserlanguage] = useState(navigator.language);

  let user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    let myCustomColor = localStorage.getItem("UserDefinedcoler");
    SetmyCustomColor(myCustomColor);
  }, [myCustomColor]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));
    console.log(UserInformatio);
    const fetchData = async () => {
      try {
        await ViewCompanyDetails(user?._id)
          .then((res) => {
            console.log(res?.CompanyDetail);
            setCompanyDetails(res?.CompanyDetail);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [JSON.stringify(user)]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));

    setUserlanguage(user?.locale);
    setUserInformatio(user);
    // console.log(user?.currency?.split("_")[0]);
    let currency = user?.currency;

    if (currency == undefined) {
      currency = "USD_$";
    }
    CurrencyConvertor(currency?.split("_")[0])
      .then((res) => {
        let fromRate = res?.rates[PresentCurrency.split("_")[0]];
        let toRate = res?.rates[currency?.split("_")[0]];
        const value = toRate / fromRate;
        setCurrencyconvert(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.currency]);

  return (
    <UserContext.Provider
      value={{
        CompanyDetails,
        setCompanyDetails,
        myCustomColor,
        SetmyCustomColor,
        Currencyconvert,
        Userlanguage,
        setUserlanguage,
        setCurrencyconvert,
        setPresentCurrency,
        PresentCurrency,
        crateUserXmlView,
        setMode,
        Mode,
        setPartsCatalougueCart,
        PartsCatalougueCart,
        setUserInformatio,
        setPartsCatloguelength,
        PartsCatloguelength,
        UserInformatio,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
