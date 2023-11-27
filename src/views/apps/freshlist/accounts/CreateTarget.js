// import React, { useEffect, useState, useContext } from "react";
// import xmlJs from "xml-js";
// import Multiselect from "multiselect-react-dropdown";
// import {
//   Card,
//   CardBody,
//   Col,
//   Form,
//   Row,
//   Input,
//   Label,
//   Button,
//   FormGroup,
//   CustomInput,
//   Badge,
// } from "reactstrap";
// import { history } from "../../../../history";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { Country, State, City } from "country-state-city";
// import Select from "react-select";
// import moment from "moment-timezone";
// import { Route } from "react-router-dom";

// import swal from "sweetalert";
// import "../../../../../src/layouts/assets/scss/pages/users.scss";

// import {
//   CreateAccountSave,
//   CreateAccountView,
//   CreateTargetXmlView,
// } from "../../../../ApiEndPoint/ApiCalling";
// import { BiEnvelope } from "react-icons/bi";
// import { FcPhoneAndroid } from "react-icons/fc";
// import { BsWhatsapp } from "react-icons/bs";
// import "../../../../assets/scss/pages/users.scss";
// import UserContext from "../../../../context/Context";
// import { CloudLightning } from "react-feather";
// import { FaPlus } from "react-icons/fa";

// const CreateTarget = () => {
//   const [CreatAccountView, setCreatAccountView] = useState([]);
//   const [Countries, setCountry] = useState({});
//   const [States, setState] = useState({});
//   const [Cities, setCities] = useState({});
//   const [formData, setFormData] = useState({});
//   const [dropdownValue, setdropdownValue] = useState({});
//   const [index, setindex] = useState("");
//   const [error, setError] = useState("");
//   const [permissions, setpermissions] = useState({});

//   const Context = useContext(UserContext);

//   const handleInputChange = (e, type, i) => {
//     const { name, value, checked } = e.target;
//     setindex(i);
//     if (type == "checkbox") {
//       if (checked) {
//         setFormData({
//           ...formData,
//           [name]: checked,
//         });
//       } else {
//         setFormData({
//           ...formData,
//           [name]: checked,
//         });
//       }
//     } else {
//       if (type == "number") {
//         if (/^\d{0,10}$/.test(value)) {
//           setFormData({
//             ...formData,
//             [name]: value,
//           });
//           setError("");
//         } else {
//           setError(
//             "Please enter a valid number with a maximum length of 10 digits"
//           );
//         }
//       } else {
//         if (value.length <= 10) {
//           setFormData({
//             ...formData,
//             [name]: value,
//           });
//           // console.log(value);
//           setError("");
//         } else {
//           setFormData({
//             ...formData,
//             [name]: value,
//           });
//           // setError("Input length exceeds the maximum of 10 characters");
//         }
//       }
//     }
//   };
//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);
//   useEffect(() => {
//     CreateTargetXmlView()
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     CreateAccountView()
//       .then((res) => {
//         const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
//         // console.log(JSON.parse(jsonData)?.CreateUser?.input);

//         setCreatAccountView(JSON.parse(jsonData)?.CreateUser?.input);

//         setdropdownValue(JSON.parse(jsonData));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     if (error) {
//       swal("Error occured while Entering Details");
//     } else {
//       CreateAccountSave(formData)
//         .then((res) => {
//           setFormData({});
//           if (res.status) {
//             window.location.reload();
//             swal("User Created Successfully");
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <div>
//       <div>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 className="float-left">Create Target</h1>
//             </Col>
//             <Col>
//               <div className="float-right">
//                 <Route
//                   render={({ history }) => (
//                     <Button
//                       style={{ cursor: "pointer" }}
//                       className="float-right mr-1"
//                       color="primary"
//                       onClick={() =>
//                         history.push("/app/SoftNumen/TargetCreationList")
//                       }
//                     >
//                       {" "}
//                       Back
//                       {/* <FaPlus size={15} /> Create User */}
//                     </Button>
//                   )}
//                 />
//               </div>
//             </Col>
//           </Row>
//           {/* <hr /> */}

