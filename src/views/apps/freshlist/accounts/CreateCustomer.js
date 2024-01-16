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
  Badge,
} from "reactstrap";
import { history } from "../../../../history";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import moment from "moment-timezone";
import { Route, useHistory } from "react-router-dom";

import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  CreateAccountSave,
  CreateAccountView,
  CreateCustomersave,
  CreateCustomerxmlView,
  Get_RoleList,
  _BulkUpload,
} from "../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../context/Context";
import { CloudLightning } from "react-feather";
import { FaPlus } from "react-icons/fa";
import { Bulk_Upload_Customer } from "../../../../ApiEndPoint/Api";

const CreateCustomer = () => {
  const [CreatAccountView, setCreatAccountView] = useState([]);
  const [RoleList, setRoleList] = useState([]);
  const [Countries, setCountry] = useState({});
  const [BulkImport, setBulkImport] = useState(null);

  const [States, setState] = useState({});
  const [Cities, setCities] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState([]);
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});

  const Context = useContext(UserContext);
  let history = useHistory();

  const handleFileChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    let allimages = Array.from(e.target.files);
    setindex(i);
    setFormData({
      ...formData,
      [name]: allimages,
    });
  };
  const handleChange = () => {
    console.log("object");
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
        }
        //  else {
        //   setError(
        //     "Please enter a valid number with a maximum length of 10 digits"
        //   );
        // }
      } else if (type == "file") {
        // debugger;
        if (e.target.files) {
          setFormData({
            ...formData,
            [name]: e.target.files[0],
          });
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
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    let userdata = JSON.parse(localStorage.getItem("userData"));
    Get_RoleList(userdata?._id, userdata?.database)
      .then((res) => {
        let ShowList = res?.Role?.filter(
          (item, i) =>
            item?.roleName?.toLowerCase()?.includes("customer") ||
            item?.roleName?.toLowerCase()?.includes("transporter")
        );
        setRoleList(ShowList);
        // console.log(ShowList);
      })
      .catch((err) => {
        console.log(err);
        swal("Roles List Not found");
      });

    // console.log(userdata?._id);
    // formData["created_by"] = userdata?._id;
  }, []);
  useEffect(() => {
    CreateCustomerxmlView()
      .then((res) => {
        const jsonData = xmlJs.xml2json(res.data, {
          compact: true,
          spaces: 2,
        });

        console.log(JSON.parse(jsonData)?.CreateCustomer);
        setCreatAccountView(JSON.parse(jsonData)?.CreateCustomer?.input);

        setdropdownValue(JSON.parse(jsonData)?.CreateCustomer?.MyDropDown);
      })
      .catch((err) => {
        console.log(err);
        swal("Something Went Wrong");
      });
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (BulkImport !== null || BulkImport != undefined) {
      let formdata = new FormData();
      formdata.append("file", BulkImport);

      await _BulkUpload(Bulk_Upload_Customer, formdata)
        .then((res) => {
          swal(`${res?.message}`);
        })
        .catch((err) => {
          console.log(err);
          swal("Something Went Wrong");
        });
    } else {
      let userdata = JSON.parse(localStorage.getItem("userData"));
      let formdata = new FormData();
      dropdownValue?.map((ele, i) => {
        formdata.append(
          `${ele?.dropdown?.name?._text}`,
          formData[ele?.dropdown?.name?._text]
        );
      });
      CreatAccountView?.map((ele, i) => {
        if (ele?.type?._attributes?.type == "text") {
          formdata.append(`${ele?.name._text}`, formData[ele?.name?._text]);
        } else if (ele?.type?._attributes?.type == "file") {
          if (ele?.name?._text == "Shopphoto") {
            formData[ele?.name?._text]?.map((val, index) => {
              formdata.append("file", formData[ele?.name?._text][index]);
            });
          }
          if (ele?.name?._text == "photo") {
            formData[ele?.name?._text]?.map((val, index) => {
              formdata.append("files", formData[ele?.name?._text][index]);
            });
          }
        } else {
          formdata.append(`${ele?.name?._text}`, formData[ele?.name?._text]);
        }
      });
      // formdata.append(
      //   `${dropdownValue?.name?._text}`,
      //   formData[dropdownValue?.name?._text]
      // );
      formdata.append("status", formData?.status);
      formdata.append("database", userdata?.database);
      formdata.append("rolename", formData?.rolename);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const date = new Date(position.timestamp);
            const CurentTime = date.toLocaleString();
            formdata.append("latitude", position.coords.latitude);
            formdata.append("longitude", position.coords.longitude);
          },
          (error) => {
            // this.setState({ Error: `Error: ${error}` });
            swal(`Error: ${error}`);
          },
          { timeout: 10000, enableHighAccuracy: true }
        );
      } else {
        swal(`Error: Geolocation not found`);
      }

      formdata.forEach((value, key) => {
        console.log(key, value);
      });
      debugger;
      if (error) {
        // swal("Error occured while Entering Details");
      } else {
        CreateCustomersave(formdata)
          .then((res) => {
            console.log(res);
            setFormData({});
            if (res.status) {
              history.goBack();
              swal("Customer Created Successfully");
            }
          })
          .catch((err) => {
            console.log(err.response);
            swal("Please Fill correct details");
          });
      }
    }
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Create Customer</h1>
            </Col>
            <Col>
              <div className="float-right">
                <Route
                  render={({ history }) => (
                    <Button
                      style={{ cursor: "pointer" }}
                      className="float-right mr-1"
                      color="primary"
                      onClick={() =>
                        history.push("/app/SoftNumen/CustomerSearch")
                      }>
                      {" "}
                      Back
                      {/* <FaPlus size={15} /> Create User */}
                    </Button>
                  )}
                />
              </div>
            </Col>
          </Row>
          {/* <hr /> */}

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="4" md="4">
                  <FormGroup>
                    <Label className="mb-1">Role List *</Label>
                    <CustomInput
                      required
                      type="select"
                      name="rolename"
                      value={formData["rolename"]}
                      onChange={(e) => {
                        const selected = e.target.options[
                          e.target.selectedIndex
                        ]
                          .getAttribute("data-name")
                          ?.split(" ");

                        setFormData({
                          ...formData,
                          ["rolename"]: e.target.value,
                          ["roleName"]: selected[1],
                        });
                      }}>
                      <option>--select Role--</option>
                      {RoleList &&
                        RoleList?.length &&
                        RoleList?.map((ele, i) => {
                          return (
                            <option
                              data-name={`${ele?.position} ${ele?.roleName}`}
                              value={ele?._id}>
                              {ele?.roleName}
                            </option>
                          );
                        })}
                    </CustomInput>
                  </FormGroup>
                </Col>
                {dropdownValue && dropdownValue ? (
                  <>
                    {dropdownValue?.map((ele, i) => {
                      if (
                        formData?.roleName &&
                        formData?.roleName == "Transporter"
                      ) {
                        if (
                          ele?.dropdown?.label?._text == "Select Party Type"
                        ) {
                          return null;
                        } else {
                          return (
                            <>
                              <Col key={i} lg="4" md="4" sm="12">
                                <FormGroup>
                                  <Label className="mb-1">
                                    {ele?.dropdown?.label?._text &&
                                      ele?.dropdown?.label?._text}
                                  </Label>
                                  <CustomInput
                                    required
                                    type="select"
                                    name={ele?.dropdown?.name?._text}
                                    value={formData[ele?.dropdown?.name?._text]}
                                    onChange={handleInputChange}>
                                    <option value="">--Select --</option>
                                    {ele?.dropdown?.option?.map(
                                      (option, index) => (
                                        <option
                                          key={index}
                                          value={option?._attributes?.value}>
                                          {option?._attributes?.value}
                                        </option>
                                      )
                                    )}
                                  </CustomInput>
                                </FormGroup>
                              </Col>
                            </>
                          );
                        }
                      } else {
                        return (
                          <>
                            <Col key={i} lg="4" md="4" sm="12">
                              <FormGroup>
                                <Label className="mb-1">
                                  {ele?.dropdown?.label?._text &&
                                    ele?.dropdown?.label?._text}
                                </Label>
                                <CustomInput
                                  required
                                  type="select"
                                  name={ele?.dropdown?.name?._text}
                                  value={formData[ele?.dropdown?.name?._text]}
                                  onChange={handleInputChange}>
                                  <option value="">--Select --</option>
                                  {ele?.dropdown?.option?.map(
                                    (option, index) => (
                                      <option
                                        key={index}
                                        value={option?._attributes?.value}>
                                        {option?._attributes?.value}
                                      </option>
                                    )
                                  )}
                                </CustomInput>
                              </FormGroup>
                            </Col>
                          </>
                        );
                      }
                    })}
                  </>
                ) : null}

                {CreatAccountView &&
                  CreatAccountView?.map((ele, i) => {
                    if (
                      formData?.roleName &&
                      formData?.roleName == "Transporter"
                    ) {
                      debugger;
                    }
                    {
                      /* console.log(Context?.UserInformatio?.dateFormat); */
                    }
                    // console.log(Countries);
                    // console.log(States);
                    const convertedTime = moment("2022-08-05T12:00:00")
                      .tz("America/New_York")
                      .format("D MMM, YYYY HH:mm");

                    if (!!ele?.phoneinput) {
                      return (
                        <>
                          <Col key={i} lg="4" md="4" sm="12">
                            <FormGroup>
                              <Label className="mb-1">
                                {ele?.label?._text}
                              </Label>
                              <PhoneInput
                                inputClass="myphoneinput"
                                country={"us"}
                                onKeyDown={(e) => {
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
                                onChange={(phone) => {
                                  setFormData({
                                    ...formData,
                                    [ele?.name?._text]: phone,
                                  });
                                }}
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
                    } else if (!!ele?.library) {
                      if (ele?.label._text?.includes("ountry")) {
                        {
                          /* console.log(ele); */
                        }
                        return (
                          <Col key={i} lg="4" md="4" sm="12">
                            <FormGroup>
                              <Label className="mb-1">
                                {ele?.label?._text}
                              </Label>
                              <Select
                                inputClass="countryclass"
                                className="countryclassnw"
                                options={Country.getAllCountries()}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={Countries}
                                onChange={(country) => {
                                  setCountry(country);
                                  setFormData({
                                    ...formData,
                                    ["Country"]: country?.name,
                                  });
                                }}
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
                        );
                      } else if (ele?.label._text?.includes("tate")) {
                        return (
                          <Col key={i} lg="4" md="4" sm="12">
                            <FormGroup>
                              <Label className="mb-1">
                                {ele?.label?._text}
                              </Label>
                              <Select
                                options={State?.getStatesOfCountry(
                                  Countries?.isoCode
                                )}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={States}
                                onChange={(State) => {
                                  setState(State);
                                  setFormData({
                                    ...formData,
                                    ["State"]: State?.name,
                                  });
                                }}
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
                        );
                      } else if (ele?.label._text?.includes("ity")) {
                        return (
                          <Col key={i} lg="4" md="4" sm="12">
                            <FormGroup>
                              <Label className="mb-1">
                                {ele?.label?._text}
                              </Label>
                              <Select
                                options={City?.getCitiesOfState(
                                  States?.countryCode,
                                  States?.isoCode
                                )}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                value={Cities}
                                onChange={(City) => {
                                  setCities(City);
                                  setFormData({
                                    ...formData,
                                    ["City"]: City?.name,
                                  });
                                }}
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
                        );
                      } else {
                        return (
                          <>
                            {ele?.type?._attributes?.type == "date" ? (
                              <>
                                <Col key={i} lg="4" md="4" sm="12">
                                  <FormGroup key={i}>
                                    <Label className="mb-1">
                                      {ele?.label?._text}
                                    </Label>

                                    <Input
                                      onKeyDown={(e) => {
                                        if (
                                          ele?.type?._attributes?.type ==
                                          "number"
                                        ) {
                                          ["e", "E", "+", "-"].includes(
                                            e.key
                                          ) && e.preventDefault();
                                        }
                                      }}
                                      type={ele?.type?._attributes?.type}
                                      placeholder={ele?.placeholder?._text}
                                      name={ele?.name?._text}
                                      dateFormat={
                                        Context?.UserInformatio?.dateFormat
                                      }
                                      value={
                                        moment(formData[ele?.name?._text])
                                          .tz(Context?.UserInformatio?.timeZone)
                                          .format(
                                            Context?.UserInformatio?.dateFormat
                                          )
                                        // formData[ele?.name?._text]
                                      }
                                      // value={formData[ele?.name?._text]}
                                      onChange={(e) =>
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
                            ) : (
                              <>
                                <Col key={i} lg="4" md="4" sm="12">
                                  <FormGroup key={i}>
                                    <Label className="mb-1">
                                      {ele?.label?._text}
                                    </Label>

                                    <Input
                                      onKeyDown={(e) => {
                                        if (
                                          ele?.type?._attributes?.type ==
                                          "number"
                                        ) {
                                          ["e", "E", "+", "-"].includes(
                                            e.key
                                          ) && e.preventDefault();
                                        }
                                      }}
                                      type={ele?.type?._attributes?.type}
                                      placeholder={ele?.placeholder?._text}
                                      name={ele?.name?._text}
                                      value={formData[ele?.name?._text]}
                                      onChange={(e) =>
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
                            )}
                          </>
                        );
                      }
                    } else {
                      return (
                        <>
                          {!!ele?.number ? (
                            <>
                              <Col key={i} lg="4" md="4" sm="12">
                                <FormGroup key={i}>
                                  <Label className="mb-1">
                                    {ele?.label?._text}
                                  </Label>

                                  <Input
                                    onWheel={(e) => {
                                      e.preventDefault(); // Prevent the mouse wheel scroll event
                                    }}
                                    onKeyDown={(e) => {
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
                                    onChange={(e) =>
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
                          ) : (
                            <Col key={i} lg="4" md="4" sm="12">
                              <FormGroup key={i}>
                                {ele?.type?._attributes?.type &&
                                ele?.type?._attributes?.type == "file" ? (
                                  <>
                                    <Label className="mb-1">
                                      {ele?.label?._text}
                                    </Label>

                                    <Input
                                      multiple
                                      className="form-control"
                                      type={ele?.type?._attributes?.type}
                                      placeholder={ele?.placeholder?._text}
                                      name={ele?.name?._text}
                                      //   value={formData[ele?.name?._text]}
                                      onChange={(e) => {
                                        // const value = e.target.value;
                                        // // Use regular expression to allow only numbers
                                        // const numericValue = value.replace(
                                        //   /\D/g,
                                        //   ""
                                        // );
                                        handleFileChange(
                                          e,
                                          ele?.type?._attributes?.type,
                                          i
                                        );
                                      }}
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
                                  </>
                                ) : (
                                  <>
                                    <Label className="mb-1">
                                      {ele?.label?._text}
                                    </Label>

                                    <Input
                                      className="form-control"
                                      onKeyDown={(e) => {
                                        if (
                                          ele?.type?._attributes?.type ==
                                          "number"
                                        ) {
                                          ["e", "E", "+", "-"].includes(
                                            e.key
                                          ) && e.preventDefault();
                                        }
                                      }}
                                      type={ele?.type?._attributes?.type}
                                      placeholder={ele?.placeholder?._text}
                                      name={ele?.name?._text}
                                      value={formData[ele?.name?._text]}
                                      onChange={(e) => {
                                        // const value = e.target.value;
                                        // // Use regular expression to allow only numbers
                                        // const numericValue = value.replace(
                                        //   /\D/g,
                                        //   ""
                                        // );
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
                                          <span style={{ color: "red" }}>
                                            {error}
                                          </span>
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}

                                {/* <Label className="mb-1">
                                  {ele?.label?._text}
                                </Label>

                                <Input
                                  className="form-control"
                                  onKeyDown={(e) => {
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
                                  onChange={(e) => {
                                    // const value = e.target.value;
                                    // // Use regular expression to allow only numbers
                                    // const numericValue = value.replace(
                                    //   /\D/g,
                                    //   ""
                                    // );
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
                                      <span style={{ color: "red" }}>
                                        {error}
                                      </span>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )} */}
                              </FormGroup>
                            </Col>
                          )}
                        </>
                      );
                    }
                  })}
              </Row>

              <hr />
              <Row>
                <Col lg="12" md="12" sm="12">
                  <Label>OR</Label>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <FormGroup>
                    <Label>Bulk Import</Label>

                    <Input
                      className="form-control"
                      type="file"
                      placeholder=""
                      name="BulkImport"
                      onChange={(e) => {
                        setBulkImport(e.target.files[0]);
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-0">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        ["status"]: e.target.value,
                      });
                    }}>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2 mx-2">
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
export default CreateCustomer;
