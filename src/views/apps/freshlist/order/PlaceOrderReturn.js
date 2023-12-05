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
} from "reactstrap";
import "react-phone-input-2/lib/style.css";
import { useParams, useLocation } from "react-router-dom";

import "../../../../assets/scss/pages/users.scss";
import {
  SalesReturnProduct,
  PlaceOrderReturn_Product,
  ProductListView,
  Create_Sales_personList,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

const PlaceOrderReturn = args => {
  const [Index, setIndex] = useState("");
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  const [Editdata, setEditdata] = useState({});
  const [UserInfo, setUserInfo] = useState({});
  const [SalesPersonList, setSalesPersonList] = useState([]);
  const Params = useParams();
  const location = useLocation();

  const [OrderedListData, setOrderedListData] = useState([
    {
      productId: "",
      Product_Title: "",
      Qty_Sales: "",
      Qty_Return: 0,
      Product_Price: "",
    },
  ]);

  const handleProductChangeProduct = (e, index) => {
    setIndex(index);
    const { name, value } = e.target;
    const list = [...OrderedListData];
    list[index][name] = value;
    setOrderedListData(list);
  };
  useEffect(() => {
    let getFromLocalData = JSON.parse(
      localStorage.getItem("OrderList")
    ).orderItems;
    if (location?.state) {
      setOrderedListData(location?.state.orderItems);
      let grandTotal = location?.state.orderItems.reduce(
        (a, b) => a + b.price,
        0
      );

      setGrandTotalAmt(grandTotal);
      localStorage.setItem("EditoneProduct", location?.state);
      setEditdata(location?.state);
    } else {
      // let mydata = localStorage.getItem("EditoneProduct");
      setOrderedListData(getFromLocalData);
      let grandTotal = location?.state.orderItems.reduce(
        (a, b) => a + b.price,
        0
      );

      setGrandTotalAmt(grandTotal);
    }
  }, []);
  useEffect(() => {}, [OrderedListData]);

  useEffect(() => {
    Create_Sales_personList()
      .then(res => {
        setSalesPersonList(res?.SalesPerson);
      })
      .catch(err => console.log(err));
    ProductListView()
      .then(res => {
        setProductList(res?.Product);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    console.log(userInfo);
    setUserInfo(userInfo);
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    console.log(OrderedListData);
    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

    let myarr = OrderedListData?.map((ele, i) => {
      return {
        productId: ele?.product?._id,
        Qty_Sales: ele?.qty,
        Qty_Return: Number(ele?.returnQty),
        Product_Price: ele?.price,
      };
    });

    let payload = {
      userId: userData?._id,
      status: "pending",
      returnItems: myarr,
      mobileNumber: userData?.mobileNumber,
      email: userData.email,
      Return_amount: grandTotalAmt,
      orderId: location?.state?._id,
    };

    if (error) {
      swal("Error occured while Entering Details");
    } else {
      PlaceOrderReturn_Product(payload)
        .then(res => {
          swal(" PlaceOrder Returned Successfully");

          console.log(res);
        })
        .catch(err => {
          console.log(err);
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
                <h1 className="">PlaceOrder Return</h1>
              </div>
            </Col>
            <Col>
              <div className="float-right">
                <Route
                  render={({ history }) => (
                    <Button
                      style={{ cursor: "pointer" }}
                      className="float-right mr-1"
                      color="danger"
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
              {OrderedListData &&
                OrderedListData?.map((item, index) => {
                  return (
                    <Row className="" key={index}>
                      <Col className="mb-1" lg="2" md="2" sm="12">
                        <div className="">
                          <Label>Product Name</Label>
                          <Input
                            type="text"
                            name="Product_Title"
                            readOnly
                            placeholder="Product Name"
                            value={item?.product?.Product_Title}
                          />
                        </div>
                      </Col>
                      <Col className="mb-1" lg="2" md="2" sm="12">
                        <div className="">
                          <Label>Price</Label>
                          <Input
                            type="text"
                            name="price"
                            readOnly
                            placeholder="Price"
                            value={item?.price}
                          />
                        </div>
                      </Col>
                      <Col className="mb-1" lg="2" md="2" sm="12">
                        <div className="">
                          <Label>Purchased Quantity</Label>
                          <Input
                            type="number"
                            readOnly
                            name="qty"
                            placeholder="Req_Qty"
                            value={item?.qty}
                            onChange={e => handleProductChangeProduct(e, index)}
                          />
                        </div>
                      </Col>
                      <Col className="mb-1" lg="2" md="2" sm="12">
                        <div className="">
                          <Label>Return Quantity</Label>
                          <Input
                            type="number"
                            name="returnQty"
                            placeholder="Return Quantity"
                            value={OrderedListData.returnQty}
                            onChange={e => handleProductChangeProduct(e, index)}
                          />
                        </div>
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
export default PlaceOrderReturn;