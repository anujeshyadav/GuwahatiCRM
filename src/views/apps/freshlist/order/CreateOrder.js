import React, { useEffect, useState, useContext } from "react";
import xmlJs from "xml-js";
import { Route } from "react-router-dom";
import { history } from "../../../../history";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
} from "reactstrap";
import "react-phone-input-2/lib/style.css";
import Multiselect from "multiselect-react-dropdown";
import "../../../../assets/scss/pages/users.scss";
import {
  SaveOrder,
  ProductListView,
  CreatePartyList,
  BaseUnitListView,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
let GrandTotal = [];
let SelectedITems = [];
const CreateOrder = args => {
  const [Index, setIndex] = useState("");
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [PartyList, setPartyList] = useState([]);
  const [UnitList, setUnitList] = useState([]);
  const [unitOne, setUnitOne] = useState([]);
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  const [UserInfo, setUserInfo] = useState({});
  const [dateofDelivery, setDateofDelivery] = useState("");
  const [product, setProduct] = useState([
    {
      product: "",
      productId: "",
      availableQty: "",
      qty: 1,
      price: "",
      totalprice: "",
      partyId: "",
      DateofDelivery: "",
    },
  ]);

  const handleProductChangeProduct = (e, index, avalaibleSize) => {
    if (avalaibleSize >= e.target.value) {
      setIndex(index);
      const { name, value } = e.target;
      const list = [...product];
      list[index][name] = value;
      product.map(ele => {});
      let amt = 0;
      if (list.length > 0) {
        const x = list?.map(val => {
          console.log(val.qty * val.price);
          list[index]["totalprice"] = val.qty * val.price;
          return val.qty * val.price;
        });
        amt = x.reduce((a, b) => a + b, 0);
        console.log("GrandTotal", amt);
      }
      setProduct(list);
      setGrandTotalAmt(amt);
    } else {
      return null;
    }
  };

  const handleSelectionParty = (selectedList, selectedItem, index) => {
    setProduct(prevProductList => {
      const updatedProductList = [...prevProductList];
      const updatedProduct = { ...updatedProductList[index] };
      updatedProduct.partyId = selectedItem?._id;
      updatedProductList[index] = updatedProduct;
      return updatedProductList;
    });
  };

  const handleUnitSelection = (selectedList, selectedItem, index) => {
    console.log(selectedItem.primaryUnit);
    // SelectedITems.push(selectedItem);
    // setProduct(prevProductList => {
    //   const updatedProductList = [...prevProductList];
    //   const updatedProduct = { ...updatedProductList[index] };
    //   updatedProduct.price = selectedItem.Product_MRP;
    //   updatedProduct.productId = selectedItem._id;
    //   updatedProduct.availableQty = selectedItem.Size;
    //   updatedProductList[index] = updatedProduct;
    //   let myarr = prevProductList?.map((ele, i) => {
    //     let indextotal = ele?.qty * SelectedITems[i]?.Product_MRP;
    //     GrandTotal[index] = indextotal;
    //     return indextotal;
    //   });
    //   console.log(myarr);
    //   let amt = myarr.reduce((a, b) => a + b, 0);
    //   setGrandTotalAmt(amt);
    //   return updatedProductList; // Return the updated product list to set the state
    // });
  };
  const handleSelection = (selectedList, selectedItem, index) => {
    SelectedITems.push(selectedItem);
    setProduct(prevProductList => {
      const updatedProductList = [...prevProductList];
      const updatedProduct = { ...updatedProductList[index] }; // Create a copy of the product at the specified index
      updatedProduct.price = selectedItem.Product_MRP; // Update the price of the copied product
      updatedProduct.productId = selectedItem._id;
      updatedProduct.availableQty = selectedItem.Size;
      updatedProductList[index] = updatedProduct; // Replace the product at the specified index with the updated one
      let myarr = prevProductList?.map((ele, i) => {
        let indextotal = ele?.qty * SelectedITems[i]?.Product_MRP;
        GrandTotal[index] = indextotal;
        return indextotal;
      });
      console.log(myarr);
      let amt = myarr.reduce((a, b) => a + b, 0);
      setGrandTotalAmt(amt);
      return updatedProductList; // Return the updated product list to set the state
    });
  };

  useEffect(() => {
    console.log(product);
  }, [product, GrandTotal]);

  useEffect(() => {
    ProductListView()
      .then(res => {
        setProductList(res?.Product);
      })
      .catch(err => {
        console.log(err);
      });
    CreatePartyList()
      .then(res => {
        setPartyList(res.Party);
      })
      .catch(err => {
        console.log(err);
      });
    BaseUnitListView()
      .then(res => {
        setUnitList(res.PrimaryUnit);
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

  let addMoreProduct = () => {
    setProduct([
      ...product,
      {
        product: "",
        productId: "",
        availableQty: "",
        qty: 1,
        price: "",
        totalprice: "",
        DateofDelivery: "",
        partyId: "",
        discount: "",
        Shipping: "",
        tax: "",
      },
    ]);
  };
  let removeMoreProduct = i => {
    let newFormValues = [...product];
    newFormValues.splice(i, 1);
    GrandTotal.splice(i, 1);
    let amt = GrandTotal.reduce((a, b) => a + b, 0);
    setGrandTotalAmt(amt);
    setProduct(newFormValues);
  };

  const submitHandler = e => {
    e.preventDefault();
    // product?.map(ele => {
    //   return {};
    // });
    console.log(UserInfo?.UserName);
    const ObjOrder = {
      userId: UserInfo?._id,
      fullName: UserInfo?.UserName,
      address: UserInfo?.Address,
      grandTotal: grandTotalAmt,
      MobileNo: UserInfo?.mobileNumber,
      country: UserInfo?.Country,
      state: UserInfo?.State,
      city: UserInfo?.City,
      orderItems: product,
    };
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      SaveOrder(ObjOrder)
        .then(res => {
          console.log(res);
          // if (res.status) {
          //   setFormData({});
          //   window.location.reload();
          swal("Order Created Successfully");
          // }
        })
        .catch(err => {
          console.log(err);
        });
    }
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
                <h1 className="">Create Order</h1>
              </div>
            </Col>
            {/* <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" float-right"
                    color="danger"
                    onClick={history.push("/app/softnumen/order/orderList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col> */}
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className="btn float-right"
                    color="danger"
                    size="sm"
                    onClick={() =>
                      history.push("/app/softnumen/order/orderList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row>
                <Col className="mb-1" lg="4" md="4" sm="12">
                  <div className="">
                    <Label>Choose Party</Label>

                    <Multiselect
                      required
                      selectionLimit={1}
                      isObject="false"
                      options={PartyList}
                      onSelect={(selectedList, selectedItem) =>
                        handleSelectionParty(selectedList, selectedItem, index)
                      }
                      onRemove={onRemove1} // Function will trigger on remove event
                      displayValue="firstName" // Property name to display in the dropdown options
                    />
                  </div>
                </Col>
                <Col className="mb-1" lg="4" md="4" sm="12">
                  <div className="">
                    <Label>Expected Delivery Date</Label>
                    <Input
                      required
                      type="date"
                      name="DateofDelivery"
                      value={dateofDelivery}
                      onChange={e => setDateofDelivery(e.target.value)}
                    />
                  </div>
                </Col>
                <Col className="mb-1" lg="4" md="4" sm="12"></Col>
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
                          isObject="false"
                          options={ProductList}
                          onSelect={(selectedList, selectedItem) =>
                            handleSelection(selectedList, selectedItem, index)
                          }
                          onRemove={(selectedList, selectedItem) => {
                            onRemove1(selectedList, selectedItem, index);
                          }}
                          displayValue="Product_Title" // Property name to display in the dropdown options
                        />
                      </div>
                    </Col>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Available Size</Label>
                        <Input
                          type="number"
                          disabled
                          name="availableQty"
                          placeholder="AvailableSize"
                          value={product?.availableQty}
                        />
                      </div>
                    </Col>
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Required Size</Label>
                        <Input
                          type="number"
                          name="qty"
                          placeholder="Req_Qty"
                          required
                          autocomplete="off"
                          value={product?.qty}
                          onChange={e =>
                            handleProductChangeProduct(
                              e,
                              index,
                              product?.availableQty
                            )
                          }
                        />
                      </div>
                    </Col>

                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <Label>Choose Unit</Label>
                      <CustomInput
                        type="select"
                        placeholder="Select Type"
                        name="type"
                        value={unitOne}
                        onChange={e => {
                          setUnitOne(e.target.value);
                        }}
                      >
                        <option value="None">None</option>
                        {UnitList?.map(val => {
                          return (
                            <option value={val.primaryUnit}>
                              {val.primaryUnit}
                            </option>
                          );
                        })}
                      </CustomInput>
                    </Col>

                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Price</Label>
                        <Input
                          type="number"
                          name="price"
                          disabled
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
                          disabled
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
                            size="sm"
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
                          size="sm"
                          onClick={() => addMoreProduct()}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ))}
              <Row>
                <Col className="mb-1" lg="12" md="12" sm="12">
                  <div className=" d-flex justify-content-end">
                    <ul className="subtotal">
                      <li>
                        <Label className="">
                          SubTotal : <strong>{grandTotalAmt}</strong>
                        </Label>
                      </li>
                      <li>
                        <Label className="">
                          Shipping Cost : <strong>RS 50</strong>
                        </Label>
                      </li>
                      <li>
                        <Label className="">
                          Tax: <strong>RS 25</strong>
                        </Label>
                      </li>
                      <li>
                        <Label className="">
                          Discount : <strong>RS 5</strong>
                        </Label>
                      </li>
                      <li>
                        {" "}
                        <Label className="pr-5">
                          Grand Total :{" "}
                          <strong>{grandTotalAmt + 50 + 25 + 5}</strong>
                        </Label>
                      </li>
                    </ul>
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
export default CreateOrder;
