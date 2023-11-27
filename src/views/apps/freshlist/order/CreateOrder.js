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
  CreatePartyList,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import Payment from "./payment/Payment";
import OrderedList from "./OrderedList";
import AuditHistory from "./audithistory/AuditHistory";
let GrandTotal = [];
let SelectedITems = [];
const CreateOrder = (args) => {
 const [formData, setFormData] = useState({});
  const [Index, setIndex] = useState("");
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [PartyList, setPartyList] = useState([]);
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
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
        console.log(val.qty* val.price)
        list[index]["totalprice"] = val.qty* val.price;
        return val.qty * val.price;
      });
     amt = x.reduce((a, b) => a + b);
      console.log("GrandTotal",amt);
    }
    // console.log(list)
    setProduct(list);
    setGrandTotalAmt(amt)
console.log(GrandTotal); 
  };

  const handleSelection = (selectedList, selectedItem, index) => {
    SelectedITems.push(selectedItem);
setProduct(prevProductList => {
    const updatedProductList = [...prevProductList]; // Create a copy of the productList array
    const updatedProduct = { ...updatedProductList[index] }; // Create a copy of the product at the specified index
    updatedProduct.price = selectedItem.Product_MRP; // Update the price of the copied product
    updatedProduct.productId = selectedItem._id;
    updatedProductList[index] = updatedProduct; // Replace the product at the specified index with the updated one
    let myarr = prevProductList?.map((ele, i) => {
     console.log(ele?.qty * selectedItem[i]?.Product_MRP);
      let indextotal = ele?.qty * SelectedITems[i]?.Product_MRP;
      GrandTotal[index] = indextotal;
      return indextotal;
    });
    console.log(myarr);
    let amt = myarr.reduce((a, b) => a + b);
    setGrandTotalAmt(amt);
 return updatedProductList; // Return the updated product list to set the state
 
  });
  product.map((value) => console.log(value.totalprice));
 onSelect1(selectedList, selectedItem, index);
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
 
  useEffect(() => {
    // console.log(product);
    console.log(GrandTotal)
  }, [product,GrandTotal]);

  useEffect(() => {
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
        setPartyList(res.Party)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    console.log(userInfo)
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
  </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
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
                    <Col className="mb-1" lg="2" md="2" sm="12">
                      <div className="">
                        <Label>Choose Party</Label>

                        <Multiselect
                          required
                          selectionLimit={1}
                          // showCheckbox="true"
                           isObject="false"
                          options={PartyList} // Options to display in the dropdown
                          // selectedValues={selectedValue}   // Preselected value to persist in dropdown
                          onSelect={onSelect1} // Function will trigger on select event
                          onRemove={onRemove1} // Function will trigger on remove event
                          displayValue="firstName" // Property name to display in the dropdown options
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
                    <Label className="pr-5">
                      Grand Total : <strong>{grandTotalAmt}</strong>
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
export default CreateOrder;
