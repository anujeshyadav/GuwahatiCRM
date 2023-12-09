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
} from "reactstrap";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  Createwarehousexml,
  CreateWarehousesave,
} from "../../../../../ApiEndPoint/ApiCalling";

import "../../../../../assets/scss/pages/users.scss";
// import UserContext from "../../../../../context/Context";

const CreateWareHouse = () => {
  const [CreatWarehouseView, setCreatWarehouseView] = useState({});
  const [formData, setFormData] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});

  const handleInputChange = (e, type, i) => {
    const { name, value } = e.target;
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
      setFormData({
        ...formData,
        [name]: value,
      });
      console.log(formData);
    }
  };
  useEffect(() => {
    Createwarehousexml()
      .then(res => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData).AddWareHouse.input);
        setCreatWarehouseView(JSON.parse(jsonData).AddWareHouse);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userData"))._id;
    formData["created_by"] = userId;

    if (error) {
      swal("Error occured while Entering Details");
    } else {
      CreateWarehousesave(formData)
        .then(res => {
          if (res.status) {
            setFormData({
              WarehouseName: "",
              mobileno: "",
              email: "",
              locaton: "",
            });
            swal(`Warehouse  ${res.message}`);
          }
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
            <Col>
              <h1 className="float-left">Create WareHouse</h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/softNumen/system/WareHouseListSoft")
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
              <Row className="mb-2">
                {CreatWarehouseView &&
                  CreatWarehouseView?.input?.map((ele, i) => {
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
                                  onKeyDown={e => {
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
                                  onChange={phone => {
                                    console.log(phone);
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
                    } else if (ele?.type?._attributes?.type == "text") {
                      return (
                        <Col key={i} lg="3" md="3" sm="12">
                          <FormGroup key={i}>
                            <Label>{ele?.label?._text}</Label>
                            <Input
                              type={ele?.type?._attributes?.type}
                              placeholder={ele?.placeholder?._text}
                              name={ele?.name?._text}
                              value={formData[ele?.name?._text]}
                              onChange={e => {
                                handleInputChange(
                                  e,
                                  ele?.type?._attributes?.type,
                                  i
                                );
                              }}
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
                          </FormGroup>
                        </Col>
                      );
                    } else {
                      return (
                        <Col key={i} lg="3" md="3" sm="12">
                          <FormGroup key={i}>
                            <Label>{ele?.label?._text}</Label>
                            <Input
                              type={ele?.type?._attributes?.type}
                              placeholder={ele?.placeholder?._text}
                              name={ele?.name?._text}
                              value={formData[ele?.name?._text]}
                              onChange={e => {
                                handleInputChange(
                                  e,
                                  ele?.type?._attributes?.type,
                                  i
                                );
                              }}
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
                          </FormGroup>
                        </Col>
                      );
                    }
                  })}
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-0">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={e => {
                      setFormData({
                        ...formData,
                        ["status"]: e.target.value,
                      });
                    }}
                  >
                    <input
                      checked={formData["status"] == "Active"}
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>
                    <input
                      checked={formData["status"] == "Deactive"}
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2 mx-2"
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreateWareHouse;
