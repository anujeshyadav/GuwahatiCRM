import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Rect,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import logo from "../../../../assets/img/logo/logowithoutback.png";
import signature from "../../../../assets/img/logo/signature.png";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 30,
  },
  header: {
    fontSize: "8px",
    marginTop: "1px",
    marginBottom: "2px",
  },
  GSTIN: {
    fontSize: "10px",
    fontWeight: "bold",
    marginTop: "1px",
    marginBottom: "2px",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  customername: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: 70,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    padding: 5,
  },
  itemName: {
    flex: 1,
  },
  itemQuantity: {
    flex: 1,
  },
  itemPrice: {
    flex: 1,
  },
  total: {
    marginTop: 20,
    fontSize: 15,
  },
});

const POInVoice = ({
  UserChoice,
  invoiceData,
  CurrentWords,
  BilData,
  tableList,
  AllCharges,
}) => {
  console.log(invoiceData);
  console.log(BilData);
  console.log(CurrentWords);
  console.log(AllCharges);
  // console.log("poinvoice");
  // const { items, customerName, date, total, place_supply } = invoiceData;
  const curentDate = new Date();

  let day = curentDate.getDate();
  let month = curentDate.getMonth() + 1;
  let year = curentDate.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <View
              style={{
                flexDirection: "row",
                border: "1px solid black",
                height: "100px",
              }}>
              {UserChoice?.imagePosition &&
              UserChoice?.imagePosition == "Left" ? (
                <>
                  <Image
                    style={{ width: "200px", padding: "25px 10px" }}
                    src={logo}></Image>
                  <View style={{ padding: "10px" }}>
                    <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                      Guwahati CORPORATE MANAGEMENT SERVICES PVT. LTD.
                    </Text>

                    <Text
                      style={{
                        fontSize: "8px",
                        marginTop: "5px",
                        marginBottom: "2px",
                      }}>
                      ROOM 7,A-WING,Shree Datta Digambar CHS Ltd.
                    </Text>
                    <Text style={styles.header}>
                      Guru Datta Mandir Road ,Gaurishankarwadi No. 1
                    </Text>
                    <Text style={styles.header}>
                      Opp. Yashomandir,Pant Nagar ,Ghatkopar East,
                    </Text>
                    <Text style={styles.header}>
                      Mumbai,Maharastra, 400075. india
                    </Text>
                    <Text style={styles.GSTIN}>GSTIN: 27AAHCP2196E1ZB</Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={{ padding: "10px" }}>
                    <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                      Guwahati CORPORATE MANAGEMENT SERVICES PVT. LTD.
                    </Text>

                    <Text
                      style={{
                        fontSize: "8px",
                        marginTop: "5px",
                        marginBottom: "2px",
                      }}>
                      ROOM 7,A-WING,Shree Datta Digambar CHS Ltd.
                    </Text>
                    <Text style={styles.header}>
                      Guru Datta Mandir Road ,Gaurishankarwadi No. 1
                    </Text>
                    <Text style={styles.header}>
                      Opp. Yashomandir,Pant Nagar ,Ghatkopar East,
                    </Text>
                    <Text style={styles.header}>
                      Mumbai,Maharastra, 400075. india
                    </Text>
                    <Text style={styles.GSTIN}>GSTIN: 27AAHCP2196E1ZB</Text>
                  </View>
                  <Image
                    style={{ width: "200px", padding: "25px 10px" }}
                    src={logo}></Image>
                </>
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "70px",
              }}>
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "30%",
                    }}>
                    Receipt No.
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : {invoiceData?._id}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "30%",
                    }}>
                    Receipt Date.
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : {currentDate && currentDate}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "30%",
                    }}>
                    Receipt Time.
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : {currentDate && curentDate.toTimeString().split(" ")[0]}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "30%",
                    }}>
                    Term
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : Due on Receipt
                  </Text>
                </View>
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}>
                    Place of Supply
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : {invoiceData?.city}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#b4b6baad",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "20px",
              }}>
              <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}>
                <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}>
                  {UserChoice?.billTo == "Left" && (
                    <Text
                      style={{
                        fontSize: "10px",
                        fontWeight: "1000",
                        marginLeft: "5px",
                        width: "50%",
                      }}>
                      Bill To
                    </Text>
                  )}
                  {UserChoice?.shipto == "Left" && (
                    <Text
                      style={{
                        fontSize: "10px",
                        fontWeight: "1000",
                        marginLeft: "5px",
                        width: "50%",
                      }}>
                      Ship To
                    </Text>
                  )}
                </View>
              </View>

              <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  {UserChoice?.billTo == "right" && (
                    <Text
                      style={{
                        fontSize: "10px",
                        fontWeight: "1000",
                        marginLeft: "5px",
                        width: "50%",
                      }}>
                      Bill To
                    </Text>
                  )}
                  {UserChoice?.shipto == "right" && (
                    <Text
                      style={{
                        fontSize: "10px",
                        fontWeight: "1000",
                        marginLeft: "5px",
                        width: "50%",
                      }}>
                      Ship To
                    </Text>
                  )}
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "90px",
              }}>
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}>
                {UserChoice?.billTo == "Left" && (
                  <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                    <Text
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.adminDetail?.firstName} ${invoiceData?.adminDetail?.lastName} `}
                    </Text>{" "}
                    <Text
                      style={{
                        fontSize: "10px",
                        width: "45%",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.adminDetail?.currentAddress} `}
                      {`${invoiceData?.adminDetail?.State} `}
                    </Text>{" "}
                  </View>
                )}
                {UserChoice?.shipto == "Left" && (
                  <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                    <Text
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.fullName} `}
                    </Text>{" "}
                    <Text
                      style={{
                        fontSize: "10px",
                        width: "45%",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.address} `}
                      {`${invoiceData?.landMark} `}
                      Mobile No: {`${invoiceData?.MobileNo} `}
                    </Text>{" "}
                  </View>
                )}
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                {UserChoice?.billTo == "right" && (
                  <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                    <Text
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.adminDetail?.firstName} ${invoiceData?.adminDetail?.lastName} `}
                    </Text>{" "}
                    <Text
                      style={{
                        fontSize: "10px",
                        width: "45%",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.adminDetail?.currentAddress} `}
                      {`${invoiceData?.adminDetail?.State} `}
                    </Text>{" "}
                  </View>
                )}
                {UserChoice?.shipto == "right" && (
                  <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                    <Text
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.fullName} `}
                    </Text>{" "}
                    <Text
                      style={{
                        fontSize: "10px",
                        width: "45%",
                        fontWeight: "bold",
                      }}>
                      {`${invoiceData?.address} `}
                      {`${invoiceData?.landMark} `}
                      Mobile No: {`${invoiceData?.MobileNo} `}
                    </Text>{" "}
                  </View>
                )}
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "black",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "23px",
              }}>
              <View
                style={{
                  width: "3%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  #
                </Text>
              </View>
              {/* <View
                style={{
                  width: "10%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  PO Number
                </Text>
              </View> */}
              {/* <View
                style={{
                  width: "12%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "1000",
                    color: "white",

                    marginLeft: "5px",
                  }}>
                  PO No.
                </Text>
              </View> */}
              {/* <View
                style={{
                  width: "13%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  Client Code
                </Text>
              </View> */}
              {/* <View
                style={{
                  width: "13%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  State name
                </Text>
              </View> */}
              <View
                style={{
                  width: "15%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  Product Name
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  HSN / SAC
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  Qty
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  Price
                </Text>
              </View>
              <View
                style={{
                  // width: "15%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}>
                  Amount
                </Text>
              </View>
            </View>
            {invoiceData?.orderItems?.map((ele, i) => (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                  height: "33px",
                }}>
                <View
                  style={{
                    width: "3%",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    {i + 1}
                  </Text>
                </View>
                {/* <View
                  style={{
                    width: "12%",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "1000",

                      marginLeft: "5px",
                    }}>
                    {ele?.po_no && ele?.po_no ? <>{ele?.po_no}</> : null}
                  </Text>
                </View> */}
                {/* <View
                  style={{
                    width: "12%",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",

                      fontWeight: "1000",
                    }}>
                    supplier
                  </Text>
                </View> */}
                {/* <View
                  style={{
                    width: "13%",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",

                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    statetitle
                  </Text>
                </View> */}
                <View
                  style={{
                    width: "15%",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",

                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    {ele?.product?.Product_Title}
                  </Text>
                </View>
                <View
                  style={{
                    width: "13%",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",

                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    {ele?.product?.HSN_Code}
                  </Text>
                </View>
                <View
                  style={{
                    width: "12%",
                    marginRight: "2px",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    {ele?.qty}
                  </Text>
                </View>
                <View
                  style={{
                    width: "12%",
                    marginRight: "2px",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",

                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    {ele?.product?.Product_MRP}
                  </Text>
                </View>
                <View
                  style={{
                    //   width: "12%",
                    marginRight: "2px",
                    padding: "5px 2px",
                  }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      justifyContent: "flex-end",
                      fontWeight: "1000",
                      marginLeft: "5px",
                    }}>
                    {ele?.qty * ele?.product?.Product_MRP}
                  </Text>
                </View>
              </View>
            ))}

            <View
              style={{
                flexDirection: "row",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderBottom: "1px solid black",
              }}>
              <View
                style={{
                  width: "55%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}>
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}>
                    Total In Words
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "12px",
                      width: "95%",
                      fontWeight: "bold",
                    }}>
                    {CurrentWords}
                  </Text>{" "}
                </View>
                <View style={{ margingTop: "50px" }}>
                  <Text style={{ fontSize: "8px", marginTop: "15px" }}>
                    Pay To: Jupitech Management Pvt Ltd.
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    Bank: Kotak Mahindra
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    A/c No.: 54623465
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: Kotak0001251
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: MAROLI , ANDHERI EAST
                  </Text>
                </View>
                <View
                  style={{
                    margingTop: "50px",
                    marginBottom: "40px",
                  }}>
                  <Text style={{ fontSize: "10px", marginTop: "15px" }}>
                    Terms and Conditions
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    1. Paid Amount/Payment are not refundable in any case.
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    2. Pay Payment under 30 days.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottom: "1px solid black",
                  width: "45%",
                  height: "250px",
                }}>
                <View
                  style={{ height: "180px", borderBottom: "1px solid black" }}>
                  <View
                    style={{
                      padding: "10px",

                      height: "130px",
                    }}>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        Discount :
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        {AllCharges?.discount_value}.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}>
                        Sub Total
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}>
                        {AllCharges?.subtotal}1312
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          // width: "70%",
                          marginBottom: "6px",
                        }}>
                        CGST({AllCharges?.cgst}.00%)
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        {AllCharges?.totcgst}560
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        SGST( {AllCharges?.sgst}.00%)
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        {AllCharges?.totsgst}1421
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        Courier Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        {AllCharges?.delivery_charges}.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        Other Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",

                          marginBottom: "6px",
                        }}>
                        {AllCharges?.other_charges}.00
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}>
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}>
                        Grand Total :
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}>
                        {invoiceData?.grandTotal}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{ padding: "3px 3px ", height: "180px" }}>
                    <Text style={{ fontSize: "11px" }}> For</Text>
                    <Text
                      style={{
                        fontSize: "8px",
                        marginTop: "8px",
                        marginBottom: "8px",
                      }}>
                      {" "}
                      JUPITECH CORPORATE MANAGEMENT SERVICES PVT. LTD.
                    </Text>
                    <View>
                      <Image
                        style={{ height: "50px", marginTop: "15px" }}
                        src={signature}
                        width="200px"
                        height="200px"></Image>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: "2px",
                        marginTop: "20px",
                        justifyContent: "center",
                      }}>
                      <Text style={{ fontSize: "10px" }}>
                        Authorized Signature
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default POInVoice;
