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
import Select from "react-select";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { history } from "../../../../../history";
import "../../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  CreatewarehouseView,
  CreateWarehousesave,
} from "../../../../../ApiEndPoint/ApiCalling";

import "../../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../../context/Context";

const CreateWareHouse = () => {
  const [CreatWarehouseView, setCreatWarehouseView] = useState({});
  const [formData, setFormData] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});

  // const createUserXmlView = useContext(UserContext);

  const handleInputChange = (e, type, i) => {
    const { name, value } = e.target;
  setindex(i);
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
        // console.log(value);
        setError("");
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
        // setError("Input length exceeds the maximum of 10 characters");
      }
    }

  };
useEffect(() => {
    CreatewarehouseView()
      .then(res => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        setCreatWarehouseView(JSON.parse(jsonData))
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      CreateWarehousesave(formData)
        .then(res => {
          if (res.status) {
            setFormData({WarehouseName:"",mobileno:"",email:""});
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
                  CreatWarehouseView?.AddWareHouse?.input?.map((ele, i) => {
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
                    }

                    else {
                      return (
                        <>
                          <Col key={i} lg="4" md="4" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>

                              <Input
                                onKeyDown={e => {
                                  if (
                                    ele?.type?._attributes?.type == "number"
                                  ) {
                                    ["e", "E", "+", "-"].includes(e.key) &&
                                      e.preventDefault();
                                  }
                                }}
                                type={ele?.type?._attributes?.type}
                                placeholder={ele?.placeholder?._text}
                                name={ele?.name?._text}
                                value={formData[ele?.name?._text]}
                                onChange={e =>
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
                  })}
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
