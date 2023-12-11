import React, { useEffect, useState, useContext } from "react";
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

import Multiselect from "multiselect-react-dropdown";

import "../../../../assets/scss/pages/users.scss";
import {
  ProductListView,
  CreateAccountList,
  CreatePartyList,
  Create_Sales_personList,
  Create_Targetsave,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

let GrandTotal = [];
let SelectedITems = [];
const CreateTarget = args => {
  const [Index, setIndex] = useState("");
  const [targetStartDate, settargetStartDate] = useState("");
  const [targetEndDate, settargetEndDate] = useState("");
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [PartyList, setPartyList] = useState([]);
  const [Salesperson, setSalesperson] = useState("");
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [UserInfo, setUserInfo] = useState({});

  const [SalesPersonList, setSalesPersonList] = useState([]);
  const [UserList, setUserList] = useState([]);

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
    },
  ]);

  const handleQuantity = (e, index) => {
    setIndex(index);
    const { name, value } = e.target;
    const list = [...product];
    list[index][name] = value;
    // console.log(GrandTotal);
    let amt = 0;
    if (list.length > 0) {
      const x = list?.map(val => {
        // console.log(val.qty * val.price);
        GrandTotal[index] = val.qty * val.price;

        list[index]["totalprice"] = val.qty * val.price;
        return val.qty * val.price;
      });
      amt = x.reduce((a, b) => a + b);
      // console.log("GrandTotal", amt);
    }
    setProduct(list);
    setTotalPrice(amt);
  };

  const handleRemoveSelected = (selectedList, selectedItem, index) => {
    SelectedITems.splice(index, 1);
    let myarr = product?.map((ele, i) => {
      console.log(ele?.qty * selectedItem[i]?.Product_MRP);
      let indextotal = ele?.qty * SelectedITems[i]?.Product_MRP;
      GrandTotal[index] = indextotal;
      return indextotal;
    });

    let amt = myarr.reduce((a, b) => a + b);
    if (amt) {
      setTotalPrice(amt);
    } else {
      setTotalPrice(0);
    }
  };
  const handleSelection = (selectedList, selectedItem, index) => {
    SelectedITems.push(selectedItem);
    setProduct(prevProductList => {
      const updatedProductList = [...prevProductList];
      const updatedProduct = { ...updatedProductList[index] };
      updatedProduct.price = selectedItem?.Product_MRP;
      updatedProduct.productId = selectedItem?._id;
      updatedProductList[index] = updatedProduct;
      let myarr = prevProductList?.map((ele, i) => {
        let indextotal = ele?.qty * SelectedITems[i]?.Product_MRP;

        GrandTotal[index] = indextotal;
        return indextotal;
      });

      let amt = myarr.reduce((a, b) => a + b);
      setTotalPrice(amt);
      updatedProduct.totalprice = amt;
      return updatedProductList;
    });

    const listprice = [...product];

    const grandTTl = listprice.map(val => {
      val.totalprice * totalPrice;
    });
    setGrandTotalAmt(grandTTl);
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));

    CreateAccountList(userInfo?._id)
      .then(res => {
        setUserList(res?.adminDetails);
      })
      .catch(err => console.log(err));

    Create_Sales_personList()
      .then(res => {
        setSalesPersonList(res?.SalesPerson);
      })
      .catch(err => console.log(err));

    ProductListView(userInfo._id)
      .then(res => {
        setProductList(res?.Product);
      })
      .catch(err => {
        console.log(err);
      });
    CreatePartyList()
      .then(res => {
        // console.log(res.Party)
        setPartyList(res.Party);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    // console.log(userInfo);
    setUserInfo(userInfo);
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
      },
    ]);
  };
  let removeMoreProduct = i => {
    let newFormValues = [...product];
    newFormValues.splice(i, 1);
    GrandTotal.splice(i, 1);
    let amt = GrandTotal.reduce((a, b) => a + b);
    setTotalPrice(amt);

    setProduct(newFormValues);
  };

  const submitHandler = e => {
    e.preventDefault();
    let Allproduct = product?.map((ele, i) => {
      return {
        productId: ele?.productId,
        qtyAssign: Number(ele?.qty),
        price: ele?.price,
        totalPrice: ele?.totalprice,
      };
    });
    if (Salesperson?._id) {
      let payload = {
        startDate: targetStartDate,
        endDate: targetEndDate,
        grandTotal: totalPrice,
        salesPersonId: Salesperson?._id,
        products: Allproduct,
        created_by: UserInfo?._id,
      };
      if (error) {
        swal("Error occured while Entering Details");
      } else {
        Create_Targetsave(payload)
          .then(res => {
            swal("Target Created Successfully");
          })
          .catch(err => {
            console.log(err);
          });
      }
    } else {
      swal("Error", "Choose Sales Person First");
    }
  };
  const onSelect1 = (selectedList, selectedItem) => {
    debugger;
    setSalesperson(selectedItem);
  };
  const onRemove1 = (selectedList, removedItem, index) => {
    console.log(selectedList);
    console.log(index);
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
            <Col>
              <div className="float-right">
                <Route
                  render={({ history }) => (
                    <Button
                      style={{ cursor: "pointer" }}
                      className="float-right mr-1"
                      color="primary"
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
              <Row>
                <Col className="mb-1" lg="2" md="2" sm="12">
                  <div className="">
                    <Label>Choose Sales Person</Label>
                    <Multiselect
                      required
                      selectionLimit={1}
                      isObject="false"
                      options={UserList}
                      onSelect={onSelect1}
                      onRemove={onRemove1}
                      displayValue="firstName"
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
                      value={targetStartDate}
                      onChange={e => settargetStartDate(e.target.value)}
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
                      value={targetEndDate}
                      onChange={e => settargetEndDate(e.target.value)}
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
                          isObject="false"
                          options={ProductList}
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
                          displayValue="Product_Title"
                        />
                      </div>
                    </Col>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Quantity Assign</Label>
                        <Input
                          type="number"
                          name="qty"
                          autoComplete="off"
                          placeholder="Req_Qty"
                          value={product?.qty}
                          onChange={e => handleQuantity(e, index)}
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
                <Col className="mb-1" lg="12" md="12" sm="12">
                  <div className=" d-flex justify-content-end">
                    <Label className="pr-5">
                      Grand Total : <strong>{totalPrice}</strong>
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
