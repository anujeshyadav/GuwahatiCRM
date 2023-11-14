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
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
} from "reactstrap";
import { history } from "../../../../../history";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import "../../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  Warranty_ViewData,
  createWikiViewData,
  Productwiki_ViewData,
  CreateAccountSave,
  CreateProductWiki,
  CommentProductWiki,
} from "../../../../../ApiEndPoint/ApiCalling";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsFillChatDotsFill, BsWhatsapp } from "react-icons/bs";
import "../../../../../assets/scss/pages/users.scss";
import UserContext from "../../../../../context/Context";
import { AiOutlineSearch } from "react-icons/ai";

const CreateWiki = (args) => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [IsSubmitted, setIsSubmitted] = useState(null);
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");
  const [permissions, setpermissions] = useState({});
  const [randomNumber, setRandomNumber] = useState("");
  const [modal, setModal] = useState(false);
  const [Commentshow, setCommentshow] = useState(false);
  const [Status, setStatus] = useState("Pending");
  const toggle = () => setModal(!modal);
  const createUserXmlView = useContext(UserContext);
  const [Comments, setComments] = useState([
    {
      userName: "",
      Role: "",
      comment: "",
      time: "",
    },
  ]);
  const [formValues, setFormValues] = useState([{ files: [] }]);
  const [formValue, setFormValue] = useState([{ files: [] }]);
  const newComment = {
    userName: JSON.parse(localStorage.getItem("userData")).UserName,
    Role: JSON.parse(localStorage.getItem("userData")).Role,
    comment: "",
    time: new Date().toString(),
  };
  let handleComment = (i, e) => {
    let user = JSON.parse(localStorage.getItem("userData"));
    let newFormValues = [...Comments];
    newFormValues[i]["userName"] = user?.UserName;
    newFormValues[i]["Role"] = user?.Role;
    newFormValues[i]["time"] = new Date().toString();
    newFormValues[i][e.target.name] = e.target.value;
    setComments(newFormValues);
  };
  const SubmitComment = () => {
    let user = JSON.parse(localStorage.getItem("userData"));
  setCommentshow(true);
    CommentProductWiki(user?.accountId, Comments)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let addFormFields = () => {
    setComments([...Comments, newComment]);
  };
  let addFileInput = () => {
    setFormValues([...formValues, { files: [] }]);
  };
  let addFileInputs = () => {
    setFormValue([...formValue, { files: [] }]);
  };

  let removeFileAttach = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let removeFileAttachs = (i) => {
    let newFormValues = [...formValue];
    newFormValues.splice(i, 1);
    setFormValue(newFormValues);
  };
  const generateRandomNumber = () => {
    const min = 1000; // Smallest 5-digit number
    const max = 9999; // Largest 5-digit number
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  };

  let handleFileChange = (i, e) => {
    const newFormValues = [...formValues];
    const selectedFiles = e.target.files;
    newFormValues[i].files = selectedFiles;
    setFormValues(newFormValues);
  };
  let handleFileChanges = (i, e) => {
    const newFormValues = [...formValue];
    const selectedFiles = e.target.files;
    newFormValues[i].files = selectedFiles;
    setFormValue(newFormValues);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...Comments];
    newFormValues.splice(i, 1);
    setComments(newFormValues);
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

  const handleopentoggle = () => {
    toggle();
  };
  useEffect(() => {
    console.log(formData);
    return () => {
      window.onbeforeunload = function () {
        console.log(CreatAccountView?.createWiki);
        HandleSaveDraft();
      };
    };
  }, [CreatAccountView, formData, Comments, formValues, formValue]);

  useEffect(() => {
    generateRandomNumber();
    Productwiki_ViewData()
      .then((res) => {
        console.log(res);
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData).createWiki);

        let value = JSON.parse(jsonData)?.createWiki?.CheckBox?.input;
        value?.map((ele) => {
          formData[ele?.name._text] = false;
        });
        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      if (IsSubmitted == null) {
        setIsSubmitted("Not");
      }
    };

    // This code runs when the component is unmounted (user leaves).
  }, []);

  const HandleSaveDraft = () => {
    let formdata = new FormData();
    console.log(CreatAccountView?.createWiki);
    CreatAccountView?.createWiki?.CheckBox?.input?.map((ele) => {
      formdata.append(`${ele?.name._text}`, formData[ele?.name._text]);
    });

    CreatAccountView?.createWiki?.MyDropDown?.map((ele) => {
      formdata.append(
        `${ele?.dropdown?.name?._text}`,
        formData[ele?.dropdown?.name?._text]
      );
    });

    CreatAccountView?.createWiki?.input?.map((ele) => {
      formdata.append(`${ele?.name?._text}`, formData[ele?.name?._text]);
    });

    formdata.append(`Status`, "Draft");
    formdata.append("id", "wiki" + { randomNumber });
    if (Comments.length > 0) {
      formdata.append(`Comments`, JSON.stringify(Comments));
    }

    let user = JSON.parse(localStorage.getItem("userData"));
    if (formValues.length) {
      let myarr = [];
      formValues?.map((ele, i) => {
        let newdata = Array.from(ele?.files);
        myarr.push(newdata);
      });
      let totalimg = myarr.flat();
      totalimg?.map((ele, i) => {
        formdata.append("files", ele);
      });
    }
    if (formValue.length || formValues.length) {
      formdata.append("Role", user?.Role);
      formdata.append("time", new Date().toString());
      formdata.append("userName", user?.UserName);
    }
    if (formValue.length) {
      let myarr = [];
      formValue?.map((ele, i) => {
        let newdata = Array.from(ele?.files);
        myarr.push(newdata);
      });
      let totalimg = myarr.flat();
      totalimg?.map((ele, i) => {
        formdata.append("files", ele);
      });
    }

    // for (const [key, value] of formdata.entries()) {
    //   console.log(`Key: ${key}, Value: ${value}`);
    // }

    // let data = { ...formData, Comments: Comments && Comments, formdata };
    CreateProductWiki(formdata)
      .then((res) => {
        // console.log(res);
        // swal("Wiki Created Successfully");
      })
      .catch((err) => {
        console.log(err.response);
        // swal("Something Went Wrong");
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    CreatAccountView?.createWiki?.CheckBox?.input?.map((ele) => {
      formdata.append(`${ele?.name._text}`, formData[ele?.name._text]);
    });

    CreatAccountView?.createWiki?.MyDropDown?.map((ele) => {
      formdata.append(
        `${ele?.dropdown?.name?._text}`,
        formData[ele?.dropdown?.name?._text]
      );
    });

    CreatAccountView?.createWiki?.input?.map((ele) => {
      formdata.append(`${ele?.name?._text}`, formData[ele?.name?._text]);
    });

    formdata.append(`Status`, Status);
    formdata.append("id", "wiki" + { randomNumber });
    if (Comments.length > 0) {
      formdata.append(`Comments`, JSON.stringify(Comments));
    }

    let user = JSON.parse(localStorage.getItem("userData"));
    if (formValues.length) {
      let myarr = [];
      formValues?.map((ele, i) => {
        let newdata = Array.from(ele?.files);
        myarr.push(newdata);
      });
      let totalimg = myarr.flat();
      totalimg?.map((ele, i) => {
        formdata.append("files", ele);
      });
    }
    if (formValue.length || formValues.length) {
      formdata.append("Role", user?.Role);
      formdata.append("time", new Date().toString());
      formdata.append("userName", user?.UserName);
    }
    if (formValue.length) {
      let myarr = [];
      formValue?.map((ele, i) => {
        let newdata = Array.from(ele?.files);
        myarr.push(newdata);
      });
      let totalimg = myarr.flat();
      totalimg?.map((ele, i) => {
        formdata.append("files", ele);
      });
    }

    // for (const [key, value] of formdata.entries()) {
    //   console.log(`Key: ${key}, Value: ${value}`);
    // }

    // let data = { ...formData, Comments: Comments && Comments, formdata };
    CreateProductWiki(formdata)
      .then((res) => {
        setIsSubmitted("Yes");
        console.log(res);
        swal("Wiki Created Successfully");
      })
      .catch((err) => {
        console.log(err.response);
        swal("Something Went Wrong");
      });
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col className="">
              <div
                style={{ justifyContent: "space-between" }}
                className="d-flex myclasswikiheading"
              >
                <h1 className="justify-content-start">Create Wiki </h1>
                <div className="mystatus">Status : (Draft) </div>
                <div className="mystatus">
                  {" "}
                  <div>
                    <Label> Change Status</Label>
                    <CustomInput
                      required
                      type="select"
                      name="Status"
                      value={formData["Status"]}
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Status---</option>
                      <option value="Draft">Draft</option>
                      <option value="Pending">Pending</option>
                      <option value="Query">Query</option>
                      <option value="Accept">Accept</option>
                      <option value="Hold">Hold</option>
                      <option value="Work In Progress">Work In Progress</option>
                      <option value="Approve">Approve</option>
                      <option value="Reject">Reject</option>
                      <option value="Paid">Paid</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </CustomInput>
                  </div>{" "}
                </div>
              </div>
              <div>
                <span>Wiki Id</span> <span># :wiki{randomNumber}</span>
              </div>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                {dropdownValue?.createWiki?.MyDropDown.map((drop, i) => {
                  return (
                    <Col lg="6" md="6" key={i}>
                      <FormGroup>
                        <Label>{drop?.dropdown?.label?._text}</Label>
                        <CustomInput
                          // required
                          type="select"
                          name={drop?.dropdown?.name?._text}
                          value={formData[drop?.dropdown?.name?._text]}
                          onChange={handleInputChange}
                        >
                          <option value="">
                            --Select {drop?.dropdown.name._text}---
                          </option>
                          {drop.dropdown.option.map((option, index) => {
                            return (
                              <option
                                key={index}
                                value={option?._attributes?.value}
                              >
                                {option?._attributes?.value}
                              </option>
                            );
                          })}
                        </CustomInput>
                      </FormGroup>
                    </Col>
                  );
                })}

                {CreatAccountView &&
                  CreatAccountView?.createWiki?.input?.map((ele, i) => {
                    let View = "";
                    let Edit = "";
                    if (ele?.role) {
                      let roles = ele?.role?.find(
                        (role) => role._attributes?.name === "WARRANTY APPROVER"
                      );

                      View = roles?.permissions?._text.includes("View");
                      Edit = roles?.permissions?._text.includes("Edit");
                    }
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
                    } else if (!!ele?.lookup) {
                      return (
                        <>
                          <>
                            <Col key={i} lg="6" md="6" sm="12">
                              <FormGroup>
                                <Label>{ele?.label?._text}</Label>
                                <InputGroup className="maininput">
                                  <Input
                                    className="form-control inputs"
                                    type="text"
                                    name={ele?.name?._text}
                                    placeholder={ele?.name._text}
                                    value={formData[ele?.name?._text]}
                                    readOnly
                                  />{" "}
                                  <Button
                                    onClick={handleopentoggle}
                                    color="primary"
                                    className="mybtn primary"
                                  >
                                    <AiOutlineSearch
                                      onClick={(e) => e.preventDefault()}
                                      fill="white"
                                    />
                                  </Button>
                                </InputGroup>

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
                    } else {
                      return (
                        <>
                          <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>

                              <Input
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
                      );
                    }
                  })}

                <div className="container">
                  <Label className="py-1">Notification</Label>
                  <div>
                    {CreatAccountView &&
                      CreatAccountView?.createWiki?.CheckBox?.input?.map(
                        (ele, i) => {
                          return (
                            <>
                              <span key={i} className="mx-2">
                                <Input
                                  style={{ marginRight: "3px" }}
                                  type={ele?.type?._attributes?.type}
                                  name={ele?.name?._text}
                                  onChange={(e) =>
                                    handleInputChange(e, "checkbox")
                                  }
                                />{" "}
                                <span
                                  className="mt-1 mx-1"
                                  style={{ marginRight: "40px" }}
                                >
                                  {ele?.label?._text == "Whatsapp" ? (
                                    <BsWhatsapp
                                      className="mx-1"
                                      color="#59CE72"
                                      size={25}
                                    />
                                  ) : (
                                    <>
                                      {ele.label?._text == "SMS" ? (
                                        <>
                                          <FcPhoneAndroid size={30} />
                                        </>
                                      ) : (
                                        <>
                                          <BiEnvelope className="" size={30} />
                                        </>
                                      )}
                                    </>
                                  )}
                                </span>
                              </span>
                            </>
                          );
                        }
                      )}
                  </div>
                </div>
              </Row>
              {formValues.map((index, i) => (
                <>
                  <Label className="mt-1">Attachments :</Label>
                  <Row className="my-1">
                    <Col lg="6" md="6" sm="12" key={i}>
                      <Input
                        type="file"
                        multiple
                        onChange={(e) => handleFileChange(i, e)}
                      />
                    </Col>
                    <Col className="d-flex mt-2" lg="3" md="3" sm="12">
                      <div>
                        {i ? (
                          <Button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeFileAttach(i)}
                          >
                            -
                          </Button>
                        ) : null}
                      </div>
                      <div>
                        <Button
                          className="ml-1"
                          color="primary"
                          type="button"
                          onClick={() => addFileInput()}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </>
              ))}

              <hr />
              {/* <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status :-</h4>
                  </Label>
                  <div className="form-label-group mx-1">
                    {CreatAccountView &&
                      CreatAccountView?.Warranty?.Radiobutton?.input?.map(
                        (ele, i) => {
                          return (
                            <FormGroup key={i}>
                              <Input
                                key={i}
                                style={{ marginRight: "3px" }}
                                required
                                type={ele?.type?._attributes?.type}
                                name={ele?.name?._text}
                                value={`${
                                  ele?.label?._text == "Active"
                                    ? "Active"
                                    : "Deactive"
                                }`}
                                onChange={handleInputChange}
                              />{" "}
                              <span
                                className="mx-1 mt-1"
                                style={{ marginRight: "20px" }}
                              >
                                {ele?.label?._text}
                              </span>
                            </FormGroup>
                          );
                        }
                      )}
                  </div>
                </Col>
              </Row> */}

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
            {Commentshow && Commentshow ? (
              <>
                {Comments.length &&
                  Comments?.map((ele, i) => (
                    <Row key={i}>
                      <Col>
                        <div
                          style={{
                            border: "1px solid black",
                            padding: "2px 2px",
                            borderRadius: "8px",
                            marginBottom: "4px",
                          }}
                          className=""
                        >
                          <div className="py-1 mx-2">
                            <strong>
                              {" "}
                              <BsFillChatDotsFill size={25} fill="#055761" />
                            </strong>{" "}
                            &nbsp;{ele?.comment} {ele?.userName} ({ele?.Role}){" "}
                            {ele?.time}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ))}
              </>
            ) : null}
            {Comments &&
              Comments?.map((element, index) => (
                <>
                  <Row key={index} className="my-2">
                    <Col lg="6" md="6" sm="12">
                      <Label>Comment</Label>
                      <Input
                        type="textarea"
                        name="comment"
                        placeholder="Comment"
                        value={element.comment || ""}
                        onChange={(e) => handleComment(index, e)}
                      />
                    </Col>

                    <Col className="d-flex mt-2" lg="3" md="3" sm="12">
                      <div>
                        {index ? (
                          <Button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeFormFields(index)}
                          >
                            -
                          </Button>
                        ) : null}
                      </div>

                      <div>
                        <Button
                          className="ml-1 "
                          color="primary"
                          type="button"
                          onClick={() => addFormFields()}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </>
              ))}
            <Button
              className="ml-1 "
              color="primary"
              onClick={(e) => {
                SubmitComment(e);
              }}
            >
              Submit Comment
            </Button>
            <section>
              {formValue?.map((index, i) => (
                <>
                  <Label className="mt-1">Upload :</Label>
                  <Row className="my-1">
                    <Col lg="6" md="6" sm="12" key={i}>
                      <Input
                        type="file"
                        multiple
                        onChange={(e) => handleFileChanges(i, e)}
                      />
                    </Col>
                    <Col className="d-flex mt-2" lg="3" md="3" sm="12">
                      <div>
                        {i ? (
                          <Button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeFileAttachs(i)}
                          >
                            -
                          </Button>
                        ) : null}
                      </div>
                      <div>
                        <Button
                          className="ml-1"
                          color="primary"
                          type="button"
                          onClick={() => addFileInputs()}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </>
              ))}
            </section>
          </CardBody>
        </Card>
      </div>

      <Modal
        fullscreen="xl"
        size="lg"
        backdrop={false}
        isOpen={modal}
        toggle={toggle}
        {...args}
      >
        <ModalHeader toggle={toggle}>Product List</ModalHeader>
        <ModalBody>
          <div className="modalheaderaddrol p-1">
            <h3>Product List</h3>
            <Table
              className="tableofrole"
              bordered
              borderless
              hover
              responsive
              size="sm"
              striped
            >
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Product Name</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default CreateWiki;
