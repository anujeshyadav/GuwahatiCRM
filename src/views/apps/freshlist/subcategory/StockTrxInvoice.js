import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoiceTemplate from "./InvoiceTemplate";
import ReactPDF from "@react-pdf/renderer";
import POInVoice from "./StockTrxPOinvoice";
import axiosConfig from "../../../../axiosConfig";

const StockTrxInvoice = (props) => {
  console.log(props);
  const [Printview, setPrintview] = useState({});
  const [AllCharges, setAllCharges] = useState({});
  const [UserChoice, setUserChoice] = useState({});
  const [details, setDetails] = useState([]);

  useEffect(() => {
    console.log(props);

    let userchoice = JSON.parse(localStorage.getItem("billUI"));
    setUserChoice(userchoice);
    if (props?.AddedBill?.length > 0) {
      // console.log("props", props);
      // console.log("Multibil here", props?.AllbillMerged);
      setDetails(props?.AllbillMerged);
      setAllCharges(props?.Applied_Charges);
    } else {
      // const formdata = new FormData();
      // formdata.append("order_id", props.PrintData.order_id);
      // axiosConfig
      //   .post(`/order_detail`, formdata)
      //   .then((response) => {
      //     console.log(response.data.data);
      //     setDetails(response.data.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }

    if (props?.PrintData) {
      console.log(props?.PrintData);
      setPrintview(props?.PrintData);
    }
  }, []);

  return (
    <div>
      {/* {/ Use PDFViewer to preview the generated PDF /} */}
      <PDFViewer width="1000" height="800">
        <POInVoice
          UserChoice={UserChoice}
          invoiceData={Printview}
          CurrentWords={props.wordsNumber}
          BilData={props}
          tableList={details}
          AllCharges={AllCharges}
          fileName="invoice.pdf"
        />
      </PDFViewer>
    </div>
  );
};

export default StockTrxInvoice;