//           <CardBody>
//             <Form className="m-1" onSubmit={submitHandler}>
//               <Row className="mb-2">
//                 {/* <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>
//                       {
//                         dropdownValue.CreateAccount?.MyDropdown?.dropdown?.label
//                           ?._text
//                       }
//                     </Label>
//                     <CustomInput
//                       required
//                       type="select"
//                       name={
//                         dropdownValue.CreateAccount?.MyDropdown?.dropdown?.name
//                           ?._text
//                       }
//                       value={
//                         formData[
//                           dropdownValue.CreateAccount?.MyDropdown?.dropdown
//                             ?.name?._text
//                         ]
//                       }
//                       onChange={handleInputChange}
//                     >
//                       <option value="">--Select Role--</option>
//                       {dropdownValue?.CreateAccount?.MyDropdown?.dropdown?.option.map(
//                         (option, index) => (
//                           <option
//                             key={index}
//                             value={option?._attributes?.value}
//                           >
//                             {option?._attributes?.value}
//                           </option>
//                         )
//                       )}
//                     </CustomInput>
//                   </FormGroup>
//                 </Col> */}

//                 {CreatAccountView &&
//                   CreatAccountView?.map((ele, i) => {
//                     {
//                       /* console.log(Context?.UserInformatio?.dateFormat); */
//                     }
//                     // console.log(Countries);
//                     // console.log(States);
//                     const convertedTime = moment("2022-08-05T12:00:00")
//                       .tz("America/New_York")
//                       .format("D MMM, YYYY HH:mm");

//                     if (!!ele?.phoneinput) {
//                       return (
//                         <>
//                           <Col key={i} lg="4" md="4" sm="12">
//                             <FormGroup>
//                               <Label>{ele?.label?._text}</Label>
//                               <PhoneInput
//                                 inputClass="myphoneinput"
//                                 country={"us"}
//                                 onKeyDown={(e) => {
//                                   if (
//                                     ele?.type?._attributes?.type == "number"
//                                   ) {
//                                     ["e", "E", "+", "-"].includes(e.key) &&
//                                       e.preventDefault();
//                                   }
//                                 }}
//                                 countryCodeEditable={false}
//                                 name={ele?.name?._text}
//                                 value={formData[ele?.name?._text]}
//                                 onChange={(phone) => {
//                                   setFormData({
//                                     ...formData,
//                                     [ele?.name?._text]: phone,
//                                   });
//                                 }}
//                               />
//                               {index === i ? (
//                                 <>
//                                   {error && (
//                                     <span style={{ color: "red" }}>
//                                       {error}
//                                     </span>
//                                   )}
//                                 </>
//                               ) : (
//                                 <></>
//                               )}
//                             </FormGroup>
//                           </Col>
//                         </>
//                       );
//                     } else if (!!ele?.library) {
//                       if (ele?.label._text?.includes("ountry")) {
//                         console.log(ele);
//                         return (
//                           <Col key={i} lg="4" md="4" sm="12">
//                             <FormGroup>
//                               <Label>{ele?.label?._text}</Label>
//                               <Select
//                                 inputClass="countryclass"
//                                 className="countryclassnw"
//                                 options={Country.getAllCountries()}
//                                 getOptionLabel={(options) => {
//                                   return options["name"];
//                                 }}
//                                 getOptionValue={(options) => {
//                                   return options["name"];
//                                 }}
//                                 value={Countries}
//                                 onChange={(country) => {
//                                   setCountry(country);
//                                   setFormData({
//                                     ...formData,
//                                     ["Country"]: country?.name,
//                                   });
//                                 }}
//                               />
//                               {index === i ? (
//                                 <>
//                                   {error && (
//                                     <span style={{ color: "red" }}>
//                                       {error}
//                                     </span>
//                                   )}
//                                 </>
//                               ) : (
//                                 <></>
//                               )}
//                             </FormGroup>
//                           </Col>
//                         );
//                       } else if (ele?.label._text?.includes("tate")) {
//                         return (
//                           <Col key={i} lg="4" md="4" sm="12">
//                             <FormGroup>
//                               <Label>{ele?.label?._text}</Label>
//                               <Select
//                                 options={State?.getStatesOfCountry(
//                                   Countries?.isoCode
//                                 )}
//                                 getOptionLabel={(options) => {
//                                   return options["name"];
//                                 }}
//                                 getOptionValue={(options) => {
//                                   return options["name"];
//                                 }}
//                                 value={States}
//                                 onChange={(State) => {
//                                   setState(State);
//                                   setFormData({
//                                     ...formData,
//                                     ["State"]: State?.name,
//                                   });
//                                 }}
//                               />
//                               {index === i ? (
//                                 <>
//                                   {error && (
//                                     <span style={{ color: "red" }}>
//                                       {error}
//                                     </span>
//                                   )}
//                                 </>
//                               ) : (
//                                 <></>
//                               )}
//                             </FormGroup>
//                           </Col>
//                         );
//                       } else if (ele?.label._text?.includes("ity")) {
//                         return (
//                           <Col key={i} lg="4" md="4" sm="12">
//                             <FormGroup>
//                               <Label>{ele?.label?._text}</Label>
//                               <Select
//                                 options={City?.getCitiesOfState(
//                                   States?.countryCode,
//                                   States?.isoCode
//                                 )}
//                                 getOptionLabel={(options) => {
//                                   return options["name"];
//                                 }}
//                                 getOptionValue={(options) => {
//                                   return options["name"];
//                                 }}
//                                 value={Cities}
//                                 onChange={(City) => {
//                                   setCities(City);
//                                   setFormData({
//                                     ...formData,
//                                     ["City"]: City?.name,
//                                   });
//                                 }}
//                               />
//                               {index === i ? (
//                                 <>
//                                   {error && (
//                                     <span style={{ color: "red" }}>
//                                       {error}
//                                     </span>
//                                   )}
//                                 </>
//                               ) : (
//                                 <></>
//                               )}
//                             </FormGroup>
//                           </Col>
//                         );
//                       } else {
//                         return (
//                           <>
//                             {ele?.type?._attributes?.type == "date" ? (
//                               <>
//                                 <Col key={i} lg="4" md="4" sm="12">
//                                   <FormGroup key={i}>
//                                     <Label>{ele?.label?._text}</Label>

