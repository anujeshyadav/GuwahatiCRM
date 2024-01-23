import React, { useEffect, useState, useContext } from "react";
import xmlJs from "xml-js";
import { Route, useHistory, useParams } from "react-router-dom";
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
  CreateCustomerList,
  _Get,
  _Post,
  _PostSave,
} from "../../../../ApiEndPoint/ApiCalling";
import "../../../../assets/scss/pages/users.scss";
import { Create_Receipt } from "../../../../ApiEndPoint/Api";
import swal from "sweetalert";
let GrandTotal = [];
let SelectedITems = [];
let SelectedSize = [];
const CreatePayment = (args) => {
  const [error, setError] = useState("");
  const [PaymentType, setPaymentType] = useState("");
  const [PartyList, setPartyList] = useState([]);
  const [PartyId, setPartyId] = useState("");
  const [grandTotalAmt, setGrandTotalAmt] = useState(0);
  const [UserInfo, setUserInfo] = useState({});
  const [AllData, setAllData] = useState({});
  const [product, setProduct] = useState([
    {
      productId: "",
      availableQty: "",
      qty: 1,
      price: "",
      Size: "",
      unitType: "",
      totalprice: "",
    },
  ]);
  let History = useHistory();
  let Params = useParams();

  const handleSelectionParty = (selectedList, selectedItem) => {
    setPartyId(selectedItem?._id);
  };

  useEffect(() => {
    console.log(Params?.id);
    let userdata = JSON.parse(localStorage.getItem("userData"));

    CreateCustomerList(userdata?._id, userdata?.database)
      .then((res) => {
        let value = res?.Customer;
        if (value?.length) {
          setPartyList(value);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    setUserInfo(userInfo);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(AllData);

    const payload = {
      created_by: UserInfo?._id,
      paymentType: AllData?.PaymentType,
      paymentMode: AllData?.Paymentmode,
      partyId: PartyId ? PartyId : null,
      amount: AllData?.Amount ? AllData?.Amount : null,
      instrumentNo: AllData?.InstrumentNumber
        ? AllData?.InstrumentNumber
        : null,
      note: AllData?.Note ? AllData?.Note : null,
      title: AllData?.Title ? AllData?.Title : null,
      database: UserInfo?.database,
      type: "Payment",
    };
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      _PostSave(Create_Receipt, payload)
        .then((res) => {
          swal("Added Successfully");
          History.goBack();
        })
        .catch((err) => {
          swal("Somthing went Wrong");
          console.log(err);
        });
      //   SaveOrder(payload)
      //     .then((res) => {
      //       console.log(res);
      //       swal("Order Created Successfully");
      //       history.goBack();
      //       //  history.push("/app/softnumen/order/orderList")
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    }
  };

  const onRemove1 = (selectedList, removedItem, index) => {
    console.log(selectedList);
  };
  console.log(AllData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAllData({ ...AllData, [name]: value });
  };
  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col className="">
              <div>
                <h1 className="">Create Payment</h1>
              </div>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className="btn float-right"
                    color="danger"
                    size="sm"
                    onClick={() => history.goBack()}>
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
                  <Label>Choose Paymen Mode</Label>
                  <CustomInput
                    required
                    value={AllData?.Paymentmode}
                    name="Paymentmode"
                    onChange={handleChange}
                    type="select">
                    <option>--Select--</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank">Bank</option>
                  </CustomInput>
                </Col>
                <Col className="mb-1" lg="4" md="4" sm="12">
                  <Label>Choose Payment Type</Label>
                  <CustomInput
                    required
                    value={AllData?.PaymentType}
                    name="PaymentType"
                    onChange={(e) => {
                      setPaymentType(e.target.value);
                      handleChange(e);
                    }}
                    type="select">
                    <option>--Select--</option>
                    <option value="partyPayment">Party Payment</option>
                    <option value="otherPayment">Other Payment</option>
                  </CustomInput>
                </Col>
              </Row>
              {PaymentType && PaymentType == "partyPayment" && (
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
                          handleSelectionParty(selectedList, selectedItem)
                        }
                        onRemove={onRemove1}
                        displayValue="OwnerName"
                      />
                    </div>
                  </Col>
                  {AllData?.Paymentmode && AllData?.Paymentmode == "Bank" && (
                    <Col className="mb-1" lg="4" md="4" sm="12">
                      <Label>Instrument/Trx Number *</Label>
                      <Input
                        required
                        placeholder="Enter Instrument Number"
                        type="text"
                        value={AllData?.InstrumentNumber}
                        name="InstrumentNumber"
                        onChange={handleChange}
                      />
                    </Col>
                  )}
                  <Col className="mb-1" lg="4" md="4" sm="12">
                    <Label>Amount</Label>
                    <Input
                      required
                      placeholder="Enter Amount"
                      type="number"
                      value={AllData?.Amount}
                      name="Amount"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col className="mb-1" lg="4" md="4" sm="12">
                    <Label>Date</Label>
                    <Input
                      required
                      type="date"
                      value={AllData?.Date}
                      name="Date"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col className="mb-1" lg="4" md="4" sm="12">
                    <Label>Note :</Label>
                    <textarea
                      required
                      type="text"
                      placeholder="Enter Notes ..."
                      className="form-control"
                      value={AllData?.Note}
                      name="Note"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              )}
              {PaymentType && PaymentType == "otherPayment" && (
                <>
                  <Row>
                    <Col className="mb-1" lg="4" md="4" sm="12">
                      <Label>Title</Label>
                      <Input
                        required
                        type="text"
                        placeholder="Enter Title "
                        name="Title"
                        value={AllData?.Title}
                        onChange={handleChange}
                      />
                    </Col>
                    {AllData?.Paymentmode && AllData?.Paymentmode == "Bank" && (
                      <Col className="mb-1" lg="4" md="4" sm="12">
                        <Label>Instrument/Trx Number *</Label>
                        <Input
                          required
                          placeholder="Enter Instrument Number"
                          type="text"
                          value={AllData?.InstrumentNumber}
                          name="InstrumentNumber"
                          onChange={handleChange}
                        />
                      </Col>
                    )}
                    <Col className="mb-1" lg="4" md="4" sm="12">
                      <Label>Amount</Label>
                      <Input
                        required
                        type="number"
                        placeholder="Enter Amount"
                        value={AllData?.Amount}
                        name="Amount"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col className="mb-1" lg="4" md="4" sm="12">
                      <Label>Date</Label>
                      <Input
                        required
                        type="date"
                        value={AllData?.Date}
                        name="Date"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col className="mb-1" lg="4" md="4" sm="12">
                      <Label>Note :</Label>
                      <textarea
                        required
                        type="text"
                        placeholder="Enter Note..."
                        className="form-control"
                        value={AllData?.Note}
                        name="Note"
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </>
              )}

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
export default CreatePayment;
