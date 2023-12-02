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
import { useParams, useLocation } from "react-router-dom";
import "../../../../assets/scss/pages/users.scss";
import {
  ProductListView,
  Create_Sales_personList,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

let GrandTotal = [];

const EditTarget = args => {
  const [Index, setIndex] = useState("");
  const [targetStartDate, settargetStartDate] = useState("");
  const [targetEndDate, settargetEndDate] = useState("");
  const [error, setError] = useState("");
  const [Salesperson, setSalesperson] = useState("");
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  const [Editdata, setEditdata] = useState({});
  const [UserInfo, setUserInfo] = useState({});
  const [userName, setUserName] = useState("");
  const Params = useParams();
  const location = useLocation();

  const [product, setProduct] = useState([
    {
      product: "", //
      productId: "",
      availableQty: "",
      qty: 1, //
      price: "", //
      grandTotal: "",
      // fullName: "",
    },
  ]);
  const handleChange = e => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };
  const handleProductChangeProduct = (e, index) => {
    setIndex(index);
    const { name, value } = e.target;
    const list = [...product];
    console.log("before", list);
    list[index][name] = value;
    console.log("after", list);
    // let amt = 0;
    // if (list.length > 0) {
    //   const x = list?.map(val => {
    //     console.log(val.qty * val.price);
    //     GrandTotal[index] = val.qty * val.price;

    //     list[index]["totalprice"] = val.qty * val.price;
    //     return val.qty * val.price;
    //   });
    //   amt = x.reduce((a, b) => a + b);
    //   console.log("GrandTotal", amt);
    // }
    // console.log(list)
    setProduct(list);
    setGrandTotalAmt(amt);
    // setAmount(amt);
  };

  useEffect(() => {
    console.log(location.state);
    setProduct(location.state);
    setEditdata(location?.state);
    setGrandTotalAmt(location?.state?.grandTotal);
  }, []);

  // useEffect(() => {
  //   // console.log(Params.id);
  //   if (location?.state) {
  //     localStorage.setItem("EditoneProduct", location?.state);
  //     setEditdata(location?.state);
  //     debugger;

  //     setProduct(location?.state?.products);
  //     setGrandTotalAmt(location?.state?.grandTotal);
  //     // console.log(location?.state?.salesPersonId._id);
  //   } else {
  //     let mydata = localStorage.getItem("EditoneProduct");
  //     setEditdata(mydata);

  //     setProduct(mydata?.products);
  //     setGrandTotalAmt(mydata?.grandTotal);
  //   }
  //   console.log(product);
  // }, [product]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    console.log(userInfo);
    setUserInfo(userInfo);
  }, []);

  const submitHandler = e => {
    // e.preventDefault();
    // console.log(userName);
    // let payload = {
    //   fullName: userName,
    //   orderItems: product,
    // };
    // if (error) {
    //   swal("Error occured while Entering Details");
    // } else {
    //   Create_Targetsave(payload)
    //     .then(res => {
    //       // if (res.status) {
    //       //   setFormData({});
    //       //   window.location.reload();
    //       swal("Target Created Successfully");
    //       // }
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col className="">
              <div>
                <h1 className="">Edit Order</h1>
              </div>
            </Col>
            <Col>
              <div className="float-right">
                <Route
                  render={({ history }) => (
                    <Button
                      style={{ cursor: "pointer" }}
                      className="float-right mr-1"
                      color="primary"
                      size="sm"
                      onClick={() => history.goBack()}
                    >
                      Back
                    </Button>
                  )}
                />
              </div>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Col className="mb-1" lg="4" md="4" sm="12">
                <div className="">
                  <Label>FullName</Label>
                  <Input
                    required
                    type="text"
                    name="FullName"
                    placeholder="FullName"
                    value={product.fullName}
                    onChange={handleChange}
                    // onChange={e => settargetStartDate(e.target.value)}
                  />
                </div>
              </Col>

              {product &&
                product?.orderItems?.map((product, index) => {
                  console.log(product);
                  return (
                    <Row className="" key={index}>
                      <Col className="mb-1">
                        <div className="">
                          <Label>Product Name</Label>
                          <Input
                            type="text"
                            placeholder="ProductName"
                            name="Product_Title"
                            value={product.product.Product_Title}
                            // onChange={e => handleProductChangeProduct(e, index)}
                            onChange={e => handleChange(e, index)}
                          />
                        </div>
                      </Col>
                      <Col lg="4" md="4" sm="12">
                        <FormGroup>
                          <Label>Price</Label>
                          <Input
                            type="number"
                            placeholder="Price"
                            name={product.price}
                            value={product.price}
                            onChange={e => handleProductChangeProduct(e, index)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4" md="4" sm="12">
                        <FormGroup>
                          <Label>Size</Label>
                          <Input
                            type="number"
                            placeholder="Size"
                            name={product.qty}
                            value={product.qty}
                            onChange={e => handleProductChangeProduct(e, index)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4" md="4" sm="12">
                        <FormGroup>
                          <Label>GST Rate</Label>
                          <Input
                            type="number"
                            placeholder="Price"
                            name={product.product["GST Rate"]}
                            value={product.product["GST Rate"]}
                            onChange={e => handleProductChangeProduct(e, index)}
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4" md="4" sm="12">
                        <FormGroup>
                          <Label>HST Code</Label>
                          <Input
                            type="number"
                            placeholder="HSTCode"
                            name={product.product.HSN_Code}
                            value={product.product.HSN_Code}
                            onChange={e => handleProductChangeProduct(e, index)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  );
                })}
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
export default EditTarget;
