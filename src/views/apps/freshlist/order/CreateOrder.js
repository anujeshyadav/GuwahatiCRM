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
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import Payment from "./payment/Payment";
import OrderedList from "./OrderedList";
import AuditHistory from "./audithistory/AuditHistory";
const CreateOrder = (args) => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [StatusDropDown, setStatusDropDown] = useState({});
  const [Index, setIndex] = useState("");
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [productPrice, setproductPrice] = useState('');
  // const [OrderID, setOrderID] = useState();
  const [UserInfo, setUserInfo] = useState({});
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState("");
  const [audit, setAudit] = useState(false);
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
      product: "",
      productId: "",
      availableQty: "",
      qty: 1,
      price: "",
      totalprice: "",
      DateofDelivery: "",
      PartyName: "",
      discount: "",
      Shipping: "",
      tax: "",
      grandTotal: "",
    },
  ]);

  const handleProductChangeProduct = (e, index) => {
   setIndex(index);
    const { name, value } = e.target;
    const list = [...product];
    list[index][name] = value;

    let amt = 0;
    if (list.length > 0) {
      const x = list?.map((val) => {
        list[index]["totalprice"] = val .qty* val.price;
        return val.qty * val.price;
      });
     amt = x.reduce((a, b) => a + b);
      // console.log(amt);
    }
    // console.log(list)
    setProduct(list);
    // setAmount(amt);
  };

  const handleSelection = (selectedList, selectedItem, index) => {
    console.log(selectedItem?._id)
  setproductPrice(selectedItem.Product_MRP)
  //  onSelect1(selectedList, selectedItem, index);
  console.log(selectedItem)
 const newProduct = product[index];
  newProduct["price"]=selectedItem.Product_MRP;
  newProduct["productId"]=selectedItem?._id;
  // newProduct["DateofDelivery"]=selectedItem.Product_MRP;
  onSelect1(selectedList, selectedItem, index);
  };





  // const handleProductChangePart = (e, index) => {
  //   console.log(e.target.value);
  //   setPart([{ qty: e.target.value }]);
  // };



  // let handleFileChange = (i, e) => {
  //   const newFormValues = [...formValues];
  //   const selectedFiles = e.target.files;
  //   newFormValues[i].files = selectedFiles;
  //   setFormValues(newFormValues);
  // };
  // let removeFormFields = (i) => {
  //   let newFormValues = [...Comments];
  //   newFormValues.splice(i, 1);
  //   setComments(newFormValues);
  // };
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
  }, [product]);

  useEffect(() => {
    // console.log(part[0].Shipping);
    ProductListView()
      .then((res) => {
        console.log(res?.Product);
        setProductList(res?.Product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    console.log(userInfo)
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
        product: "",
        productId: "",
        availableQty: "",
        qty: 1,
        price: "",
        // totalprice: "",
        DateofDelivery: "",
        PartyName: "",
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
    setProduct(newFormValues);
  };
  // let handlePartChange = (i, e) => {
  //   let newFormValues = [...part];
  //   newFormValues[i][e.target.name] = e.target.value;
  //   setPart(newFormValues);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
 const ObjOrder= {
 userId: UserInfo?._id,
  fullName: UserInfo?.UserName,
  address: UserInfo?.Address,
  // MobileNo: 1234567890,
  // country: "USA",
  // state: "California",
  // city: "Los Angeles",
  // landMark: "Nearby Park",
  // pincode: 90001,
  // grandTotal: 100.50,
  // discount: 10.00,
  // shippingCost: 5.00,
  // taxAmount: 7.50,
  // status: "pending",
    orderItems:product
  }
  if (error) {
      swal("Error occured while Entering Details");
    } else {
      SaveOrder(ObjOrder)
        .then(res => {
          // if (res.status) {
          //   setFormData({});
          //   window.location.reload();
            swal("Order Created Successfully");
          // }
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  const onSelect1 = (selectedList, selectedItem, index) => {
    // console.log(selectedList);
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
                <h1 className="">Create Order</h1>
              </div>
              {/* <div className="d-flex justify-content-between">
                <div>
                  <span className="orderIdtext pr-1">Order Id</span>

                  <span className="orderId">
                    {OrderID ? `#${OrderID}` : `#ord00${OrderID}`}
                  </span>
                  <span
                    className="ml-2"
                    onClick={handleHistory}
                    style={{ cursor: "pointer" }}
                  >
                    <FaHistory size={15} color="#055761" />
                  </span>
                </div>
                <div>
                  <span className="orderId">Status:</span> <span>Draft</span>
                </div>
                <div className="mystatus">
                  <div>
                    {!!StatusDropDown && !!StatusDropDown ? (
                      <>
                        <Label>{StatusDropDown?.label?._text}</Label>
                        <CustomInput
                          required
                          type="select"
                          name={StatusDropDown?.name?._text}
                          value={formData[StatusDropDown?.name?._text]}
                          onChange={handleInputChange}
                        >
                          <option value="">--Select Status---</option>
                          {StatusDropDown?.option?.map((option, index) => {
                            let dropdownpermision =
                              option?._attributes?.permission.split(",");
                            let permission = dropdownpermision?.includes(
                              UserInfo?.Role
                            );

                            return (
                              <>
                                {permission && (
                                  <option
                                    key={index}
                                    value={option?._attributes?.value}
                                  >
                                    {option?._attributes?.value}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </CustomInput>
                      </>
                    ) : null}
                  </div>
                </div>
              </div> */}
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                {dropdownValue?.createOrder?.MyDropDown.map((drop, i) => {
                  return (
                    <Col lg="6" md="6" key={i}>
                      <FormGroup>
                        <Label>{drop?.dropdown?.label?._text}</Label>
                        <CustomInput
                          // required
                          type="select"
                          name={drop?.dropdown?.name?._text}
                          value={
                            formData[drop?.dropdown?.dropdown?.name?._text]
                          }
                          onChange={handleInputChange}
                        >
                          <option value="">
                            --Select {drop?.dropdown.name._text}---
                          </option>
                          {drop.dropdown.option.map((option, index) => {
                            return (
                              <option
                                key={index}
                                value={option?._attributes?.value}
                              >
                                {option?._attributes?.value}
                              </option>
                            );
                          })}
                        </CustomInput>
                      </FormGroup>
                    </Col>
                  );
                })}
                {dropdownValue?.createOrder?.OType?.MyDropDown?.map(
                  (drop, i) => {
                    return (
                      <Col lg="6" md="6" key={i}>
                        <FormGroup>
                          <Label>{drop?.dropdown?.label?._text}</Label>
                          <CustomInput
                            type="select"
                            name={drop?.dropdown?.name?._text}
                            value={
                              formData[drop?.dropdown?.dropdown?.name?._text]
                            }
                            onChange={handleInputChange}
                          >
                            <option value="">
                              --Select {drop?.dropdown.name._text}---
                            </option>
                            {drop.dropdown.option.map((option, index) => {
                              return (
                                <option
                                  key={index}
                                  value={option?._attributes?.value}
                                >
                                  {option?._attributes?.value}
                                </option>
                              );
                            })}
                          </CustomInput>
                        </FormGroup>
                      </Col>
                    );
                  }
                )}
                {dropdownValue?.createOrder?.OType?.SuppliedBy?.MyDropDown.map(
                  (drop, i) => {
                    return (
                      <Col lg="6" md="6" key={i}>
                        <FormGroup>
                          <Label>{drop?.dropdown?.label?._text}</Label>
                          <CustomInput
                            type="select"
                            name={drop?.dropdown?.name?._text}
                            value={
                              formData[drop?.dropdown?.dropdown?.name?._text]
                            }
                            onChange={handleInputChange}
                          >
                            <option value="">
                              --Select {drop?.dropdown.name._text}---
                            </option>
                            {drop.dropdown.option.map((option, index) => {
                              return (
                                <option
                                  key={index}
                                  value={option?._attributes?.value}
                                >
                                  {option?._attributes?.value}
                                </option>
                              );
                            })}
                          </CustomInput>
                        </FormGroup>
                      </Col>
                    );
                  }
                )}

                {CreatAccountView &&
                  CreatAccountView?.createOrder?.input?.map((ele, i) => {
                    {
                      /* if (ele?.role) {
                      let roles = ele?.role?.find(
                        role => role._attributes?.name === "WARRANTY APPROVER"
                      );

                      View = roles?.permissions?._text.includes("View");
                      Edit = roles?.permissions?._text.includes("Edit");
                    } */
                    }
                    if (!!ele?.lookup) {
                      return (
                        <>
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <FormGroup>
                                <Label>{ele?.label?._text}</Label>
                                <InputGroup className="maininput">
                                  <Input
                                    className="form-control inputs"
                                    type="text"
                                    name={ele?.name?._text}
                                    placeholder={ele?.name._text}
                                    value={formData[ele?.name?._text]}
                                    readOnly
                                  />
                                  <Button
                                    color="primary"
                                    className="mybtn primary"
                                    name="part"
                                    onClick={handleopentoggle}
                                  >
                                    <AiOutlineSearch
                                      onClick={(e) => e.preventDefault()}
                                      fill="white"
                                    />
                                  </Button>
                                </InputGroup>

                                {index === i ? (
                                  <>
                                    {error && (
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </FormGroup>
                            </Col>
                          </>
                        </>
                      );
                    }

                    if (!!ele?.phoneinput) {
                      return (
                        <>
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <FormGroup>
                                <Label>{ele?.label?._text}</Label>
                                <PhoneInput
                                  inputClass="myphoneinput"
                                  country={"us"}
                                  onKeyDown={(e) => {
                                    if (
                                      ele?.type?._attributes?.type == "number"
                                    ) {
                                      ["e", "E", "+", "-"].includes(e.key) &&
                                        e.preventDefault();
                                    }
                                  }}
                                  countryCodeEditable={false}
                                  name={ele?.name?._text}
                                  value={formData[ele?.name?._text]}
                                  onChange={(phone) => {
                                    setFormData({
                                      ...formData,
                                      [ele?.name?._text]: phone,
                                    });
                                  }}
                                  // onChange={handleInputChange}
                                />
                                {index === i ? (
                                  <>
                                    {error && (
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </FormGroup>
                            </Col>
                          </>
                        </>
                      );
                    } else if (!!ele?.Readonly) {
                      if (ele?.type._attributes?.type == "checkbox") {
                        return (
                          <>
                            <div>
                              <Label className="mx-2">
                                {ele?.heading?._text}
                              </Label>
                              <Col key={i} lg="12" md="12" sm="12">
                                <FormGroup>
                                  <Input
                                    disabled
                                    className="mx-1"
                                    type={ele?.type._attributes?.type}
                                    name={ele?.name?._text}
                                    placeholder={ele?.name._text}
                                    value={formData[ele?.value?._text]}
                                  />
                                  <span className="mx-3 py-1">
                                    {ele?.value?._text}
                                  </span>
                                  {index === i ? (
                                    <>
                                      {error && (
                                        <span style={{ color: "red" }}>
                                          {error}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </FormGroup>
                              </Col>
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <Label>{ele?.label?._text}</Label>
                              <FormGroup>
                                <Input
                                  disabled
                                  className="form-control"
                                  type={ele?.type._attributes?.type}
                                  name={ele?.name?._text}
                                  placeholder={ele?.name._text}
                                  value={formData[ele?.value?._text]}
                                />
                                <span className="mx-2">
                                  {ele?.value?._text}
                                </span>
                                {index === i ? (
                                  <>
                                    {error && (
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </FormGroup>
                            </Col>
                          </>
                        );
                      }
                    } else {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <Label>{ele?.label?._text}</Label>

                            <Input
                              type={ele?.type?._attributes?.type}
                              placeholder={ele?.placeholder?._text}
                              name={ele?.name?._text}
                              value={formData[ele?.name?._text]}
                              onChange={(e) =>
                                handleInputChange(
                                  e,
                                  ele?.type?._attributes?.type,
                                  i
                                )
                              }
                            />
                            {index === i ? (
                              <>
                                {error && (
                                  <span style={{ color: "red" }}>{error}</span>
                                )}
                              </>
                            ) : (
                              <></>
                            )}
                          </Col>
                        </>
                      );
                    }
                  })}
  </Row>
  {product &&
                product?.map((product, index) => (
                  <Row className="" key={index}>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>ProductName</Label>
                        <Multiselect
                          required
                          selectionLimit={1}
                          // showCheckbox="true"
                          isObject="false"
                          options={ProductList}
                          // selectedValues={selectedValue}   // Preselected value to persist in dropdown
                          onSelect={(selectedList, selectedItem) =>handleSelection(selectedList, selectedItem, index)} 
                          onRemove={(selectedList, selectedItem) => {
                            onRemove1(selectedList, selectedItem, index);
                          }} 
                          displayValue="Product_Title" // Property name to display in the dropdown options
                        />
                      </div>
                    </Col>
                  <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Required Qty</Label>
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
                          name="Price"
                          readOnly
                          placeholder="Price"
                          value={productPrice}
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
                          value={productPrice * product?.qty}
                        />
                      </div>
                    </Col> 
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Choose Party</Label>

                        <Multiselect
                          required
                          selectionLimit={1}
                          // showCheckbox="true"
                           isObject="false"
                          options={ProductList} // Options to display in the dropdown
                          // selectedValues={selectedValue}   // Preselected value to persist in dropdown
                          onSelect={onSelect1} // Function will trigger on select event
                          onRemove={onRemove1} // Function will trigger on remove event
                          displayValue="Product_Title" // Property name to display in the dropdown options
                        />
                      </div>
                    </Col>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Date Of Delivery</Label>
                        <Input
                          required
                          type="date"
                          name="DateofDelivery"
                          placeholder="Date of Delivery"
                          value={product.DateofDelivery}
                          // value={product.price * product.qty}
                          onChange={(e) => handleProductChangeProduct(e, index)}
                        />
                      </div>
                    </Col>
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

                    {/* <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Grdttl</Label>
                        <Input
                          type="number"
                          name="Grdttl"
                          readOnly
                          placeholder="Grdttl"
                          value={product.grandTotal || ""}
                        />
                      </div>
                    </Col> */}
                    <Col className="d-flex mt-1 abb" lg="3" md="3" sm="12">
                      <div className="btnStyle">
                        {index ? (
                          <Button
                            type="button"
                            color="danger"
                            className="button remove "
                            onClick={() => removeMoreProduct(index)}
                          >
                            -
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
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ))}
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
export default CreateOrder;
