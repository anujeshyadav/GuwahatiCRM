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
import "react-phone-input-2/lib/style.css";
import Multiselect from "multiselect-react-dropdown";
import "../../../../assets/scss/pages/users.scss";
import {
  SavePlaceOrder,
  ProductListView,
  CreatePartyList,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import { useHistory } from "react-router-dom";

let GrandTotal = [];
let SelectedITems = [];
const PlaceOrder = args => {
  const [Index, setIndex] = useState("");
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [UnitList, setUnitList] = useState([]);
  const [PartyList, setPartyList] = useState([]);
  const [PartyId, setPartyId] = useState("");
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
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
      unitQty: "",
      // partyId: "",
      Size: "",
      unitType: "",
    },
  ]);
  let history = useHistory();

  const handleProductChangeProduct = (e, index, availableSize) => {
    if (availableSize >= e.target.value) {
      setIndex(index);
      const { name, value } = e.target;
      const list = [...product];
      list[index][name] = value;

      let amt = 0;
      if (list.length > 0) {
        const x = list?.map(val => {
          console.log(val.qty * val.price);
          list[index]["totalprice"] = val.qty * val.price;
          return val.qty * val.price;
        });
        amt = x.reduce((a, b) => a + b);
        console.log("GrandTotal", amt);
      }
      console.log(list);
      setProduct(list);
      setGrandTotalAmt(amt);
      console.log(GrandTotal);
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
  const handleSelectionUnit = (selectedList, selectedItem, index) => {
    SelectedSize.push(selectedItem);
    setProduct(prevProductList => {
      // debugger;
      const updatedUnitList = [...prevProductList];
      const updatedProduct = { ...updatedUnitList[index] }; // Create a copy of the product at the specified index
      updatedProduct.Size = selectedItem.unitQty;
      updatedProduct.unitType = selectedItem.primaryUnit;
      updatedUnitList[index] = updatedProduct;
      let myarr = prevProductList?.map((ele, i) => {
        updatedUnitList[index]["totalprice"] =
          ele?.qty * ele.price * SelectedSize[i]?.unitQty;
        let indextotal = ele?.price * ele.qty * SelectedSize[i]?.unitQty;
        GrandTotal[index] = indextotal;
        return indextotal;
      });
      let amt = myarr.reduce((a, b) => a + b);
      setGrandTotalAmt(amt);
      return updatedUnitList; // Return the updated product list
    });
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
      let amt = myarr.reduce((a, b) => a + b);
      setGrandTotalAmt(amt);
      return updatedProductList; // Return the updated product list to set the state
    });
  };

  useEffect(() => {
    console.log(product);
    console.log(GrandTotal);
  }, [product, GrandTotal]);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userData"))._id;
    ProductListView(userId)
      .then(res => {
        console.log(res.Product);
        setProductList(res?.Product);
      })
      .catch(err => {
        console.log(err);
      });
    CreatePartyList()
      .then(res => {
        console.log(res.Party);
        setPartyList(res.Party);
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
        // DateofDelivery: "",
        // partyId: "",
        // discount: "",
        // Shipping: "",
        // tax: "",
      },
    ]);
  };
  let removeMoreProduct = i => {
    let newFormValues = [...product];
    newFormValues.splice(i, 1);
    GrandTotal.splice(i, 1);
    let amt = GrandTotal.reduce((a, b) => a + b);
    setGrandTotalAmt(amt);
    setProduct(newFormValues);
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log("Final ", product);
    let fullname = UserInfo.firstName + " " + UserInfo?.lastName;
    const ObjOrder = {
      userId: UserInfo?._id,
      fullName: fullname,
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
      SavePlaceOrder(ObjOrder)
        .then(res => {
          console.log(res);
          // if (res.status) {
          //   setFormData({});
          //   window.location.reload();
          swal("Order Place Successfully");
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
                <h1 className="">Place Order</h1>
              </div>
            </Col>
            <Col className="">
              <div className="d-flex justify-content-end">
                <Button
                  className="btn float-right"
                  color="warning"
                  onClick={() =>
                    history.push("/app/AjGroup/order/placeOrderList")
                  }
                >
                  Back
                </Button>
              </div>
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
                          // showCheckbox="true"
                          isObject="false"
                          options={ProductList}
                          // selectedValues={selectedValue}   // Preselected value to persist in dropdown
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
                          name="qty"
                          placeholder="Req_Qty"
                          value={product?.availableQty}
                          onChange={e => handleProductChangeProduct(e, index)}
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
                    <Col className="mb-1">
                      <div className="">
                        <Label>Choose Unit</Label>
                        <Multiselect
                          required
                          selectionLimit={1}
                          isObject="false"
                          options={UnitList}
                          onSelect={(selectedList, selectedItem) =>
                            handleSelectionUnit(
                              selectedList,
                              selectedItem,
                              index
                            )
                          }
                          onRemove={(selectedList, selectedItem) => {
                            onRemove1(selectedList, selectedItem, index);
                          }}
                          displayValue="primaryUnit"
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
export default PlaceOrder;