//                                     <Input
//                                       onKeyDown={(e) => {
//                                         if (
//                                           ele?.type?._attributes?.type ==
//                                           "number"
//                                         ) {
//                                           ["e", "E", "+", "-"].includes(
//                                             e.key
//                                           ) && e.preventDefault();
//                                         }
//                                       }}
//                                       type={ele?.type?._attributes?.type}
//                                       placeholder={ele?.placeholder?._text}
//                                       name={ele?.name?._text}
//                                       dateFormat={
//                                         Context?.UserInformatio?.dateFormat
//                                       }
//                                       value={
//                                         moment(formData[ele?.name?._text])
//                                           .tz(Context?.UserInformatio?.timeZone)
//                                           .format(
//                                             Context?.UserInformatio?.dateFormat
//                                           )
//                                         // formData[ele?.name?._text]
//                                       }
//                                       // value={formData[ele?.name?._text]}
//                                       onChange={(e) =>
//                                         handleInputChange(
//                                           e,
//                                           ele?.type?._attributes?.type,
//                                           i
//                                         )
//                                       }
//                                     />
//                                     {index === i ? (
//                                       <>
//                                         {error && (
//                                           <span style={{ color: "red" }}>
//                                             {error}
//                                           </span>
//                                         )}
//                                       </>
//                                     ) : (
//                                       <></>
//                                     )}
//                                   </FormGroup>
//                                 </Col>
//                               </>
//                             ) : (
//                               <>
//                                 <Col key={i} lg="4" md="4" sm="12">
//                                   <FormGroup key={i}>
//                                     <Label>{ele?.label?._text}</Label>

