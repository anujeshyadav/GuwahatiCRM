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
} from "reactstrap";
import "react-phone-input-2/lib/style.css";

import { useParams, useLocation } from "react-router-dom";
import "../../../../assets/scss/pages/users.scss";
import {
  ProductListView,
  Create_Sales_personList,
  SalesEditOrder,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import swal from "sweetalert";

let GrandTotal = [];

const EditOrder = (args) => {
  const [Index, setIndex] = useState(-1);
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
    },
  ]);
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handleProductChangeProduct = (e, index) => {
    setIndex(index);
    const { name, value } = e.target;
    let orderitem = product?.orderItems;
    const list = [...orderitem];
    list[index][name] = value;
    let amt = 0;
    if (list.length > 0) {
      const x = list?.map((val) => {
        GrandTotal[index] = val.Size * val.qty * val.price;
        list[index]["totalprice"] = val.Size * val.qty * val.price;
        return val.Size * val.qty * val.price;
      });
      amt = x?.reduce((a, b) => a + b);
    }
    setProduct(list);
    setGrandTotalAmt(amt);
  };

  useEffect(() => {
    setProduct(location?.state);
    console.log(location?.state);
    setUserName(location?.state.fullName);
    setEditdata(location?.state);
    setGrandTotalAmt(location?.state?.grandTotal);
  }, []);

  useEffect(() => {
    setProduct(location?.state);
    setEditdata(location?.state);
  }, [product]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    setUserInfo(userInfo);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(product, product?.orderItems);
    let editedproduct = product?.orderItems?.map((ele) => {
      return {
        productId: ele?.productId?._id,
        qty: Number(ele?.qty),
      };
    });
    let payload = {
      fullName: userName,
      orderItems: editedproduct,
      grandTotal: grandTotalAmt,
    };
    // console.log(payload);
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      SalesEditOrder(payload, product?._id)
        .then((res) => {
          console.log(res);
          swal("Order Edited Successfully");
        })
        .catch((err) => {
          console.log(err);
          swal("Order Not Edited");
        });
    }
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
                      onClick={() => history.goBack()}>
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
                <Label>FullName</Label>
                <Input
                  required
                  type="text"
                  name="FullName"
                  placeholder="FullName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Col>

              {product &&
                product?.orderItems?.map((product, index) => {
                  return (
                    <Row className="" key={index}>
                      <Col className="mb-1">
                        <div className="">
                          <Label>Product Name</Label>
                          <Input
                            type="text"
                            placeholder="ProductName"
                            name="Product_Title"
                            readOnly
                            value={product?.productId?.Product_Title}
                            onChange={(e) =>
                              handleProductChangeProduct(e, index)
                            }
                          />
                        </div>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label>Price</Label>
                          <Input
                            type="number"
                            readOnly
                            placeholder="Price"
                            name="Price"
                            value={product?.price}
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label>Qty</Label>
                          <Input
                            type="number"
                            placeholder="Size"
                            name="qty"
                            value={product?.qty}
                            onChange={(e) =>
                              handleProductChangeProduct(e, index)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label>unitType</Label>
                          <Input
                            type="text"
                            placeholder={product?.unitType}
                            name="qty"
                            value={product?.unitType}
                            // onChange={(e) =>
                            //   handleProductChangeProduct(e, index)
                            // }
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label>GST Rate</Label>
                          <Input
                            type="number"
                            placeholder="GST Rate"
                            name="GSTRate"
                            value={product?.productId["GST Rate"]}
                            // onChange={e => handleProductChangeProduct(e, index)}
                          />
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup>
                          <Label>HST Code</Label>
                          <Input
                            type="number"
                            placeholder="HSTCode"
                            name="HSTCode"
                            value={product?.productId?.HSN_Code}
                            // onChange={e => handleProductChangeProduct(e, index)}
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
                      className="mt-2">
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
export default EditOrder;