//                                     <Input
//                                       onKeyDown={(e) => {
//                                         if (
//                                           ele?.type?._attributes?.type ==
//                                           "number"
//                                         ) {
//                                           ["e", "E", "+", "-"].includes(
//                                             e.key
//                                           ) && e.preventDefault();
//                                         }
//                                       }}
//                                       type={ele?.type?._attributes?.type}
//                                       placeholder={ele?.placeholder?._text}
//                                       name={ele?.name?._text}
//                                       value={formData[ele?.name?._text]}
//                                       onChange={(e) =>
//                                         handleInputChange(
//                                           e,
//                                           ele?.type?._attributes?.type,
//                                           i
//                                         )
//                                       }
//                                     />
//                                     {index === i ? (
//                                       <>
//                                         {error && (
//                                           <span style={{ color: "red" }}>
//                                             {error}
//                                           </span>
//                                         )}
//                                       </>
//                                     ) : (
//                                       <></>
//                                     )}
//                                   </FormGroup>
//                                 </Col>
//                               </>
//                             )}
//                           </>
//                         );
//                       }
//                     } else {
//                       return (
//                         <>
//                           {!!ele?.number ? (
//                             <>
//                               <Col key={i} lg="4" md="4" sm="12">
//                                 <FormGroup key={i}>
//                                   <Label>{ele?.label?._text}</Label>

//                                   <Input
//                                     onWheel={(e) => {
//                                       e.preventDefault(); // Prevent the mouse wheel scroll event
//                                     }}
//                                     onKeyDown={(e) => {
//                                       if (
//                                         ele?.type?._attributes?.type == "number"
//                                       ) {
//                                         ["e", "E", "+", "-"].includes(e.key) &&
//                                           e.preventDefault();
//                                       }
//                                     }}
//                                     type={ele?.type?._attributes?.type}
//                                     placeholder={ele?.placeholder?._text}
//                                     name={ele?.name?._text}
//                                     value={formData[ele?.name?._text]}
//                                     onChange={(e) =>
//                                       handleInputChange(
//                                         e,
//                                         ele?.type?._attributes?.type,
//                                         i
//                                       )
//                                     }
//                                   />
//                                   {index === i ? (
//                                     <>
//                                       {error && (
//                                         <span style={{ color: "red" }}>
//                                           {error}
//                                         </span>
//                                       )}
//                                     </>
//                                   ) : (
//                                     <></>
//                                   )}
//                                 </FormGroup>
//                               </Col>
//                             </>
//                           ) : (
//                             <Col key={i} lg="4" md="4" sm="12">
//                               <FormGroup key={i}>
//                                 <Label>{ele?.label?._text}</Label>

//                                 <Input
//                                   onKeyDown={(e) => {
//                                     if (
//                                       ele?.type?._attributes?.type == "number"
//                                     ) {
//                                       ["e", "E", "+", "-"].includes(e.key) &&
//                                         e.preventDefault();
//                                     }
//                                   }}
//                                   type={ele?.type?._attributes?.type}
//                                   placeholder={ele?.placeholder?._text}
//                                   name={ele?.name?._text}
//                                   value={formData[ele?.name?._text]}
//                                   onChange={(e) => {
//                                     // const value = e.target.value;
//                                     // // Use regular expression to allow only numbers
//                                     // const numericValue = value.replace(
//                                     //   /\D/g,
//                                     //   ""
//                                     // );
//                                     handleInputChange(
//                                       e,
//                                       ele?.type?._attributes?.type,
//                                       i
//                                     );
//                                   }}
//                                 />
//                                 {index === i ? (
//                                   <>
//                                     {error && (
//                                       <span style={{ color: "red" }}>
//                                         {error}
//                                       </span>
//                                     )}
//                                   </>
//                                 ) : (
//                                   <></>
//                                 )}
//                               </FormGroup>
//                             </Col>
//                           )}
//                         </>
//                       );
//                     }
//                   })}
//               </Row>

//               <hr />
//               {/* <Row className="mt-2 ">
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label className="">
//                     <h4>Status</h4>
//                   </Label>
//                   <div className="form-label-group mx-1">
//                     {CreatAccountView &&
//                       CreatAccountView?.CreateAccount?.Radiobutton?.input?.map(
//                         (ele, i) => {
//                           return (
//                             <FormGroup key={i}>
//                               <Input
//                                 key={i}
//                                 style={{ marginRight: "3px" }}
//                                 required
//                                 type={ele?.type?._attributes?.type}
//                                 name={ele?.name?._text}
//                                 value={`${
//                                   ele?.label?._text == "Active"
//                                     ? "Active"
//                                     : "Deactive"
//                                 }`}
//                                 onChange={handleInputChange}
//                               />{" "}
//                               <span
//                                 className="mx-1 mt-1"
//                                 style={{ marginRight: "20px" }}
//                               >
//                                 {ele?.label?._text}
//                               </span>
//                             </FormGroup>
//                           );
//                         }
//                       )}
//                   </div>
//                 </Col>
//               </Row> */}
//               <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
//                 <Label className="mb-0">Status</Label>
//                 <div
//                   className="form-label-group"
//                   onChange={(e) => {
//                     setFormData({
//                       ...formData,
//                       ["status"]: e.target.value,
//                     });
//                   }}
//                 >
//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="status"
//                     value="Active"
//                   />
//                   <span style={{ marginRight: "20px" }}>Active</span>

//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="status"
//                     value="Deactive"
//                   />
//                   <span style={{ marginRight: "3px" }}>Deactive</span>
//                 </div>
//               </Col>

//               <Row>
//                 <Button.Ripple
//                   color="primary"
//                   type="submit"
//                   className="mr-1 mt-2 mx-2"
//                 >
//                   Submit
//                 </Button.Ripple>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// };
// export default CreateTarget;
import React, { useEffect, useState, useContext } from "react";
import xmlJs from "xml-js";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
  ModalBody,
  ModalHeader,
  Modal,
  InputGroup,
} from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BiEnvelope } from "react-icons/bi";
import { BsFillChatDotsFill, BsWhatsapp } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import Flatpickr from "react-flatpickr";

import Multiselect from "multiselect-react-dropdown";

import { FiSend } from "react-icons/fi";

import "../../../../assets/scss/pages/users.scss";
import {
  CreateOrder_ViewData,
  CommentOrder,
  CreateOrder_ID,
  CommentProductWiki,
  SaveOrder,
  ProductListView,
  CreatePartyList,
  Create_Sales_personList,
  Create_Targetsave,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import Timepickers from "../../../forms/form-elements/datepicker/Timepicker";
import Pickers from "../../../forms/form-elements/datepicker/Pickers";
// import Payment from "./payment/Payment";
// import OrderedList from "./OrderedList";
// import AuditHistory from "./audithistory/AuditHistory";
let GrandTotal = [];
let SelectedITems = [];
let IndividualIndex = [];
const CreateTarget = (args) => {
  const [formData, setFormData] = useState({});
  const [Index, setIndex] = useState("");
  const [targetStartDate, settargetStartDate] = useState("");
  const [targetEndDate, settargetEndDate] = useState("");
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [PartyList, setPartyList] = useState([]);
  const [Salesperson, setSalesperson] = useState("");
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  // const [OrderID, setOrderID] = useState();
  const [UserInfo, setUserInfo] = useState({});
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState("");
  const [audit, setAudit] = useState(false);
  const [SalesPersonList, setSalesPersonList] = useState([]);
  const toggle = (item) => {
    setItems(item);
    setModal(!modal);
  };
  const audittoggle = () => {
    setAudit(!audit);
    // setModal(!modal);
  };
  const handleopentoggle = (iteam) => {
    toggle(iteam);
  };
  const handleHistory = () => {
    audittoggle();
  };
  const [product, setProduct] = useState([
    {
      product: "", //
      productId: "",
      availableQty: "",
      qty: 1, //
      price: "", //
      totalprice: "", //
      Salespersonname: "",
      targetstartDate: "",
      targetEndDate: "",
      discount: "",
      Shipping: "",
      tax: "",
      grandTotal: "",
    },
  ]);

  const handleProductChangeProduct = (e, index) => {
    // product.price * product?.qty
    setIndex(index);
    const { name, value } = e.target;
    const list = [...product];
    list[index][name] = value;
    console.log(GrandTotal);
    let amt = 0;
    if (list.length > 0) {
      const x = list?.map((val) => {
        console.log(val.qty * val.price);
        GrandTotal[index] = val.qty * val.price;

        list[index]["totalprice"] = val.qty * val.price;
        return val.qty * val.price;
      });
      amt = x.reduce((a, b) => a + b);
      console.log("GrandTotal", amt);
    }
    // console.log(list)
    setProduct(list);
    setGrandTotalAmt(amt);
    // setAmount(amt);
  };

  const handleRemoveSelected = (selectedList, selectedItem, index) => {
    // console.log(selectedList);
    // console.log(selectedItem); // removed item
    // console.log(product);
    // console.log(index);
    // console.log(SelectedITems);
    SelectedITems.splice(index, 1);
    let myarr = product?.map((ele, i) => {
      console.log(ele?.qty * selectedItem[i]?.Product_MRP);
      let indextotal = ele?.qty * SelectedITems[i]?.Product_MRP;
      GrandTotal[index] = indextotal;
      return indextotal;
    });

    let amt = myarr.reduce((a, b) => a + b);
    setGrandTotalAmt(amt);
  };
  const handleSelection = (selectedList, selectedItem, index) => {
    SelectedITems.push(selectedItem);
    setProduct((prevProductList) => {
      const updatedProductList = [...prevProductList]; // Create a copy of the productList array
      const updatedProduct = { ...updatedProductList[index] }; // Create a copy of the product at the specified index
      updatedProduct.price = selectedItem?.Product_MRP; // Update the price of the copied product
      updatedProduct.productId = selectedItem?._id;
      updatedProductList[index] = updatedProduct; // Replace the product at the specified index with the updated one
      let myarr = prevProductList?.map((ele, i) => {
        console.log(ele?.qty * selectedItem[i]?.Product_MRP);
        let indextotal = ele?.qty * SelectedITems[i]?.Product_MRP;
        GrandTotal[index] = indextotal;
        return indextotal;
      });

      let amt = myarr.reduce((a, b) => a + b);
      setGrandTotalAmt(amt);
      // updatedProduct.grandTotal = Quantity[index]*selectedItem.Product_MRP;
      // setGrandTotalAmt
      return updatedProductList; // Return the updated product list to set the state
    });
    product.map((value) => console.log(value.totalprice));
    // onSelect1(selectedList, selectedItem, index);
  };
  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    setindex(i);
    if (type == "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        });
      }
    } else {
      if (type == "number") {
        if (/^\d{0,10}$/.test(value)) {
          setFormData({
            ...formData,
            [name]: value,
          });
          setError("");
        } else {
          setError(
            "Please enter a valid number with a maximum length of 10 digits"
          );
        }
      } else {
        if (value.length <= 10) {
          setFormData({
            ...formData,
            [name]: value,
          });
          setError("");
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      }
    }
  };
  // handleInputChange;
  useEffect(() => {
    console.log(product);
    console.log(GrandTotal);
    console.log(Salesperson);
    console.log(targetStartDate);
    console.log(targetEndDate);
  }, [product, targetEndDate]);

  useEffect(() => {
    Create_Sales_personList()
      .then((res) => {
        console.log(res?.SalesPerson);
        setSalesPersonList(res?.SalesPerson);
      })
      .catch((err) => console.log(err));
    ProductListView()
      .then((res) => {
        // console.log(res?.Product);
        setProductList(res?.Product);
      })
      .catch((err) => {
        console.log(err);
      });
    CreatePartyList()
      .then((res) => {
        // console.log(res.Party)
        setPartyList(res.Party);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    console.log(userInfo);
    setUserInfo(userInfo);
    // CreateOrder_ID()
    //   .then((res) => {
    //     const lastElement = res?.Order[res?.Order?.length - 1].id;
    //     const prefix = lastElement?.substring(0, 5);
    //     const number = parseInt(lastElement?.match(/\d+$/)[0], 10) + 1;
    //     const concatenatedString = prefix + number;
    //     setOrderID(concatenatedString);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // CreateOrder_ViewData()
    //   .then((res) => {
    //     const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
    //     setCreatAccountView(JSON.parse(jsonData));
    //     setStatusDropDown(
    //       JSON.parse(jsonData)?.createOrder.CurrentStatus?.MyDropDown?.dropdown
    //     );
    //     setdropdownValue(JSON.parse(jsonData));
    //     setPartDetails(JSON.parse(jsonData)?.createOrder.PartDetails);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  let addMoreProduct = () => {
    setProduct([
      ...product,
      {
        product: "", //
        productId: "",
        availableQty: "",
        qty: 1, //
        price: "", //
        totalprice: "", //
        Salespersonname: "",
        targetstartDate: "",
        targetEndDate: "",
        discount: "",
        Shipping: "",
        tax: "",
        grandTotal: "",
      },
    ]);
  };
  let removeMoreProduct = (i) => {
    let newFormValues = [...product];
    newFormValues.splice(i, 1);
    GrandTotal.splice(i, 1);
    let amt = GrandTotal.reduce((a, b) => a + b);
    setGrandTotalAmt(amt);

    setProduct(newFormValues);
  };
  // let handlePartChange = (i, e) => {
  //   let newFormValues = [...part];
  //   newFormValues[i][e.target.name] = e.target.value;
  //   setPart(newFormValues);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(product);
    console.log(GrandTotal);
    console.log(Salesperson);
    console.log(targetStartDate);
    console.log(targetEndDate);
    console.log(grandTotalAmt);
    debugger;
    // const ObjOrder = {
    //   userId: UserInfo?._id,
    //   fullName: UserInfo?.UserName,
    //   address: UserInfo?.Address,
    //   // MobileNo: 1234567890,
    //   // country: "USA",
    //   // state: "California",
    //   // city: "Los Angeles",
    //   // landMark: "Nearby Park",
    //   // pincode: 90001,
    //   // grandTotal: 100.50,
    //   // discount: 10.00,
    //   // shippingCost: 5.00,
    //   // taxAmount: 7.50,
    //   // status: "pending",
    //   orderItems: product,
    // };
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      // Create_Targetsave()
      SaveOrder(ObjOrder)
        .then((res) => {
          // if (res.status) {
          //   setFormData({});
          //   window.location.reload();
          swal("Order Created Successfully");
          // }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const onSelect1 = (selectedList, selectedItem, index) => {
    // console.log(selectedList);
    setSalesperson(selectedList);
    // console.log(index);
    // if (selectedList.length) {
    //   for (var i = 0; i < selectedList.length; i++) {
    //     selectedOptions.push(selectedList[i].id);
    //   }
    // }
    // let arr = selectedList.map((ele) => ele.id);
    // setmultiSelect(arr);
    // console.log(multiSelect);
    // let uniqueChars = [...new Set(selectedOptions)];
    // if (uniqueChars.length === 1) {
    //   let value = uniqueChars[0];
    //   const formdata = new FormData();
    //   formdata.append("state_id", value);
    //   axiosConfig
    //     .post(`/getcity`, formdata)
    //     .then((res) => {
    //       setCityList(res?.data?.cities);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   setCityList([]);
    // }
  };
  const onRemove1 = (selectedList, removedItem, index) => {
    console.log(selectedList);
    console.log(index);

    // setmultiSelect(selectedList);

    // let arr = selectedList.map((ele) => ele.id);
    // console.log(arr);
    // setmultiSelect(arr);
    // console.log(multiSelect);
    // if (selectedList.length) {
    //   for (var i = 0; i < selectedList.length; i++) {
    //     selectedOptions.push(selectedList[i].id);
    //   }
    // }
    // let uniqueChars = [...new Set(selectedOptions)];
    // console.log(uniqueChars);
  };
  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col className="">
              <div>
                <h1 className="">Create Target</h1>
              </div>
            </Col>
          </Row>

          <CardBody>
            {/* <Pickers /> */}
            {/* <Col className="mb-3" md="6" sm="12">
              <h5 className="text-bold-500">Range</h5>
              <Flatpickr
                // value={rangePicker}
                className="form-control"
                options={{ mode: "range" }}
                onChange={(date) => {
                  console.log(date);
                }}
              />
            </Col> */}
            <Form className="m-1" onSubmit={submitHandler}>
              <Row>
                <Col className="mb-1" lg="2" md="2" sm="12">
                  <div className="">
                    <Label>Choose Sales Person</Label>

                    <Multiselect
                      required
                      selectionLimit={1}
                      // showCheckbox="true"
                      isObject="false"
                      options={SalesPersonList} // Options to display in the dropdown
                      // selectedValues={selectedValue}   // Preselected value to persist in dropdown
                      onSelect={onSelect1} // Function will trigger on select event
                      onRemove={onRemove1} // Function will trigger on remove event
                      displayValue="firstName" // Property name to display in the dropdown options
                    />
                  </div>
                </Col>
                <Col className="mb-1" lg="2" md="2" sm="12">
                  <div className="">
                    <Label>Start date</Label>
                    <Input
                      required
                      type="date"
                      name="targetEndDate"
                      placeholder="Date of Delivery"
                      value={targetStartDate}
                      // value={product.price * product.qty}
                      onChange={(e) => settargetStartDate(e.target.value)}
                    />
                  </div>
                </Col>
                <Col className="mb-1" lg="2" md="2" sm="12">
                  <div className="">
                    <Label>End Date</Label>
                    <Input
                      required
                      type="date"
                      name="targetstartDate"
                      placeholder="Date of Delivery"
                      value={targetEndDate}
                      // value={product.price * product.qty}
                      onChange={(e) => settargetEndDate(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              {product &&
                product?.map((product, index) => (
                  <Row className="" key={index}>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Product Name</Label>
                        <Multiselect
                          required
                          selectionLimit={1}
                          // showCheckbox="true"
                          isObject="false"
                          options={ProductList}
                          // selectedValues={selectedValue}   // Preselected value to persist in dropdown
                          onSelect={(selectedList, selectedItem) =>
                            handleSelection(selectedList, selectedItem, index)
                          }
                          onRemove={(selectedList, selectedItem) => {
                            handleRemoveSelected(
                              selectedList,
                              selectedItem,
                              index
                            );
                          }}
                          displayValue="Product_Title" // Property name to display in the dropdown options
                        />
                      </div>
                    </Col>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Quantity Assign</Label>
                        <Input
                          type="number"
                          name="qty"
                          placeholder="Req_Qty"
                          value={product?.qty}
                          onChange={(e) => handleProductChangeProduct(e, index)}
                        />
                      </div>
                    </Col>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Price</Label>
                        <Input
                          type="number"
                          name="price"
                          readOnly
                          placeholder="Price"
                          value={product.price}
                        />
                      </div>
                    </Col>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Total Price</Label>
                        <Input
                          type="number"
                          name="totalprice"
                          readOnly
                          placeholder="TtlPrice"
                          value={product.price * product?.qty}
                        />
                      </div>
                    </Col>

                    <Col className="d-flex mt-1 abb" lg="3" md="3" sm="12">
                      <div className="btnStyle">
                        {index ? (
                          <Button
                            type="button"
                            color="danger"
                            className="button remove "
                            onClick={() => removeMoreProduct(index)}
                          >
                            - Remove
                          </Button>
                        ) : null}
                      </div>

                      <div className="btnStyle">
                        <Button
                          className="ml-1 mb-1"
                          color="primary"
                          type="button"
                          onClick={() => addMoreProduct()}
                        >
                          + Add
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ))}
              <Row>
                {/* <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Discount</Label>
                        <Input
                          type="number"
                          name="discount"
                          readOnly
                          placeholder="Dissct"
                          value={product.discount}
                        />
                      </div>
                    </Col> */}
                {/* <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Shipping Cost</Label>
                        <Input
                          type="number"
                          name="Shipcst"
                          readOnly
                          placeholder="Shipcst"
                          value={product.Shipping}
                        />
                      </div>
                    </Col> */}
                {/* <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Tax</Label>
                        <Input
                          type="number"
                          name="tax"
                          readOnly
                          placeholder="Tax"
                          value={product.tax}
                        />
                      </div>
                    </Col> */}
              </Row>
              <Row>
                <Col className="mb-1" lg="12" md="12" sm="12">
                  <div className=" d-flex justify-content-end">
                    <Label className="pr-5">
                      Grand Total : <stron>{grandTotalAmt}</stron>
                    </Label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex justify-content-center">
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mt-2"
                    >
                      Submit
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreateTarget;
